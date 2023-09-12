import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_POST , GET_ALL_POSTS } from '../utils/queries'

const Home = () => {
    const [postContent, setPostContent] = useState('');

    const { loading, data} = useQuery(GET_ALL_POSTS);
    const [createPost] = useMutation(CREATE_POST);

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        try {
            await createPost({
                variables: { content: postContent },
            });

            setPostContent('');
        } catch (error) {
            console.error(error)
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const { posts } = data;

    return (
        <div>
            <div className='post-form'>
                <h2>Create a New Post</h2>
                <form onSubmit={handlePostSubmit}>
                    <textarea
                    placeholder='What do you want to say?...'
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    ></textarea>
                    <button type='submit'>Submit Post</button>
                </form>
            </div>

            <div className='posts'>
                <h2>All Posts</h2>
                {posts.map((post) => (
                    <div key = {post.id} className='post'>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;