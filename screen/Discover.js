import React,{ useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../components/header/Header'
import ListCategory from '../components/ListCategory'
import SlideShow from '../components/SlideShow'
import { SIZES } from '../constant'

const Discover = () => {
    const categories = [
        { title: 'All' },
        { title: 'New' },
        { title: 'Lifestyle' },
        { title: 'Health' },
    ]
    const [selected, setSelect] = useState(categories[0])
    return (
        <>
            <Header
                title="Discover"
                isJoined
                icon="check-circle"
            />
            <View style={ styles.category }>
                <ListCategory
                    selected={ selected }
                    categories={ categories }
                    setSelectCategory={ category => setSelect(category) }
                />
            </View>

            <ScrollView style={ styles.slide_show } >
                <SlideShow />
            </ScrollView>
        </>
    )
}

export default Discover

const styles = StyleSheet.create({
    category: {
        paddingTop: SIZES.base()
    },
    slide_show: {
        marginTop: SIZES.base(),
        marginStart: SIZES.base(),
        marginEnd: SIZES.base()
    }
})