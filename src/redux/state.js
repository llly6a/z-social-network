let state = {
    postsPage: {
        posts: [
            { id: 1, message: 'first post', likes: 2 },
            { id: 2, message: 'second post', likes: 3 },
            { id: 3, message: 'third post', likes: 4 },
            { id: 4, message: 'four post', likes: 62 },
            { id: 5, message: 'fifth post', likes: 12 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Misha' },
            { id: 2, name: 'Zhenya' },
            { id: 3, name: 'Svin' },
            { id: 4, name: 'Koshka' },
            { id: 5, name: 'Sobaka' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Meow' },
            { id: 3, message: 'Arrrrr' },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0
    }
    state.postsPage.posts.push(newPost);
}

export default state