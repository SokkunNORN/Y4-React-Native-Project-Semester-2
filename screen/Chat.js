import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Routes from '../routes'
import {
    ScrollView
} from 'react-native'
import Header from '../components/header/Header'
import ListChat from '../components/ListChat'

const Chat = () => {

  const navigation = useNavigation()
  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat', 'Book', 'Computer', 'Phone', 'Duck', 'Song', 'Chicken', 'Banana', 'Cat', 'Dog', 'Eat', 'Book', 'Computer', 'Phone', 'Duck', 'Song', 'Chicken'];
  const [selectedItem, setSelectedItem] = useState([items[0]]);

    return (
        <>
            <Header
                title="Chat Plus"
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
                            setSelectItem={ value => navigation.push(Routes.CHAT_DETAIL) }
                        />
                    ))
                }   
            </ScrollView>
        </>
    )
}

export default Chat