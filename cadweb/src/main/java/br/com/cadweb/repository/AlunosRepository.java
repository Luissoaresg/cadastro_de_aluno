package br.com.cadweb.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.cadweb.model.AlunosModel;

public interface AlunosRepository extends CrudRepository<AlunosModel, Integer>{
    
}
