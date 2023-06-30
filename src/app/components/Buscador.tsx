import { useState } from "react";
import axios from "axios";

export default function CepSearch() {
    const [cep, setCep] = useState("");
    const [adress, SetAdress] = useState("null");
    const handleSearch =async () => {
        try{
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            SetAdress(response.data);
        } catch (error){
            console.error(error);
        }
        
    }
    return (
        
    )
}
