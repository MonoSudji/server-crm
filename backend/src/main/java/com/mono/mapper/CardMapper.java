package com.mono.mapper;


import com.mono.dto.CardDto;
import com.mono.models.Board;
import com.mono.models.Card;
import com.mono.repository.BoardRepository;
import com.mono.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CardMapper {

    private final BoardRepository boardRepository;

    @Autowired
    public CardMapper( BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public CardDto toDto(Card card){
        CardDto cardDto = new CardDto();
        cardDto.setId(card.getId());
        cardDto.setName(card.getName());
        cardDto.setBackground(card.getBackground());
        cardDto.setBoard_id(card.getBoard().getId());

        return cardDto;
    }

    public Card toEntity(CardDto cardDto){
        Card card = new Card();
        card.setId(cardDto.getId());
        card.setName(cardDto.getName());
        card.setBackground(cardDto.getBackground());

        Board findBoard = boardRepository.findById(cardDto.getBoard_id()).orElseThrow(() -> new RuntimeException("Не удалось получить карточку!"));
        card.setBoard(findBoard);
        return card;
    }

}
