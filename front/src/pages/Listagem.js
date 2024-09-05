import {  Link } from "react-router-dom";
import React, { useState, useEffect }  from 'react';

import EditImg from "../img/icons8-lápis-32.png"
import DeleteImg from "../img/icons8-resíduos-32.png"
import "../table.css"

export default function Listagem()
{

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/produtos/all')
         .then((response) => response.json())
         .then((data) => {
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
        await fetch(`http://127.0.0.1:3000/api/produtos/delete/${e}`, {
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
        
        <table className="table">
            <thead>
                <tr>
                <th className="text-center">Nome</th>
                <th className="text-center">Preço</th>
                <th className="text-center">Quantidade</th>
                <th className="text-center">Ação</th>
                </tr>
            </thead>

            {posts.map((post) => {
                return (
                <tbody key={post._id}>
                    <tr>
                    <td className="text-center">{post.nome}</td>
                    <td className="text-center">{post.preco}</td>
                    <td className="text-center">{post.quantidade}</td>
                    <td className="text-center">
                        <Link to="/Formulario" state={{ id: post._id }}>
                            <img src={EditImg} alt="Editar" className="img-fluid" />
                        </Link>
                        <button onClick={() => handleDelete(post._id)} className="ms-2">
                            <img src={DeleteImg} alt="Excluir" className="img-fluid" />
                        </button>
                    </td>
                    </tr>
                </tbody>
                );
            })}
            </table>


        <div className="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4 d-grid">
                <Link to="/Formulario" className ='btn btn-success' state={{id: null}}  >Cadastrar</Link>
            </div>
            <div class="col-sm-4"></div>
        </div>

    </div>
    );
}