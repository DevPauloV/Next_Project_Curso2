'use client';

import { useState } from 'react';

export function Button() {
const [name, setName] = useState('Paulo');

function handleChangeName() {
    setName('Paulo Victor');
}

    return (
        <div>
            <button onClick={handleChangeName}>Alterar nome</button><br />
            <h3>Nome: {name}</h3>
        </div>
    )
}