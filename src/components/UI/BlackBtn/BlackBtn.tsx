import React from 'react'
import styles from './styles.module.css'

type Props = {
    text: string,
    padding: string,
    bgColor?: boolean
}

const BlackBtn = React.memo(function BlackBtn(props: Props) {
    return (
        <div style={props.bgColor ?
            {
                border: '1.5px solid rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(249, 249, 249, 1)',
                padding: `${props.padding}`,
                color: 'rgba(0, 0, 0, 1)',
                borderRadius: '13px'
            } : {
                padding: `${props.padding}`,
                borderRadius: '13px'
            }}
            className={styles.BlackBtn}>
            {props.text}
        </div>
    )
})

export default BlackBtn