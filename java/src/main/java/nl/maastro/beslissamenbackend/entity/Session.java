package nl.maastro.beslissamenbackend.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

@Entity
public class Session {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO) 
    private long id;
    
    @ManyToOne
    private UserAccount userAccount; 
    
    private String decisionAid;
    
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime sessionStart;
    
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime sessionStop;
    
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime lastActivity;
    
    private Long activityTimeInMilliseconds;
    
    private SessionStatus status;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    
    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
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
        return "Session [id=" + id + ", userAccount=" + userAccount + ", decisionAid=" + decisionAid + ", sessionStart="
                + sessionStart + ", sessionStop=" + sessionStop + ", lastActivity=" + lastActivity
                + ", activityTimeInMilliseconds=" + activityTimeInMilliseconds + ", status=" + status + "]";
    }
    
    public static enum SessionStatus {
        RUNNING, PAUSED, STOPPED
    }

}
