package br.com.centerville.churrasqueira.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import br.com.centerville.churrasqueira.models.*;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {

    
}
