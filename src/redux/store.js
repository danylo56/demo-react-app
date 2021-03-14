import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "I started learning ReactJS", likesCount: 11},
                {id: 2, text: "My First Post", likesCount: 12}
            ],
            newPostText: "",
        },
        messagesPage:{
            messages: [{id: 1, text: "Hi", myMessage: true},
                {id: 2, text: "What's up", myMessage: false},
                {id: 3, text: "Easy", myMessage: true},
                {id: 4, text: "You?", myMessage: true},
                {id: 5, text: "Me too", myMessage: false},
            ],
            dialogs: [
                {id: 1, name: "Robert"},
                {id: 2, name: "John"},
                {id: 3, name: "Alex"},
                {id: 4, name: "Joe"},
                {id: 5, name: "Donald"},
                {id: 6, name: "George"},
            ],
            newMessageText: "",
        },
        sidebar: {
            friends: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Mike"},
                {id: 3, name: "David"},
                {id: 4, name: "Lisa"},
                {id: 5, name: "Alex"},

            ],
        }
    },
    _callSubscriber(){
        console.warn("No observer")
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){ //{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;
