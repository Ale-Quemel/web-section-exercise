import { Card } from "../card/Card";

import './styleSectionRep.css';


export const Section = ({ title, cardList }) => {
  return (
    <section className="cardSection">
        <h2 className="titleSection">{ title }</h2>
        <div className="cardContent">
            {
                cardList.map(card => (
                    <Card key={card.id} title={card.title} description={card.description}/>
                ))
            }
        </div>
    </section>
  )
}
