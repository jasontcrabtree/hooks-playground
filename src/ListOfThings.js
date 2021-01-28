/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';

function ListOfThings() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');

    function addItem(e) {
        e.preventDefault();
        setItems([
            ...items, {
                id: items.length,
                name: itemName
            }
        ]);
        setItemName("");
    }

    function setName(e) {
        setItemName(e.target.value)
    }

    return (
        <>
            <form onSubmit={addItem}>
                <label htmlFor="item">
                    Add Item to List
                     <br/>
                    <input type="text" name="item" value={itemName} onChange={setName}/>
                </label>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}

export default ListOfThings;
