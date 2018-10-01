package nl.maastro.beslissamenbackend.web.controller;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import nl.maastro.beslissamenbackend.entity.UserAccount;
import nl.maastro.beslissamenbackend.repository.UserAccountRepository;

@RestController
@RequestMapping("/api")
public class UserAccountController {
    
    private static final Logger logger = LogManager.getLogger(UserAccountController.class);
    
    private UserAccountRepository userAccountRepository;
    
    public UserAccountController(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @PostMapping(value="/account")
    public ResponseEntity<UserAccount> createAccount(){
        logger.info("REST request to create new UserAccount");
        String loginCode = generateLoginCode();
        UserAccount userAccount = new UserAccount();
        userAccount.setLoginCode(loginCode);
        userAccount = userAccountRepository.save(userAccount);
        return ResponseEntity.ok(userAccount);
    }
    
    @GetMapping(value="/account/validate")
    public ResponseEntity<Boolean> validateLogin(
            @RequestParam(required=true) String loginCode) {
        logger.info("REST request to validate loginCode");
        UserAccount userAccount = userAccountRepository.findByLoginCode(loginCode);
        if (userAccount != null) {
            logger.info("Provided loginCode is valid");
            return ResponseEntity.ok(true);
        } else {
            logger.info("Provided loginCode is invalid");
            return ResponseEntity.ok(false);
        } 
    }
    
    private String generateLoginCode() {
        String loginCode = RandomStringUtils.randomAlphanumeric(8).toLowerCase();
        if (userAccountRepository.findByLoginCode(loginCode) == null) {
            return loginCode;
        } else {
            return generateLoginCode();
        }
    }
}
