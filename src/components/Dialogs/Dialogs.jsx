import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { TextArea } from '../Common/FormsControls/FormsControls';
import { maxLength, required } from "../../utills/validators/validators";


const maxlength100 = maxLength(100)

const AddMessageForm = (props) => {
    return (
        <form className={s.controls} onSubmit={props.handleSubmit}>
            <Field className={s.controls__input} validate={[required, maxlength100]} component={TextArea} type="text" name="newMessageBody" />
            <button type="submit">Send</button>
        </form>
    );
}


const AddMessageFormRedux = reduxForm({form: "addMessageForm"})(AddMessageForm);


const Dialogs = (props) => {


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    let dialogsElements = props.dialogsPage.dialogs.map(el => (<DialogItem name={el.name} key={el.id} id={el.id} />))


    let messageElements = props.dialogsPage.messages.map(el => (<Message text={el.text} myMessage={el.myMessage} key={el.id} id={el.id} />))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.chat}>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;