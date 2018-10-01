package nl.maastro.beslissamenbackend.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "beslis-samen")
public class SessionConfigurationProperties {
    
    /* 
     * Timeout in milliseconds of inactivity before session is suspended
     */
    int sessionInactivityTimeout = 300000;

    public int getSessionInactivityTimeout() {
        return sessionInactivityTimeout;
    }

    public void setSessionInactivityTimeout(int sessionInactivityTimeout) {
        this.sessionInactivityTimeout = sessionInactivityTimeout;
    }

}
