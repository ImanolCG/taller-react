import { useEffect, useState } from "react";
import { PostForm } from "./PostForm";

export const Examen01 = () => {

    const [showPostForm, setShowPostForm] = useState(false);

    const handleShowPostForm = () => {
        setShowPostForm(prev => !prev);
    };

    const handleFetchPosts = async () => {

        const url='https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const data = await response.json(); 
        // console.log(data);
        return data;
    }

    const [posts, setPosts] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState();

    function postsList (posts){
        let list = "Sin Posts registrados"
        if (posts.length>0){
            list = posts.map((post) =>
                <div className="mt-2" style={{borderRadius: '1rem', backgroundColor: 'powderblue', border: 'solid 1px gray', padding: '10px'}}>
                    <p>#{post.id}</p>
                    <h5>Titulo: {post.title} </h5>
                    <p>{post.body}</p>
                </div>
            );
        }
        return list;
    }

    useEffect(() => {
        // console.log("rederizando");
        handleFetchPosts()
            .then(posts => setPosts(posts))
            .catch(error => setIsError(error.message));
        return () => {
            // console.log("al dejar de renderizar");
        }
    },[]);

    useEffect(() => {
        if(posts){setIsLoading(false)}
    },[posts]); 

    useEffect(() => {
        if(isError){setIsLoading(false)}
    },[isError]); 

    

    return(
        <div className="m-4">
            
            <h4>Examen React  | 24-enero-2024</h4>
            <hr />
            <div className="mb-3">
                {showPostForm 
                ? 
                    <div className="d-flex">
                        <PostForm />  <button className="btn btn-primary m-4" onClick={handleShowPostForm}> Cancelar </button>
                    </div>
                : 
                    <button className="btn btn-primary" onClick={handleShowPostForm}> Agregar Post </button>
                    
                }
            </div>
            <h3> Posts </h3>
            {!isLoading && isError && <h3> Error: {isError}</h3>}
            {isLoading ? <h3> Loading... </h3> : postsList(posts)}
            <br />
        </div>
    );

}