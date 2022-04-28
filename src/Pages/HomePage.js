import React from "react";
import { useNavigate } from 'react-router-dom';
import MainHeader from "../components/MainHeader/MainHeader";


const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <MainHeader />

            <p>Texto da noticia que vamos botar na intrant</p>

            <button onClick={() => { navigate('/noticias') }}>Noticias</button>
        </div>
    )
}

export default HomePage;