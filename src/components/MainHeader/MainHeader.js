import React from "react";
import { useNavigate } from 'react-router-dom';
import SpacenetMinorLogo from "/Users/rafaeljordao/Documents/Intranet/Intranet/src/assets/SpacenetMinorLogo.svg"

const MainHeader = () => {
    
    const navigate = useNavigate()
    
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <div>
                <section className="one-fourth" id="html">
                   <a style={{cursor:'pointer'}} onClick={() => { navigate('/homepage') }}><img src={SpacenetMinorLogo} /></a>
                </section>
            </div>
            <div style={{ height: '2.5rem', width: '2.5rem', backgroundColor: '#00ADB5', borderRadius: '50px' }}></div>
        </header>
    )
}

export default MainHeader;