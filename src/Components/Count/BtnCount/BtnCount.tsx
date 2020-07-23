import React from 'react';
import style from './BtnCount.module.scss';

type BtnType = {
    onClickHandler: () => void
    name: string
    editMessage: boolean
    errorEditMessage: boolean
}

export const BtnCount = (props: BtnType) => {
    const {editMessage, errorEditMessage} = props

    return (
        <div className={style.btnCount_wrapper}>

            <button className={style.btn}
                    onClick={props.onClickHandler}
                    disabled={editMessage || errorEditMessage}
            > {props.name}
            </button>

        </div>
    )
}
