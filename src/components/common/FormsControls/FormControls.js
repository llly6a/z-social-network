import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <textarea  {...input} {...props}/>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <input  {...input} {...props}/>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}