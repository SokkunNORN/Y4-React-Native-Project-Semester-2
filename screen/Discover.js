import React,{ useState, useRef, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../components/header/Header'
import ListCategory from '../components/ListCategory'
import SlideShow from '../components/SlideShow'
import ListDiscover from '../components/ListDiscover'
import { SIZES } from '../constant'
import { LIST_CATEGORIES, getNews } from '../api'

let xPosition = 0

const Discover = () => {

    const mainScrollRef = useRef()

    const [selectedCategory, setSelectCategory] = useState(LIST_CATEGORIES[0])
    const [topSlideShow, setTopSlideShow] = useState([])
    const [generalLists, setGeneralLists] = useState([])
    const [businessLists, setBusinessLists] = useState([])
    const [technologyLists, setTechnologyList] = useState([])
    const [healthLists, setHealthLists] = useState([])
    const [scienceLists, setScienceLists] = useState([])
    const [sportLists, setSportLists] = useState([])
    const [entertainmentLists, setEntertainmentLists] = useState([])

    const slideShows = [
        {
            category: LIST_CATEGORIES[1],
            title: 'A component to show a list of actions inside a Card.',
            profile: {
                name: 'Reak Smey New Day'
            },
            joineder: 938,
            isJoined: true
        },
        {
            category: LIST_CATEGORIES[2],
            title: 'A component to show a list of actions inside a Card.',
            profile: {
                name: 'Reak Smey New Day'
            },
            joineder: 98,
            isJoined: false
        },
        {
            category: LIST_CATEGORIES[3],
            title: 'A component to show a list of actions inside a Card.',
            profile: {
                name: 'Reak Smey New Day'
            },
            joineder: 98,
            isJoined: false
        }
    ]

    const data = [
        {
            listDiscovers: generalLists
        },
        {
            listDiscovers: businessLists
        },
        {
            listDiscovers: technologyLists
        },
        {
            listDiscovers: healthLists
        },
        {
            listDiscovers: scienceLists
        },
        {
            listDiscovers: sportLists
        },
        {
            listDiscovers: entertainmentLists
        }
    ]

    const onSelectCategory = value => {
        const i = LIST_CATEGORIES.indexOf(value)
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
        setSelectCategory(LIST_CATEGORIES[i])
    }

    const getListNew = async () => {
        const response = await getNews()

        const slideShows = response.articles.slice(0, LIST_CATEGORIES.length)
        setTopSlideShow(slideShows)
        setGeneralLists(response.articles.slice(LIST_CATEGORIES.length))

        const business = await getNews(1)
        setBusinessLists(business.articles)

        const technology = await getNews(2)
        setTechnologyList(technology.articles)

        const health = await getNews(3)
        setHealthLists(health.articles)

        const science = await getNews(4)
        setScienceLists(science.articles)

        const sport = await getNews(5)
        setSportLists(sport.articles)

        const entertainment = await getNews(6)
        setEntertainmentLists(entertainment.articles)
    }

    useEffect(() => {
        getListNew()
    }, [])

    return (
        <>
            <Header
                title="Discover"
                isJoined
                icon="check-circle"
            />

            <View>
                <ListCategory
                    selected={ selectedCategory }
                    categories={ LIST_CATEGORIES }
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
                                    showsVerticalScrollIndicator={ false }
                                    key={ index }
                                >
                                    <SlideShow elements={ topSlideShow } />

                                    {
                                        element.listDiscovers.map((item, i) => (
                                            <ListDiscover item={ item } key={ i } />
                                        ))
                                    }
                                </ScrollView>
                            )
                        }
                        return (
                            <ScrollView
                                showsVerticalScrollIndicator={ false }
                                key={ index }
                            >
                                {
                                    element.listDiscovers.map((item, i) => (
                                        <ListDiscover item={ item } key={ i } />
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
    slide_show: {
        width: SIZES.width
    }
})