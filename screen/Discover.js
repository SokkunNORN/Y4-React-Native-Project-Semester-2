import React,{ useState } from 'react'
import Header from '../components/header/Header'
import ListCategory from '../components/ListCategory'

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

            <ListCategory
                selected={ selected }
                categories={ categories }
                setSelectCategory={ category => setSelect(category) }
            />
        </>
    )
}

export default Discover