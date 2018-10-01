package nl.maastro.beslissamenbackend.web.controller;

import java.net.URI;
import java.time.LocalDateTime;

import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import nl.maastro.beslissamenbackend.entity.Session;
import nl.maastro.beslissamenbackend.service.SessionService;
import nl.maastro.beslissamenbackend.web.dto.SessionDto;

@RestController
@RequestMapping("/api")
public class SessionController {
    
    private static final Logger logger = LogManager.getLogger(SessionController.class);
    
    private SessionService sessionService;
    
    public SessionController(
            SessionService sessionService) {
        this.sessionService = sessionService;
    }

    @PostMapping(value="/session")
    public ResponseEntity<SessionDto> createSession(
            @RequestBody SessionDto sessionDto) throws Exception {
        logger.info("REST request to create Session");
        Session session = sessionService.createSession(sessionDto);
        sessionDto = sessionService.map(session);
        return ResponseEntity.created(new URI("/api/session/" + session.getId()))
                .body(sessionDto);
    }
    
    @PutMapping(value="/session/{id}/heartbeat")
    public ResponseEntity<Void> setHeartbeat(@PathVariable Long id) throws Exception {
        logger.info("REST request to set heartbeat for Session " + id);
        LocalDateTime timeStamp = LocalDateTime.now();
        sessionService.setHeartbeat(id, timeStamp);
        return ResponseEntity.ok().build();
    }
    
    @PutMapping(value="/session/{id}/pause")
    public ResponseEntity<Void> pauseSession(@PathVariable Long id) throws Exception {
        logger.info("REST request to pause Session " + id);
        LocalDateTime timeStamp = LocalDateTime.now();
        sessionService.pauseSession(id, timeStamp);
        return ResponseEntity.ok().build();
    }
    
    @PutMapping(value="/session/{id}/continue")
    public ResponseEntity<Void> continueSession(@PathVariable Long id) throws Exception {
        logger.info("REST request to continue Session " + id);
        LocalDateTime timeStamp = LocalDateTime.now();
        sessionService.continueSession(id, timeStamp);
        return ResponseEntity.ok().build();
    }
    
    @PutMapping(value="/session/{id}/stop")
    public ResponseEntity<Void> stopSession(@PathVariable Long id) throws Exception {
        logger.info("REST request to stop Session " + id);
        LocalDateTime timeStamp = LocalDateTime.now();
        sessionService.stopSession(id, timeStamp);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping(value = "/session/{id}")
    public ResponseEntity<SessionDto> getSession(@PathVariable Long id) throws Exception {
        logger.info("REST request to get Session for id=" + id);
        Session session = sessionService.getSession(id);
        SessionDto sessionDto = sessionService.map(session);
        return ResponseEntity.ok(sessionDto);
    }
    
    @GetMapping(value = "/session/csv")
    public void downloadCsv(HttpServletResponse response) throws Exception {
        logger.info("REST request to get CSV export of all sessions");
        response.setContentType("application/x-download");
        response.setHeader("Content-disposition", "attachment; filename=\"export.csv\"");
        sessionService.writeCsv(response.getWriter());
    }
    
}
