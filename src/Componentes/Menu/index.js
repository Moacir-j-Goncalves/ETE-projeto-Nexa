import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      {/* Barra superior */}
      <div className="menu-barra">
        {/* Botão hamburguer */}
        <button
          onClick={() => setAberto(!aberto)}
          className="menu-hamburguer"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <span className="menu-logo">NEXA</span>
      </div>

      {/* Menu lateral */}
      <div className={`menu-lateral ${aberto ? 'aberto' : ''}`}>
        <button className="menu-botao" onClick={() => { navigate('/'); setAberto(false); }}>Home</button>
        <button className="menu-botao" onClick={() => { navigate('/login'); setAberto(false); }}>Login</button>
        <button className="menu-botao" onClick={() => { navigate('/profissional'); setAberto(false); }}>Profissional</button>
        <button className="menu-botao" onClick={() => { navigate('/area-do-cliente'); setAberto(false); }}>Área do Cliente</button>
        <button className="menu-botao" onClick={() => { navigate('/agendamento'); setAberto(false); }}>Agendar Horário</button>
<<<<<<< HEAD
        <button className="menu-botao" onClick={() => { navigate('/sobre'); setAberto(false); }}>Sobre nós</button>
        <button className="menu-botao" onClick={() => { navigate('/assinatura'); setAberto(false); }}>Página do associado</button>
        
        {/* Correção aqui: habilita a Central de Ajuda */}
        <button className="menu-botao" onClick={() => { navigate('/central-de-ajuda'); setAberto(false); }}>
          Central de Ajuda
        </button>
=======
         <button className="menu-botao" onClick={() => { navigate('/sobre-nexa'); setAberto(false); }}>Sobre nós</button>
        <button className="menu-botao" onClick={() => setAberto(false)}>Página do associado</button>
        <button className="menu-botao" onClick={() => { navigate('/central-de-ajuda'); setAberto(false); }}>Central de Ajuda</button>
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
      </div>
    </div>
  );
}

export default Menu;
