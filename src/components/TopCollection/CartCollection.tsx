import React from 'react'
import styles from './styles.module.css'

type Props = {
    obj: any,
    ethereum: string
}

const CartCollection = React.memo(function CartCollection(props: Props) {
    return (
        <div className={styles.cartWrapper}>
            <div className={styles.user}>
                <img draggable='false' src={props.obj.iconCollection} alt='props.obj.image' />
                <div className={styles.name}>
                    <div className={styles.userColl}>{props.obj.title}</div>
                    <div className={styles.byName}>{props.obj.theCollector}</div>
                </div>
            </div>
            <div className={styles.volume}><img draggable='false' src={props.ethereum} alt='ethereum' /> {props.obj.volume}</div>
            <div className={props.obj.h24[0] == '+' ? styles.hoursGreen : styles.hoursRed}>{props.obj.h24}%</div>
            <div className={styles.floorPrice}><img draggable='false' src={props.ethereum} alt='ethereum' />{props.obj.floorPrice}</div>
            <div className={styles.owners}>{props.obj.owners}K</div>
            <div className={styles.items}>{props.obj.items}</div>
        </div>
    )
})

export default CartCollection