package nl.maastro.beslissamenbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import nl.maastro.beslissamenbackend.entity.Session;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {

}
