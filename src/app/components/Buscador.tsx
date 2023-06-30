"use client";
import { useState } from 'react';
import axios from 'axios';

export default function CEPSearch() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setAddress(response.data);
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleSearch()
        }
    }

    return (
        <div className='container'>
            <h1>Buscador de CEP</h1>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" onClick={handleSearch}>
                    <g>
    n                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input placeholder="Digite o CEP" type="search" className="input" value={cep} onChange={(e) => setCep(e.target.value)} onKeyPress={handleKeyPress} />
            </div>
            

            {address && (
                <div className='mt-4 mb-4'>
                    <p>CEP: {address.cep}</p>
                    <p>Logradouro: {address.logradouro}</p>
                    <p>Bairro: {address.bairro}</p>
                    <p>Cidade: {address.localidade}</p>
                    <p>Estado: {address.uf}</p>
                </div>
            )}
        </div>
    );
}


