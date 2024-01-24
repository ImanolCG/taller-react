import { useState } from "react";

export const PostForm = () => {

    const [post, setPost] = useState({title: '', body: ''});

    const hadleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    const handleEmailChange = (e) => {
        setPost({...post, title: e.target.value});
    }

    const handlePasswordChange = (e) => {
        setPost({...post, body: e.target.value});
    }

    const handleInputChange = ({target}) => {
        const {name, value} = target;
        setPost({...post, [name]: value});
    }



    return (
        <>
            <form  className="d-flex" onSubmit={hadleSubmit}>
                <div className='form-group m-1'>
                    <label>Titulo</label>
                    <input
                        className='form-control'
                        placeholder='Titulo'
                        autoComplete="off"
                        name="title"
                        onChange={handleInputChange}
                        value={post.title}
                    />
                </div>
                <div className='form-group m-1'>
                    <label>Contenido</label>
                    <input
                        className='form-control'
                        placeholder='Contenido'
                        autoComplete="off"
                        name="body"
                        onChange={handleInputChange}
                        value={post.body}
                    />
                </div>
                <button type='submit' className='btn btn-primary m-4'>
                    Agregar
                </button>
            </form>
        </>
    );

}