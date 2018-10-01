package nl.maastro.beslissamenbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nl.maastro.beslissamenbackend.entity.UserAccount;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, String> {
    
    UserAccount findByLoginCode(String loginCode);
    
}
