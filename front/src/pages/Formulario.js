import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

        const url = id ? `http://127.0.0.1:3000/api/produtos/edit/${id}` : 'http://127.0.0.1:3000/api/produtos';
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
                    const response = await fetch(`http://127.0.0.1:3000/api/produtos/${userId}`);
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
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">Nome do Produto</div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">Preco do Produto</div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <input
                            type="Number"
                            className="form-control"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">Quantidade</div>
                    <div className="col-4"></div>
                </div>

                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <input
                            type="Number"
                            className="form-control"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </div>
                    <div className="col-4"></div>
                </div>

                <div className="row mt-4">
                    <div className="col-4"></div>
                    <div className="col-2 d-grid">
                        <button type="submit" className=" btn btn-success">{id ? 'Atualizar' : 'Cadastrar'}</button>
                    </div>
                    <div className="col-2 d-grid">
                            <Link to="/" className='btn btn-secondary'>Voltar</Link>
                    </div>
                    <div className="col-4"></div>
                </div>
            </form>
        </div>
    );
}
