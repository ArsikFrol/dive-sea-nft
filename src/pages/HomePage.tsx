import React from 'react'

import Header from '../components/Header/Header'
import DiscoverCreate from '../components/DiscoverCreate/DiscoverCreate'

type Props = {}

const HomePage = React.memo(function HomePage(props: Props) {
    return (
        <>
            <Header />
            <DiscoverCreate />
        </>
    )
})

export default HomePage