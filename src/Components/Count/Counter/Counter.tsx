import React from 'react';
import style from './Counter.module.scss';

type  CountType = {
    countNum: number
    valueMax: number
    valueMin: number
    editMessage: boolean
    errorEditMessage: boolean
}


export const Counter = (props: CountType) => {
    return (
        <div>
            <div className={style.count_wrapper}>
                {
                    props.editMessage ? <span className={style.count_content}>Enter values and press"Set"</span>
                        : props.errorEditMessage ?
                        <span className={`${style.count_content} ${style.count_content_red}`}>Incorrect value!</span> :
                        <span
                            className={props.countNum === props.valueMax ? `${style.count_content} ${style.count_content_red}` : style.count_content}>  {props.countNum}
                    </span>
                }
            </div>
        </div>
    )
}
