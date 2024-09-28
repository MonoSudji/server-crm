package com.mono.controllers;

import com.mono.dto.BoardDto;
import com.mono.dto.CardDto;
import com.mono.models.Card;
import com.mono.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/card")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {this.cardService = cardService;}

    @PostMapping
    public ResponseEntity<?> createCard(@RequestBody CardDto card){
        try {
            CardDto cardDto = cardService.createCard(card);
            return new ResponseEntity<>(cardDto, HttpStatus.CREATED);

        } catch (Exception error) {
            return ResponseEntity.badRequest().body("Не создать карточку!");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllBoards(){
        try {
            List<CardDto> cards = cardService.getAllCard();
            return new ResponseEntity<>(cards, HttpStatus.OK);
        } catch (Exception error){
            return ResponseEntity.badRequest().body("Не удалось получить cards!");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCardById(@PathVariable Long id){
        try {
            CardDto card = cardService.getCardById(id);
            return new ResponseEntity<>(card, HttpStatus.OK);
        } catch (Exception err){
            return ResponseEntity.badRequest().body("Id не найден!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCardById(@PathVariable Long id){
        try {
            CardDto card = cardService.deleteCardById(id);
            return new ResponseEntity<>(card, HttpStatus.OK);
        } catch (Exception err){
            return ResponseEntity.badRequest().body("Не удалось удалить card!");
        }
    }

}
