import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

function Train() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getSets().then((data) => setCards(data));
    }, []);

    async function getSets() {
        const url = 'http://localhost:3010';
        const endpoint = 'sets';
        const response = await fetch(`${url}/${endpoint}`);

        return await response.json();
    }

    return (
        <div>
            {cards.map(({ id, name, level, quantity, image }) => {
                <Card key={id} name={name} level={level} quantity={quantity} image={image} />;
            })}
        </div>
    );
}

export default Train;
