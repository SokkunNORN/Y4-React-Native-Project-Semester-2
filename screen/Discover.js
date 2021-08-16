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

    const data = [
        generalLists,
        businessLists,
        technologyLists,
        healthLists,
        scienceLists,
        sportLists,
        entertainmentLists
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

    const getGeneralNews = async () => {
        const { articles } = await getNews()

        setTopSlideShow(articles.slice(0, LIST_CATEGORIES.length))
        setGeneralLists(articles.slice(LIST_CATEGORIES.length))
    }

    const getBusinessNews = async () => {
        const { articles } = await getNews(1)
        setBusinessLists(articles)
    }

    const getTechnologyNews = async () => {
        const { articles } = await getNews(2)
        setTechnologyList(articles)
    }

    const getHealthNews = async () => {
        const { articles } = await getNews(3)
        setHealthLists(articles)
    }

    const getScienceNews = async () => {
        const { articles } = await getNews(4)
        setScienceLists(articles)
    }

    const getSportNews = async () => {
        const { articles } = await getNews(5)
        setSportLists(articles)
    }

    const getEntertainmentNews = async () => {
        const { articles } = await getNews(6)
        setEntertainmentLists(articles)
    }

    useEffect(() => {
        getGeneralNews()
        getBusinessNews()
        getTechnologyNews()
        getHealthNews()
        getScienceNews()
        getSportNews()
        getEntertainmentNews()
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
                    data.map((elements, index) => {
                        if (index === 0) {
                            return (
                                <ScrollView
                                    showsVerticalScrollIndicator={ false }
                                    key={ index }
                                >
                                    <SlideShow elements={ topSlideShow } />

                                    {
                                        elements.map((item, i) => (
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
                                    elements.map((item, i) => (
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