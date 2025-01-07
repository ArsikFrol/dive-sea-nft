import React from 'react'
import styles from './styles.module.css'

import notActive from './arrowNotActive.webp'
import active from './arrowActive.webp'
import border from './border.webp'

type Props = {
    activeLeft: boolean,
    activeRight: boolean
}

const ArrowBtn = React.memo(function ArrowBtn(props: Props) {
    return (
        <div className={styles.wrapper}>
            <img
                style={{ width: '26px', height: '26px', rotate: '180deg' }}
                draggable='false'
                src={props.activeLeft ? active : notActive}
                className={props.activeLeft ? styles.left : styles.notLeft} />
            <img draggable='false' src={border} alt='border' />
            <img
                style={{ width: '26px', height: '26px' }}
                draggable='false'
                src={props.activeRight ? active : notActive}
                className={props.activeRight ? styles.right : styles.notRight} />
        </div>
    )
})

export default ArrowBtn