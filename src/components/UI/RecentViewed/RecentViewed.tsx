import React from 'react'
import styles from './styles.module.css'

type Props = {
    newCollections: any;
    ethereum: string
}

const RecentViewed = React.memo(function RecentViewed(props: Props) {
    return (
        <div className={styles.recentViewed}>
            <div className={styles.recentTitle}>Recent Viewed</div>
            {
                props.newCollections.slice(0, 2).map((obj: any, index: number) => {
                    return (
                        <div key={index} className={styles.cartRecent}>
                            <img className={styles.iconCollection} draggable='false' src={obj.iconCollection} alt='obj.iconCollection' />
                            <div className={styles.descColl}>
                                <div className={styles.titleColl}>{obj.title}</div>
                                <div className={styles.byColl}>{obj.theCollector}</div>
                            </div>
                            <div className={styles.countStat}>
                                <div className={styles.topCountStat}>
                                    <div className={styles.efir}><img draggable='false' src={props.ethereum} alt='ethereum' /></div>
                                    <div className={styles.countEfir}>{obj.volume}</div>
                                </div>
                                <div className={obj.h24[0] == '+' ? styles.percentGreen : styles.percentRed}>{obj.h24}%</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
})

export default RecentViewed