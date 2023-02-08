import React,{memo} from 'react';
import * as Styled from './Card.style';

const Card = ({title, imgSrc}) => {
    return(
        <Styled.CardWrapper>
            <Styled.CardTitle>{title}</Styled.CardTitle>
            <Styled.CardImage src={imgSrc} alt='icon'/>
        </Styled.CardWrapper>
    )
}

export default memo(Card);