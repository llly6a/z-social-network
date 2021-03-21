import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;