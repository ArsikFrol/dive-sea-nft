import React from 'react'

import Header from '../components/Header/Header'

type Props = {}

const HomePage = React.memo(function HomePage(props: Props) {
    return (
        <>
            <Header />
        </>
    )
})

export default HomePage