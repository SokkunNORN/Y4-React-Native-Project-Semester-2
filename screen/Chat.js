import React, { useState } from 'react'
import {
    ScrollView
} from 'react-native'
import Header from '../components/header/Header'
import ListChat from '../components/ListChat'

const Chat = () => {

  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat', 'Book', 'Computer', 'Phone', 'Duck', 'Song', 'Chicken', 'Banana', 'Cat', 'Dog', 'Eat', 'Book', 'Computer', 'Phone', 'Duck', 'Song', 'Chicken'];
  const [selectedItem, setSelectedItem] = useState([items[0]]);

    return (
        <>
            <Header
                title="ChatPlus"
                isSearch
                icon="plus"
            />
            <ScrollView>
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
            </ScrollView>
        </>
    )
}

export default Chat