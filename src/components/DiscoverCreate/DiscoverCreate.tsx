import React from 'react'
import styles from './styles.module.css'
import BlackBtn from '../UI/BlackBtn/BlackBtn'

import left from '../../images/discoverImage/left.webp'
import right from '../../images/discoverImage/right.webp'
import aroow from '../../images/discoverImage/aroow.webp'
import points from '../../images/discoverImage/points.webp'
import ArrowBtn from '../UI/ArrowBtn/ArrowBtn'

type Props = {}

const listStat = [
    { id: 1, count: 430, title: 'Art Works' },
    { id: 2, count: 159, title: 'Creators' },
    { id: 3, count: 87, title: 'Collections' }
]

const DiscoverCreate = React.memo(function DiscoverCreate(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <div className={styles.title}>Discover And Create NFTs</div>
                <div className={styles.desc}>Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span style={{ fontWeight: '600' }}>$20 bonus.</span></div>
                <div className={styles.rowBtn}>
                    <BlackBtn text='Explore More' padding='17px 31px' />
                    <BlackBtn text='create NFT' padding='17px 25px' bgColor={true} />
                </div>
                <div className={styles.rowStat}>
                    {
                        listStat.map((obj: any, index: number) => {
                            return (
                                <div className={styles.elem} key={index}>
                                    <div className={styles.count}>{obj.count}K+</div>
                                    <div className={styles.statTitle}>{obj.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.rightContent}>
                <img className={styles.left} draggable='false' src={left} alt='left' />
                <img className={styles.right} draggable='false' src={right} alt='right' />
                <img className={styles.aroow} draggable='false' src={aroow} alt='aroow' />
                <img className={styles.points} draggable='false' src={points} alt='points' />
                <ArrowBtn activeLeft={true} activeRight={true} />
            </div>
        </div>
    )
})

export default DiscoverCreate