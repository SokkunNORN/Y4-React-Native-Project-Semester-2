import React,{ useState, useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../components/header/Header'
import ListCategory from '../components/ListCategory'
import SlideShow from '../components/SlideShow'
import ListDiscover from '../components/ListDiscover'
import { SIZES } from '../constant'

let xPosition = 0

const Discover = () => {
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
    const [selected, setSelect] = useState(categories[0])
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

    const scrollViewRef = useRef()

    const handleScroll = function(event) {
        xPosition = event.nativeEvent.contentOffset.x
    }

    const onContentSizeChange = (contentWidth, _) => {

        setInterval(() => {
            if (contentWidth > SIZES.width) {
                xPosition += SIZES.width
                if (xPosition === contentWidth) {
                    xPosition = 0
                }
            }
    
            scrollViewRef.current.scrollTo({
                x: xPosition,
                y: 0,
                animated: true
            })
        }, 5000);
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
                    selected={ selected }
                    categories={ categories }
                    setSelectCategory={ category => setSelect(category) }
                />
            </View>

            <ScrollView style={ styles.contain } >
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={ false }
                    style={ styles.slide_show }
                    ref={ scrollViewRef }
                    onScroll={ handleScroll }
                    onContentSizeChange={ onContentSizeChange }
                >
                    <SlideShow elements={ slideShows } />
                </ScrollView>


                {
                    listDiscovers.map(item => (
                        <ListDiscover item={ item }/>
                    ))
                }
            </ScrollView>
        </>
    )
}

export default Discover

const styles = StyleSheet.create({
    category: {
        paddingTop: SIZES.base()
    },
    contain: {
        marginTop: SIZES.base()
    },
    slide_show: {
        // paddingLeft: SIZES.base()
    }
})