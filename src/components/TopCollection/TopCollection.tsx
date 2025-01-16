import React from 'react'
import styles from './styles.module.css'

import { useSelector } from 'react-redux'
import CartCollection from './CartCollection'

import arrow from '../UI/ArrowBtn/arrowNotActive.webp'
import ethereum from '../UI/CartElem/ethereum.webp'
import RecentViewed from '../UI/RecentViewed/RecentViewed'

type Props = {}

const listNameStat = [
    { id: 1, title: 'Volume' },
    { id: 2, title: '24h %' },
    { id: 3, title: 'Floor Price' },
    { id: 4, title: 'Owners' },
    { id: 5, title: 'Items' }
]

const TopCollection = React.memo(function TopCollection(props: Props) {
    const collections = useSelector((store: any) => store.allCollections.collections)

    const newCollections = collections.sort((a: any, b: any) => b.items - a.items)

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Top Collection</div>
            <div className={styles.rowStat}>
                <div className={styles.leftStat}>Collection</div>
                <div className={styles.rightStat}>
                    {
                        listNameStat.map((obj: any, index: number) => {
                            return (
                                <div className={styles.elem} key={index}>{obj.title}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.columnUser}>
                {
                    newCollections.slice(0, 4).map((obj: any, index: number) => {
                        return (
                            <CartCollection ethereum={ethereum} obj={obj} key={index} />
                        )
                    })
                }
            </div>
            <div className={styles.exploreAll}>Explore All <img draggable='false' src={arrow} alt='' /></div>
            <RecentViewed ethereum={ethereum} newCollections={newCollections} />
        </div>
    )
})

export default TopCollection