"use client";
import { useState } from 'react';
import axios from 'axios';

export default function CEPSearch () {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState([]);
  
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress(response.data);
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  }
  
  return (
    <div>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>

      {address && (
        <div>
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


