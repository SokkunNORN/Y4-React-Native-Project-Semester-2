import React,{ useState, useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../components/header/Header'
import ListCategory from '../components/ListCategory'
import SlideShow from '../components/SlideShow'
import ListDiscover from '../components/ListDiscover'
import { SIZES } from '../constant'

let xPosition = 0

const Discover = () => {

    const mainScrollRef = useRef()

    const categories = [
        { title: 'All' },
        { title: 'New' },
        { title: 'Lifestyle' },
        { title: 'Health' },
    ]
    const slideShows = [
        {
            category: categories[1],
            title: 'A component to show a list of actions inside a Card.',
            profile: {
                name: 'Reak Smey New Day'
            },
            joineder: 938,
            isJoined: true
        },
        {
            category: categories[2],
            title: 'A component to show a list of actions inside a Card.',
            profile: {
                name: 'Reak Smey New Day'
            },
            joineder: 98,
            isJoined: false
        },
        {
            category: categories[3],
            title: 'A component to show a list of actions inside a Card.',
            profile: {
                name: 'Reak Smey New Day'
            },
            joineder: 98,
            isJoined: false
        }
    ]
    const [selectedCategory, setSelectCategory] = useState(categories[0])
    const listDiscovers = [
        {
            title: 'A component to show a list of actions inside a Card.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            category: categories[1],
            isJoined: false,
            joineder: 98,
            profile: {
                name: 'Reak Smey New Day'
            }
        },
        {
            title: 'A component to show a list of actions inside a Card.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            category: categories[1],
            isJoined: true,
            joineder: 18,
            profile: {
                name: 'Reak Smey New Day'
            }
        },
        {
            title: 'A component to show a list of actions inside a Card.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            category: categories[1],
            isJoined: false,
            joineder: 90,
            profile: {
                name: 'Reak Smey New Day'
            }
        },
        {
            title: 'A component to show a list of actions inside a Card.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
            category: categories[1],
            isJoined: false,
            joineder: 90,
            profile: {
                name: 'Reak Smey New Day'
            }
        }
    ]

    const data = [
        {
            cagetory: categories[0],
            listDiscovers: listDiscovers
        },
        {
            cagetory: categories[1],
            listDiscovers: listDiscovers
        },
        {
            cagetory: categories[2],
            listDiscovers: listDiscovers
        },
        {
            cagetory: categories[3],
            listDiscovers: listDiscovers
        }
    ]

    const onSelectCategory = value => {
        const i = categories.indexOf(value)
        xPosition = SIZES.width * i
        onScrollMainContain()
    }

    const onScrollMainContain = () => {
        mainScrollRef.current.scrollTo({
            x: xPosition,
            y: 0,
            animated: true
        })
    }

    const onScollEnd = (event) => {
        xPosition = event.nativeEvent.contentOffset.x
        const i = Math.trunc(xPosition / SIZES.width)
        setSelectCategory(categories[i])
    }

    return (
        <>
            <Header
                title="Discover"
                isJoined
                icon="check-circle"
            />

            <View style={ styles.category }>
                <ListCategory
                    selected={ selectedCategory }
                    categories={ categories }
                    setSelectCategory={ category => onSelectCategory(category) }
                />
            </View>

            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={ false }
                ref={ mainScrollRef }
                onMomentumScrollEnd={ onScollEnd }
            >
                {
                    data.map((element, index) => {
                        if (index === 0) {
                            return (
                                <ScrollView
                                    showsHorizontalScrollIndicator={ false }
                                >
                                    <SlideShow elements={ slideShows } />

                                    {
                                        element.listDiscovers.map(item => (
                                            <ListDiscover item={ item }/>
                                        ))
                                    }
                                </ScrollView>
                            )
                        }
                        return (
                            <ScrollView
                                showsHorizontalScrollIndicator={ false }
                            >
                                {
                                    element.listDiscovers.map(item => (
                                        <ListDiscover item={ item }/>
                                    ))
                                }
                            </ScrollView>
                        )
                    })
                }
            </ScrollView>
        </>
    )
}

export default Discover

const styles = StyleSheet.create({
    category: {
        paddingTop: SIZES.base(),
        paddingBottom: SIZES.base()
    },
    slide_show: {
        width: SIZES.width
    }
})