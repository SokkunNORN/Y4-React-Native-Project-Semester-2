import React, { useState } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import { SIZES, COLORS } from '../consts'

import Header from '../nav/Header'
import ListChat from '../components/ListChat'

const Indivual = () => {

  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat', 'Book', 'Computer', 'Phone', 'Duck', 'Song'];
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

const styles = StyleSheet.create({
    fake_post: {
        height: 74,
        marginBottom: SIZES.base(.2),
        backgroundColor: COLORS.white,
        shadowColor: COLORS.secondary,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: .3
    }
})