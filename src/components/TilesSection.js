import React from 'react';
import styled from 'styled-components';

import { H1 } from './StyledH1';

const H2 = styled.h2`
   margin: 10px 35px;
   font-size: 24px;
   font-family: sans-serif;
   padding: 15px 0;
   border-bottom: ${props => props.main ? 'solid 3px tomato' : 'none'};
`

const Button = styled.button`
   border: solid 2px tomato;
   color: ${props => props.main ? 'white' : 'tomato'};
   background: ${props => props.main ? 'tomato' : 'white'};
   width: 80%;
   max-width: 200px;
   line-height: 60px;
   cursor: pointer;
   transition: .2s;
   font-size: 20px;
   font-family: sans-serif;
   margin: 10px 0;
   &:hover {
      transform: scale(1.05)
   }
`

const Paragraph = styled.p`
   text-align: center;
   font-family: sans-serif;
   line-height: 1.5;
   padding: 15px 20px;
   margin: 0;
`

const Tiles = styled.div`
   width: 90%;
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: baseline;
   text-align: center;
   @media (min-width: 768px) {
      flex-direction: row;
      width: 100%;
      max-width: 1000px;
   }
`

const Tile = styled.div`
   box-shadow: 0 0 7px 1px gray;
   padding: ${props => props.main ? '40px 0' : '20px 0'};
   margin: ${props => props.main ? '15px 0' : '0'};
   position: relative;
   @media (min-width: 768px) {
      width: 30%;
      max-width: 320px;
      margin: 0;
   }
`

const TilesSection = () => {
   return (
      <section className="styled-components">
         <H1>Styled Components & Redux</H1>
         <Tiles>
            <Tile>
               <H2>Pakiet podstawowy</H2>
               <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid voluptates ipsum perferendis animi facere? Reiciendis! Fuga, molestiae in!</Paragraph>
               <Button>Wybierz</Button>
            </Tile>
            <Tile main>
               <H2 main>Pakiet sugerowany</H2>
               <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur placeat quos, culpa harum odio assumenda ipsum eligendi ducimus nesciunt autem veritatis incidunt animi doloremque tempore laudantium labore quidem, maiores accusantium?</Paragraph>
               <Button main>Wybierz</Button>
            </Tile>
            <Tile>
               <H2>Pakiet rozszerzony</H2>
               <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsum cumque suscipit vero voluptates veniam quidem alias eos optio, unde, expedita neque in repellendus at id. Itaque.</Paragraph>
               <Button>Wybierz</Button>
            </Tile>

         </Tiles>

      </section>
   );
}

export default TilesSection;