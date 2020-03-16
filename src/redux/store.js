import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Hi! How are you?",
                    likesCount: 12
                },
                {
                    id: 2,
                    message: "This is my first post!",
                    likesCount: 22
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
                    name: "Segrey"
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State is changed!')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};

export default store;