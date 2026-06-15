import { useState } from 'react';
import Menu from '../Menu/index';
import fundo from '../Imagens/nexa_fundo.jpg';
import './Perfil2.css';

function Perfil2() {
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    complemento: '',
  });

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  function handleSalvar() {
    alert('Dados salvos com sucesso!');
  }

  return (
    

    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
    <Menu />
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-header">
          <div className="perfil-avatar">
            <span>P</span>
          </div>
          <div className="perfil-header-info">
            <p className="perfil-label">PERFIL DO PROFISSIONAL</p>
            <h1 className="perfil-nome">{dados.nome || 'Profissional'}</h1>
            <p className="perfil-sub">Gerencie informações do seu estabelecimento.</p>
          </div>
        </div>

        <div className="perfil-divider">◆</div>

        <div className="perfil-form">
          <div className="perfil-campo">
            <label>Nome</label>
            <input name="nome" value={dados.nome} onChange={handleChange} placeholder="Nome do Estabelecimento" />
          </div>

          <div className="perfil-campo">
            <label>Telefone</label>
            <input name="telefone" value={dados.telefone} onChange={handleChange} placeholder="(00) 00000-0000" />
          </div>

          <div className="perfil-campo">
            <label>Email</label>
            <input name="email" value={dados.email} onChange={handleChange} placeholder="seu@email.com" />
          </div>

          <div className="perfil-campo">
            <label>Endereço</label>
            <input name="cep" value={dados.cep} onChange={handleChange} placeholder="CEP" />
            <input name="rua" value={dados.rua} onChange={handleChange} placeholder="Rua" />
            <input name="numero" value={dados.numero} onChange={handleChange} placeholder="Número" />
            <input name="bairro" value={dados.bairro} onChange={handleChange} placeholder="Bairro" />
            <input name="complemento" value={dados.complemento} onChange={handleChange} placeholder="Complemento" />
          </div>

          <div className="perfil-divider">◆</div>

          <div className="perfil-campo">
            <label>CNPJ <span className="nao-editavel">(não editável)</span></label>
            <input value="00.000.000/0000-00" disabled />
          </div>
        </div>

        <button className="perfil-btn" onClick={handleSalvar}>
          Salvar alterações
        </button>

      </div>
    </div>
    </div> 
  );
}

export default Perfil2;