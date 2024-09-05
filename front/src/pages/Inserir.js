import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Inserir() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // Função para enviar a requisição de criação ou atualização
    async function handleSubmit(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const url = id ? `http://127.0.0.1:3000/api/users/edit/${id}` : 'http://127.0.0.1:3000/api/users';
        const method = id ? 'PUT' : 'POST';
        const body = JSON.stringify({ name });

        try {
            const response = await fetch(url, {
                method,
                body,
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            });
            const data = await response.json();

            if (response.ok) {
                setName('');
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
                    const response = await fetch(`http://127.0.0.1:3000/api/users/${userId}`);
                    const data = await response.json();
                    if (response.ok) {
                        setName(data.name);
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
                    <div className="col-2">Nome</div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>
                    </div>
                    <div className="col-2">
                        <button>
                            <Link to="/">Voltar</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
