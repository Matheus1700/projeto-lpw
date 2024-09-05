import React, { useEffect, useState } from 'react';
import {  Link, useLocation } from "react-router-dom";


export default function Inserir(){

    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    //const [id, setId] = useState('');
    const location = useLocation()
    const{id} = location.state;

    useEffect(()=>{
        carregaId();
    });

   async function clickUpdate(e){
   
        await fetch(`http://127.0.0.1:3000/api/users/edit/${id}`, {
            method: 'POST',
            body: JSON.stringify({
               name: name
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => {
               setPosts((posts) => [data, ...posts]);
               setName('');
            })
            .catch((err) => {
               console.log(err.message);
            });       
    }

      
    const handleSubmit = (e) => {
        
        if(id == null){
        e.preventDefault();
        clickInsert(name);
        }else{
            clickUpdate(name);
        }
     };    

    async function carregaId(){
            console.log('chamou');
            setId(location.state);
            if(id != null && name == ''){
            await fetch(`http://127.0.0.1:3000/api/users/${id}`)
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                setName(data.name);
             }) 
             .catch((err) => {
                console.log(err.message);
             });
            }
     }  

     //carregaId();
    
    return (
        <div class="container" onLoad={carregaId()}>
            <form onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-2">Nome</div>
                <div class="col-6">
                    <input type="text" class="form-control"  value={name} 
                        onChange={(e) => setName(e.target.value)} ></input></div>
                <div class="col-2"></div>
                <div class="col-2"></div>
                
            </div>
            <div class="row">
                <div class="col-2"><button type="submit">Cadastrar</button></div>
                <div class="col-2"><button><Link to="/">Voltar</Link></button></div>
                <div class="col-2"></div>
                <div class="col-2"></div>
                
            </div>
            </form>
        </div>
    );
}