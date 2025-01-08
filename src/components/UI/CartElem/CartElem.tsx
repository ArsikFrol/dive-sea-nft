import React from 'react'
import styles from './styles.module.css'

import Countdown from 'react-countdown';
import BlackBtn from '../BlackBtn/BlackBtn'

import efir from './ethereum.webp'

type Props = {
    obj: any
}

const CartElem = React.memo(function CartElem(props: Props) {
    const renderer = (hours: any, minutes: any, seconds: any, completed: any) => {
        if (completed) {
            return console.log('-')
        } else {
            return (
                <span>
                    {hours}:{minutes}:{seconds}
                </span>
            );
        }
    };

    return (
        <div className={styles.wrapper}>
            <img draggable='false' src={props.obj.image} alt='props.image' />
            <div className={styles.title}>{props.obj.title}</div>
            <div className={styles.stat}>
                <div className={styles.leftContent}>
                    <div className={styles.nameStat}>Current bid</div>
                    <div className={styles.price}>
                        <img draggable='false' src={efir} alt='efir' />
                        <div className={styles.priceCount}>{props.obj.countEfir}</div>
                    </div>
                </div>
                <BlackBtn text='place bid' padding='13px 20px' />
            </div>
            <Countdown date={Date.now() + props.obj.countTime} renderer={({ hours, minutes, seconds, completed }) => {
                return (
                    <span>
                        0{hours}h {minutes}m {seconds}s
                    </span>
                );
            }} />
        </div>
    )
})

export default CartElem