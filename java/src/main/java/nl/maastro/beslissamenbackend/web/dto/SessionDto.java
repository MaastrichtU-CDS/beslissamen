package nl.maastro.beslissamenbackend.web.dto;

import java.time.LocalDateTime;

import nl.maastro.beslissamenbackend.entity.Session.SessionStatus;

public class SessionDto {
    
    private long id;
    
    private String loginCode;
    
    private String decisionAid;
    
    private LocalDateTime sessionStart;
    
    private LocalDateTime sessionStop;
    
    private LocalDateTime lastActivity;
    
    private Long activityTimeInMilliseconds;
    
    private SessionStatus status;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLoginCode() {
        return loginCode;
    }

    public void setLoginCode(String loginCode) {
        this.loginCode = loginCode;
    }

    public String getDecisionAid() {
        return decisionAid;
    }

    public void setDecisionAid(String decisionAid) {
        this.decisionAid = decisionAid;
    }

    public LocalDateTime getSessionStart() {
        return sessionStart;
    }

    public void setSessionStart(LocalDateTime sessionStart) {
        this.sessionStart = sessionStart;
    }

    public LocalDateTime getSessionStop() {
        return sessionStop;
    }

    public void setSessionStop(LocalDateTime sessionStop) {
        this.sessionStop = sessionStop;
    }

    public LocalDateTime getLastActivity() {
        return lastActivity;
    }

    public void setLastActivity(LocalDateTime lastActivity) {
        this.lastActivity = lastActivity;
    }

    public Long getActivityTimeInMilliseconds() {
        return activityTimeInMilliseconds;
    }

    public void setActivityTimeInMilliseconds(Long activityTimeInMilliseconds) {
        this.activityTimeInMilliseconds = activityTimeInMilliseconds;
    }
    
    public SessionStatus getStatus() {
        return status;
    }

    public void setStatus(SessionStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "SessionDto [id=" + id + ", loginCode=" + loginCode + ", decisionAid=" + decisionAid + ", sessionStart="
                + sessionStart + ", sessionStop=" + sessionStop + ", lastActivity=" + lastActivity
                + ", activityTimeInMilliseconds=" + activityTimeInMilliseconds + ", status=" + status + "]";
    }

}
