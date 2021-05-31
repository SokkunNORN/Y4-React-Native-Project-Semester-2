import React, { useState } from 'react'

import Header from '../nav/Header'
import ListChat from '../components/ListChat'

const Indivual = () => {

  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat', 'Book', 'Computer', 'Phone', 'Duck', 'Song', 'Chicken'];
  const [selectedItem, setSelectedItem] = useState([items[0]]);

    return (
        <>
            <Header>
                {
                    items.map((item, i) => (
                        <ListChat
                            key={ i }
                            item={ item }
                            selectedItem={ selectedItem }
                            setSelectItem={ value => setSelectedItem(value) }
                        />
                    ))
                }
            </Header>
        </>
    )
}

export default Indivual