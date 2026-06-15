import { useState } from 'react';
import './Perfil.css';

function Perfil() {
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
  });

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSalvar() {
    alert('Dados salvos com sucesso!');
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">

        <div className="perfil-header">
          <div className="perfil-avatar">
            <span>C</span>
          </div>
          <div className="perfil-header-info">
            <p className="perfil-label">PERFIL CLIENTE</p>
            <h1 className="perfil-nome">{dados.nome || 'Cliente'}</h1>
            <p className="perfil-sub">Gerencie suas informações pessoais.</p>
          </div>
        </div>

        <div className="perfil-divider">◆</div>

        <div className="perfil-form">
          <div className="perfil-campo">
            <label>Nome</label>
            <input name="nome" value={dados.nome} onChange={handleChange} placeholder="Seu nome" />
          </div>

          <div className="perfil-campo">
            <label>Telefone</label>
            <input name="telefone" value={dados.telefone} onChange={handleChange} placeholder="(00) 00000-0000" />
          </div>

          <div className="perfil-campo">
            <label>Email</label>
            <input name="email" value={dados.email} onChange={handleChange} placeholder="seu@email.com" />
          </div>

          <div className="perfil-divider">◆</div>

          <div className="perfil-campo">
            <label>CPF <span className="nao-editavel">(não editável)</span></label>
            <input value="000.000.000-00" disabled />
          </div>

          <div className="perfil-campo">
            <label>Data de nascimento <span className="nao-editavel">(não editável)</span></label>
            <input value="01/01/1990" disabled />
          </div>
        </div>

        <button className="perfil-btn" onClick={handleSalvar}>
          Salvar alterações
        </button>

      </div>
    </div>
  );
}

export default Perfil;