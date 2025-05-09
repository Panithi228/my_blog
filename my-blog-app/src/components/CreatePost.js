import React from "react";

const CreatePost = (props) => {
    return (
        <>
            <form onSubmit={props.savePost}>
                <h2>Create New Post</h2>
                <label className="col-sm-12 col-form-label">
                    <b>Title</b>
                    <input
                        className="form-control form-control-sm"
                        autoFocus={true}
                        type="text"
                        placeholder="post title"
                        onChange={props.savePostTitleToState}
                        required
                        ref={props.getTitle}
                    />
                </label>
                <br />
                <label className="col-sm-12 col-form-label">
                    <b>Content</b>
                    <textarea 
                        className="form-control form-control-sm"
                        placeholder="description of post"
                        onChange={props.savePostContentToState}
                        rows="18"
                        cols="41"
                        required
                        ref={props.getContent}
                    />
                </label>
                <br />
                <button title="save post" className="btn btn-success ml-3">
                    Save
                </button>
            </form>
        </>
    );
};

export default CreatePost;