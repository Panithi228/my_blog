import React from 'react'

const ModifyPost = (props) => {
    return (
        <>
            <form>
                <h2>Modify Post</h2>
                <label className="col-sm-12 col-form-label">
                    <b>Title</b>
                    <input
                        className="form-control form-control-sm"
                        defaultValue={props.title}
                        autoFocus={true}
                        onChange={props.savePostTitleToState}
                        placeholder="title"
                        size="39"
                    />
                </label>
                <br />
                <label className="col-sm-12 col-form-label">
                    
                </label>
            </form>
        </>
    )
}