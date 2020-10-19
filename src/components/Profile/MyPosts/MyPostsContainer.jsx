import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let onAddPostClick = () => {
                    store.dispatch(addPostCreator());
                }

                let onNewPostChange = (text) => {
                    store.dispatch(updateNewPostTextCreator(text));
                }

                return <MyPosts updateNewPostText={onNewPostChange}
                    addPost={onAddPostClick}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;