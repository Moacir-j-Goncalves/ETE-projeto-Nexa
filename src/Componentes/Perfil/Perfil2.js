// Importa o useState para guardar e atualizar os dados do formulário
import { useState } from 'react';

// Importa o componente Menu (barra de navegação)
import Menu from '../Menu/index';

// Importa a imagem de fundo
import fundo from '../Imagens/nexa_fundo.jpg';

// Importa o arquivo de estilos da página
import './Perfil2.css';

function Perfil2() {

  // Cria o estado "dados" com todos os campos do formulário começando vazios
  // Agora inclui cep e complemento, além dos campos de antes
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

  // Função que atualiza o campo correto quando o usuário digita
  // e.target.name pega o nome do campo (ex: "cep", "complemento")
  // e.target.value pega o que foi digitado
  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  // Função chamada ao clicar em "Salvar alterações"
  function handleSalvar() {
    alert('Dados salvos com sucesso!');
  }

  return (

    // Div principal com imagem de fundo ocupando a tela toda
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>

      {/* Renderiza a barra de menu no topo */}
      <Menu />

      {/* Container que centraliza o card na tela */}
      <div className="perfil-container">
        <div className="perfil-card">

          {/* Cabeçalho com avatar e informações do profissional */}
          <div className="perfil-header">

            {/* Avatar com a letra P de Profissional */}
            <div className="perfil-avatar">
              <span>P</span>
            </div>

            {/* Informações ao lado do avatar */}
            <div className="perfil-header-info">
              <p className="perfil-label">PERFIL DO PROFISSIONAL</p>

              {/* Mostra o nome digitado ou "Profissional" se estiver vazio */}
              <h1 className="perfil-nome">{dados.nome || 'Profissional'}</h1>
              <p className="perfil-sub">Gerencie informações do seu estabelecimento.</p>
            </div>
          </div>

          {/* Divisor decorativo */}
          <div className="perfil-divider">◆</div>

          {/* Formulário com os campos editáveis */}
          <div className="perfil-form">

            {/* Campo Nome do estabelecimento */}
            <div className="perfil-campo">
              <label>Nome</label>
              <input name="nome" value={dados.nome} onChange={handleChange} placeholder="Nome do Estabelecimento" />
            </div>

            {/* Campo Telefone */}
            <div className="perfil-campo">
              <label>Telefone</label>
              <input name="telefone" value={dados.telefone} onChange={handleChange} placeholder="(00) 00000-0000" />
            </div>

            {/* Campo Email */}
            <div className="perfil-campo">
              <label>Email</label>
              <input name="email" value={dados.email} onChange={handleChange} placeholder="seu@email.com" />
            </div>

            {/* Campo Endereço agora dividido em 5 inputs:
                CEP, Rua, Número, Bairro e Complemento */}
            <div className="perfil-campo">
              <label>Endereço</label>
              <input name="cep" value={dados.cep} onChange={handleChange} placeholder="CEP" />
              <input name="rua" value={dados.rua} onChange={handleChange} placeholder="Rua" />
              <input name="numero" value={dados.numero} onChange={handleChange} placeholder="Número" />
              <input name="bairro" value={dados.bairro} onChange={handleChange} placeholder="Bairro" />
              <input name="complemento" value={dados.complemento} onChange={handleChange} placeholder="Complemento" />
            </div>

            {/* Divisor decorativo */}
            <div className="perfil-divider">◆</div>

            {/* Campo CNPJ - desabilitado, não pode ser editado
                Note que aqui NÃO tem mais o campo Data de Nascimento,
                pois essa página é sobre o estabelecimento, não uma pessoa */}
            <div className="perfil-campo">
              <label>CNPJ <span className="nao-editavel">(não editável)</span></label>
              <input value="00.000.000/0000-00" disabled />
            </div>
          </div>

          {/* Botão que chama a função handleSalvar ao ser clicado */}
          <button className="perfil-btn" onClick={handleSalvar}>
            Salvar alterações
          </button>

        </div>
      </div>
    </div>
  );
}

// Exporta o componente para ser usado no App.js
export default Perfil2;