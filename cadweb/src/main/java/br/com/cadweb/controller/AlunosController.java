package br.com.cadweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.cadweb.model.AlunosModel;
import br.com.cadweb.repository.AlunosRepository;

@RestController
@CrossOrigin("*")
public class AlunosController {
    
    @Autowired
    AlunosRepository ar;

    @GetMapping
    public Iterable<AlunosModel> listar(){
        return ar.findAll();
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody AlunosModel am){
        return new ResponseEntity<AlunosModel>(ar.save(am), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> editar(@RequestBody AlunosModel am){
        return new ResponseEntity<AlunosModel>(ar.save(am), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Integer id){
        ar.deleteById(id);
        return new ResponseEntity<AlunosModel>(HttpStatus.OK);
    }
}
