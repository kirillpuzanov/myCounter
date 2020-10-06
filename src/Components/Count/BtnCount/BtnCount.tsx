import React from 'react';
import style from './BtnCount.module.scss';

type BtnType = {
    onClickHandler: () => void
    name: string
    infoMessage: boolean
    errorInfoMessage: boolean
}

export const BtnCount = (props: BtnType) => {
    const {infoMessage, errorInfoMessage} = props

    return (
        <div className={style.btnCount_wrapper}>
            <button className={style.btn}
                    onClick={props.onClickHandler}
                    disabled={infoMessage || errorInfoMessage}
            > {props.name}
            </button>
        </div>
    )
}
