import React from 'react'
import styles from './styles.module.css'

import weekly1 from '../../images/weeklyImage/weekly4.webp'
import weekly2 from '../../images/weeklyImage/weekly2.webp'
import weekly3 from '../../images/weeklyImage/weekly3.webp'
import weekly4 from '../../images/weeklyImage/weekly4.webp'
import weekly5 from '../../images/weeklyImage/weekly2.webp'
import CartElem from '../UI/CartElem/CartElem'
import ArrowBtn from '../UI/ArrowBtn/ArrowBtn'

type Props = {}

const listWeekly = [
    { id: 1, countTime: 9000000, image: weekly1, title: 'Sun-Glass', countEfir: 1.75 },
    { id: 2, countTime: 8000000, image: weekly2, title: 'Sun-Glass', countEfir: 1.75 },
    { id: 3, countTime: 7000000, image: weekly3, title: 'Sun-Glass', countEfir: 1.75 },
    { id: 4, countTime: 6000000, image: weekly4, title: 'NuEvey', countEfir: 1.25 },
    { id: 5, countTime: 5000000, image: weekly5, title: 'NuEvey', countEfir: 1.25 }
]

const WeeklyNft = React.memo(function WeeklyNft(props: Props) {
    const [start, setStart] = React.useState(0)
    const [and, setAnd] = React.useState(5)

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Weekly - Top NFT</div>
            <div className={styles.rowDay}>
                {
                    listWeekly.slice(start, and).map((obj: any, index: number) => {
                        return (
                            <CartElem obj={obj} key={index} />
                        )
                    })
                }
            </div>
            <ArrowBtn activeLeft={true} activeRight={true} />
        </div>
    )
})

export default WeeklyNft