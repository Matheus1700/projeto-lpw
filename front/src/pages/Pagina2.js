import {  Link } from "react-router-dom";
import React, { useState, useEffect }  from 'react';
//import {   useLocation } from "react-router-dom";

export default function Pagina2()
{

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/users/all')
         .then((response) => response.json())
         .then((data) => {
            //console.log(data);
            setPosts(data);
         }) 
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    //Recebe o evento do formulário
    const handleDelete = (e) => {
        
        Delete(e);
        window.location.reload();
    };

    async function Delete(e){
        await fetch(`http://127.0.0.1:3000/api/users/delete/${e}`, {
            method: 'POST',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .catch((err) => {
               console.log(err.message);
            });       
    }

   return (
    <div class='container'>
        <div class="row">
            <div class="col-12"> <Link to="/Inserir" state={{id: null}}  >Inserir</Link> </div>
        </div>
        <div class="row border border-primary">
                <div class="col-4">Nome</div>
                <div class="col-4"></div>
                <div class="col-4"></div> 
            </div>
       {posts.map((post) => {
          return (
            <>
            <div class="row border border-primary">
                <div class="col-0" value={post._id}></div>
                <div class="col-4">{post.name}</div>
                <div class="col-4"> <Link to="/Inserir" state={{id: post._id}} >Editar</Link></div>
                <div class="col-4"><button onClick={(e)=> handleDelete(post._id)} > Excluir </button></div> 
            </div>
             </>
          );
       })}
    </div>
    );
}