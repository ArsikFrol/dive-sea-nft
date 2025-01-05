import React from 'react'
import styles from './styles.module.css'

type Props = {
    text: string,
    padding: string
}

const BlackBtn = React.memo(function BlackBtn(props: Props) {
    return (
        <div style={{ padding: `${props.padding}` }} className={styles.BlackBtn}>
            {props.text}
        </div>
    )
})

export default BlackBtn