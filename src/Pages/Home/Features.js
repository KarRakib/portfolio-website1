import React, { useEffect, useState } from 'react';
import Card from './Card';


const Features = () => {
    const [cards, setCards] = useState()
    useEffect(() => {
        fetch("why.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards);
   
    return (
        <div className='py-10 md:w-[1200px] lg:w-[1600px] mx-auto '>
            <h4 className='text-start mb-2'>Features</h4>
            <h1 className='text-5xl font-bold text-start '>What I Do</h1>
            <div className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
                
            </div>


        </div>
    );
};

export default Features;