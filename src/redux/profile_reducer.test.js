import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";

let initialState = {
    posts: [
        { id: 1, text: "I started learning ReactJS", likesCount: 11 },
        { id: 2, text: "My First Post", likesCount: 12 }
    ],
    newPostText: "",
    profile: null,
    status: ""
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Hello world");
    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("Hello world");

    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expectation
    expect(newState.posts[2].text).toBe("Hello world");
})

it('after deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
})

it('after deleting length of posts shouldn\'t be decremented', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
})
