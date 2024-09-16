import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./css/form.css"

export default function Inserir() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [id, setId] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // Função para enviar a requisição de criação ou atualização
    async function handleSubmit(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const url = id ? `http://127.0.0.1:3000/api/livros/edit/${id}` : 'http://127.0.0.1:3000/api/livros';
        const method = id ? 'PUT' : 'POST';
        const body = JSON.stringify({ nome, preco, quantidade });

        try {
            const response = await fetch(url, {
                method,
                body,
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            });
            const data = await response.json();
            console.log(data)

            if (response.ok) {
                setNome('');
                setPreco('');
                setQuantidade('');
                navigate('/'); // Redireciona para a página principal após sucesso
            } else {
                console.error(data.msg || 'Erro ao processar a requisição');
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    // Função para carregar dados do usuário para edição
    useEffect(() => {
        const fetchIdData = async () => {
            const userId = location.state?.id;
            if (userId) {
                setId(userId);
                try {
                    const response = await fetch(`http://127.0.0.1:3000/api/livros/${userId}`);
                    const data = await response.json();
                    if (response.ok) {
                        setNome(data.nome);
                        setPreco(data.preco);
                        setQuantidade(data.quantidade);
                    } else {
                        console.error(data.msg || 'Erro ao buscar dados do usuário');
                    }
                } catch (err) {
                    console.error(err.message);
                }
            }
        };

        fetchIdData();
    }, [location.state]);

    return (
        <div className="container">

        <div className="row mb-4">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2 className="text-center">Cadastro de livros</h2>
                </div>
            <div className="col-sm-4"></div>
        </div>                

            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="nome">Nome do Livro</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="preco">Preço do Livro</label>
                    <input
                        type="number"
                        id="preco"
                        className="form-control"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        required
                        min="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        type="number"
                        id="quantidade"
                        className="form-control"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        min="0"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-success">
                        {id ? 'Atualizar' : 'Cadastrar'}
                    </button>
                    <Link to="/" className="btn btn-success">Voltar</Link>
                </div>
            </form>
        </div>
    );
}
