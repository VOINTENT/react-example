import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name}  key = {dialog.id} id={dialog.id}/>);
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message} key = {message.id} id={message.id}/>);

    let onSendMessageClick = () => {
        props.sendMessage()
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message" name={"newMessageBody"} component={TextArea} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageReduxForm = reduxForm({form: 'message'})(AddMessageForm);

export default Dialogs;