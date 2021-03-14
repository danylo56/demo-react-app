import React from 'react';
import styles from './FormsControls.module.css'
import {required} from "../../../utills/validators/validators";
import {Field} from "redux-form";



export const FormControl = ({input, meta: {touched, error}, children, ...props}) => {

    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "") }>
            <div>{children}</div>
                { hasError && <span>{error}</span> }
           
        </div>
    )
}


export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} ></textarea></FormControl>

}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
        <label>
            <Field component={component} validate={validators} name={name} placeholder={placeholder} {...props}/>
            {text}
        </label>
    </div>
    )

