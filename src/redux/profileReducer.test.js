import profileReducer, { addPost,deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 0, message: 'first post', likes: 2 },
        { id: 1, message: 'second post', likes: 3 },
        { id: 2, message: 'third post', likes: 4 },
        { id: 3, message: 'four post', likes: 62 },
        { id: 4, message: 'fifth post', likes: 12 },
    ]
}

test('new post lenght should be 6', () => {
    // 1. start test data
    let action = addPost("test-string");
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(6);
});

test('new post message equals test-string', () => {
    // 1. start test data
    let action = addPost("test-string");
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts[5].message).toBe("test-string");
});

test('new post lenght should be 4', () => {
    // 1. start test data
    let action = deletePost(0);
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

test(`new post lenght should't changed if post id is incorrect`, () => {
    // 1. start test data
    let action = deletePost(9999);
    // 2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});