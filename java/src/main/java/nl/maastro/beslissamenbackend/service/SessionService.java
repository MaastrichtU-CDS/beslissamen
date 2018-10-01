package nl.maastro.beslissamenbackend.service;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;

import javassist.NotFoundException;
import nl.maastro.beslissamenbackend.config.SessionConfigurationProperties;
import nl.maastro.beslissamenbackend.entity.Session;
import nl.maastro.beslissamenbackend.entity.Session.SessionStatus;
import nl.maastro.beslissamenbackend.entity.UserAccount;
import nl.maastro.beslissamenbackend.repository.SessionRepository;
import nl.maastro.beslissamenbackend.repository.UserAccountRepository;
import nl.maastro.beslissamenbackend.web.dto.SessionDto;

@Service
@EnableConfigurationProperties(SessionConfigurationProperties.class)
public class SessionService {
    
    private static final Logger logger = LogManager.getLogger(SessionService.class);
    
    private Integer inactivityTimeout;
    private UserAccountRepository userAccountRepository;
    private SessionRepository sessionRepository;
    
    public SessionService(
            SessionConfigurationProperties sessionConfigurationProperties,
            UserAccountRepository userAccountRepository, 
            SessionRepository sessionRepository) {
        this.inactivityTimeout = sessionConfigurationProperties.getSessionInactivityTimeout();
        this.userAccountRepository = userAccountRepository;
        this.sessionRepository = sessionRepository;
    }
    
    public Session createSession(SessionDto sessionDto) throws NotFoundException {
        String loginCode = sessionDto.getLoginCode();
        UserAccount userAccount = userAccountRepository.findByLoginCode(loginCode);
        if (userAccount == null) {
            throw new NotFoundException("UserAccount not found for loginCode:" + loginCode);
        }
        LocalDateTime timeStamp = LocalDateTime.now();
        Session session = new Session();
        session.setUserAccount(userAccount);
        session.setDecisionAid(sessionDto.getDecisionAid());
        session.setSessionStart(timeStamp);
        session.setLastActivity(session.getSessionStart());
        session.setActivityTimeInMilliseconds(0l);
        session.setStatus(SessionStatus.RUNNING);
        session = sessionRepository.saveAndFlush(session);
        logger.info("Created Session: " + session);
        return session;
    }
    
    public Session getSession(Long id) throws NotFoundException {
        Optional<Session> session = sessionRepository.findById(id);
        if (session.isPresent()) {
            return session.get();
        } else {
            throw new NotFoundException("Session not found for id=" + id);
        }
    }
    
    public void setHeartbeat(Long id, LocalDateTime timeStamp) throws Exception {
        Session session = getSession(id);
        session = recordActivity(session, timeStamp);
        session = sessionRepository.saveAndFlush(session);
    }
    
    public void pauseSession(Long id, LocalDateTime timeStamp) throws Exception {
        Session session = getSession(id);
        if (session.getStatus().equals(SessionStatus.RUNNING)) {
            session = recordActivity(session, timeStamp);
            session.setStatus(SessionStatus.PAUSED);
            session = sessionRepository.saveAndFlush(session);
        }
    }

    public void continueSession(Long id, LocalDateTime timeStamp) throws Exception {
        Session session = getSession(id);
        if (session.getStatus().equals(SessionStatus.PAUSED)) {
            session.setLastActivity(timeStamp);
            session.setStatus(SessionStatus.RUNNING);
            session = sessionRepository.saveAndFlush(session);
        }
    }
    
    public void stopSession(Long id, LocalDateTime timeStamp) throws Exception {
        Session session = getSession(id);
        if (session.getStatus().equals(SessionStatus.RUNNING)) {
            session = recordActivity(session, timeStamp);
        }
        session.setStatus(SessionStatus.STOPPED);
        session.setSessionStop(timeStamp);
        session = sessionRepository.saveAndFlush(session);
    }
    
    public void writeCsv(PrintWriter writer) throws IOException {
        try { 
            writer.write("\"id\""
                    + ",\"loginCode\""
                    + ",\"decisionAid\""
                    + ",\"status\""
                    + ",\"sessionStart\""
                    + ",\"sessionStop\""
                    + ",\"lastActivity\""
                    + ",\"activityTimeInMilliseconds\"\n");
            List<Session> sessions = sessionRepository.findAll();
            for (Session session : sessions) {
                writer.write(session.getId() 
                        + "," + "\"" + session.getUserAccount().getLoginCode() + "\""
                        + "," + "\"" + session.getDecisionAid() + "\""
                        + "," + "\"" + session.getStatus() + "\""
                        + "," + "\"" + session.getSessionStart() + "\""
                        + "," + "\"" + session.getSessionStop() + "\""
                        + "," + "\"" + session.getLastActivity() + "\""
                        + "," + "\"" + session.getActivityTimeInMilliseconds() + "\"\n");
            }
        } finally {
            writer.close();
        }
    }
    
    public SessionDto map(Session session) {
        SessionDto sessionDto = new SessionDto();
        sessionDto.setId(session.getId());
        sessionDto.setLoginCode(session.getUserAccount().getLoginCode());
        sessionDto.setDecisionAid(session.getDecisionAid());
        sessionDto.setSessionStart(session.getSessionStart());
        sessionDto.setSessionStop(session.getSessionStop());
        sessionDto.setLastActivity(session.getLastActivity());
        sessionDto.setActivityTimeInMilliseconds(session.getActivityTimeInMilliseconds());
        sessionDto.setStatus(session.getStatus());
        return sessionDto;
    }
    
    private Session recordActivity(Session session, LocalDateTime timeStamp) throws IllegalStateException {
        SessionStatus sessionStatus = session.getStatus();
        if (sessionStatus.equals(SessionStatus.RUNNING)) {
            LocalDateTime lastUpdated = session.getLastActivity();
            long timeSinceLastActivity = Duration.between(lastUpdated, timeStamp).toMillis();
            long timeIncrement = Math.min(timeSinceLastActivity, inactivityTimeout);
            session.setActivityTimeInMilliseconds(session.getActivityTimeInMilliseconds() + timeIncrement);
            session.setLastActivity(timeStamp);
            logger.debug("Recorded new activity; sessionId=" + session.getId()
                + "; lastActivity=" + session.getLastActivity()
                + ", activityTimeInMilliseconds=" + session.getActivityTimeInMilliseconds());
            return session;
        } else {
            throw new IllegalStateException("Unable to record activity when sessionStatus=" + sessionStatus);
        }
    }
    
}
