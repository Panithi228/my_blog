import react from 'react';

const Post = ({ id, title, content, image_path, editPost, deletePost }) => {
    return (
        <>
            <div className='card card-width bg-gray-200'>
                <section key={id}>
                    <h3>{title}</h3>
                    <hr className='new1'></hr>
                    <p>{content}</p>
                    <span title='edit post' onClick={() => editPost(id)}>
                        <i className='edit-button far fa-edit fa-2x button-css'></i>
                    </span>
                    <span title='delete post' onClick={() => deletePost(id)}>
                        <i className='delete-button fas fa-trash-alt fa-2x button-css'></i>
                    </span>
                </section>
            </div>
        </>
    );
};

export default Post;