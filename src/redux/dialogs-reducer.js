const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Andrey",
        },
        {
            id: 2,
            name: "Ivan",
        },
        {
            id: 3,
            name: "Sergey"
        }
    ],
    messages: [
        {
            id: 1,
            message: "Hi"
        },
        {
            id: 2,
            message: "Hi!!"
        },
        {
            id: 3,
            message: "Haaaaai!!!!"
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state
            };
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
};

export const updateNewMessageBodyCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: text}
};

export default dialogsReducer;