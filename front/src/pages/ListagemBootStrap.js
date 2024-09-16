import {  Link } from "react-router-dom";
import React, { useState, useEffect }  from 'react';

import EditImg from "../img/icons8-lápis-32.png"
import DeleteImg from "../img/icons8-resíduos-32.png"
import "./css/table.css"

export default function ListagemBootStrap()
{

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/livros/all')
         .then((response) => response.json())
         .then((data) => {
            setPosts(data);
         }) 
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    const handleDelete = (e) => {
        Delete(e);
        window.location.reload();
    };

    async function Delete(e){
        await fetch(`http://127.0.0.1:3000/api/livros/delete/${e}`, {
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
        <div className="row mb-4">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                <h2 className="text-center">Cadastro de Livros</h2>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <table className="table table-hover table-responsive-md shadow-sm border rounded">
            <thead className="bg-gradient text-white">
                <tr>
                <th className="text-center">Nome</th>
                <th className="text-center">Preço</th>
                <th className="text-center">Quantidade</th>
                <th className="text-center">Ação</th>
                </tr>
            </thead>

            <tbody>
                {posts.map((post) => (
                <tr key={post._id} className="align-middle">
                    <td className="text-center">{post.nome}</td>
                    <td className="text-center">R$ {post.preco}</td>
                    <td className="text-center">{post.quantidade}</td>
                    <td className="text-center">
                    <Link to="/Formulario" state={{ id: post._id }}>
                        <img
                        src={EditImg}
                        alt="Editar"
                        className="img-fluid me-2"
                        style={{ maxWidth: '20px' }}
                        />
                    </Link>
                    <button onClick={() => handleDelete(post._id)} className="btn p-0">
                        <img
                        src={DeleteImg}
                        alt="Excluir"
                        className="img-fluid"
                        style={{ maxWidth: '20px' }}
                        />
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>


        <div className="row mt-4">
            <div class="col-sm-4"></div>
            <div class="col-sm-4 d-grid">
                <Link to="/Formulario" className ='btn btn-success' state={{id: null}}>Cadastrar</Link>
            </div>
            <div class="col-sm-4"></div>
        </div>

    </div>
    );
}