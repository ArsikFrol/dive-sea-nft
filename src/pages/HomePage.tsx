import React from 'react'

import Header from '../components/Header/Header'
import DiscoverCreate from '../components/DiscoverCreate/DiscoverCreate'
import WeeklyNft from '../components/WeeklyNft/WeeklyNft'

type Props = {}

const HomePage = React.memo(function HomePage(props: Props) {
    return (
        <>
            <Header />
            <DiscoverCreate />
            <WeeklyNft />
        </>
    )
})

export default HomePage