package com.mono.service;

import com.mono.dto.CardDto;
import com.mono.mapper.CardMapper;
import com.mono.models.Card;
import com.mono.models.Comment;
import com.mono.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CardService {

    private final CardRepository cardRepository;
    private final CardMapper cardMapper;

    @Autowired

    public CardService(CardRepository cardRepository, CardMapper cardMapper) {
        this.cardRepository = cardRepository;
        this.cardMapper = cardMapper;
    }

    public CardDto createCard(CardDto cardDto){
        Card card = cardMapper.toEntity(cardDto);
        return cardMapper.toDto(cardRepository.save(card));
    }

    public List<CardDto> getAllCard(){
        return cardRepository.findAll().stream().map(cardMapper::toDto).toList();
    }

    public CardDto getCardById(Long id){
        Card card = cardRepository.findById(id).orElseThrow(() -> new RuntimeException("Не удалось получить карточку!"));
        return cardMapper.toDto(card);
    }

    public CardDto deleteCardById(Long id){
        Card findCard = cardRepository.findById(id).orElseThrow(() -> new RuntimeException("По текущему id нет card"));
        if (findCard != null) {
            cardRepository.deleteById(id);
            return cardMapper.toDto(findCard);
        }
        return null;
    }

}
