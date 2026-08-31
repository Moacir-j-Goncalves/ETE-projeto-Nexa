<<<<<<< HEAD
// Importações necessárias
import { useState } from 'react'; // Hook do React para gerenciar estado
import Menu from '../Menu/index'; // Componente de menu
import fundo from '../Imagens/nexa_fundo.jpg'; // Imagem usada como fundo
import './Perfil2.css'; // Estilos específicos do componente
=======
// Importa o useState para guardar e atualizar os dados do formulário
import { useState } from 'react';

// Importa o componente Menu (barra de navegação)
import Menu from '../Menu/index';

// Importa a imagem de fundo
import fundo from '../Imagens/nexa_fundo.jpg';

// Importa o arquivo de estilos da página
import './Perfil2.css';
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f

// Componente principal
function Perfil2() {
<<<<<<< HEAD
  // Estado inicial com os dados do perfil
=======

  // Cria o estado "dados" com todos os campos do formulário começando vazios
  // Agora inclui cep e complemento, além dos campos de antes
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    complemento: '',
  });

<<<<<<< HEAD
  // Função para atualizar os campos do formulário
=======
  // Função que atualiza o campo correto quando o usuário digita
  // e.target.name pega o nome do campo (ex: "cep", "complemento")
  // e.target.value pega o que foi digitado
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value });
  }

  // Função chamada ao clicar em "Salvar alterações"
  function handleSalvar() {
    alert('Dados salvos com sucesso!');
  }

  // Estrutura visual do componente
  return (
<<<<<<< HEAD
    <div 
      style={{ 
        backgroundImage: "url(" + fundo + ")", 
        backgroundSize: 'cover', 
        minHeight: '100vh' 
      }}
    >
      {/* Menu de navegação */}
      <Menu />

      <div className="perfil-container">
        <div className="perfil-card">
          
          {/* Cabeçalho do perfil */}
          <div className="perfil-header">
            <div className="perfil-avatar">
              <span>P</span>
            </div>
            <div className="perfil-header-info">
              <p className="perfil-label">PERFIL DO PROFISSIONAL</p>
=======

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
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
              <h1 className="perfil-nome">{dados.nome || 'Profissional'}</h1>
              <p className="perfil-sub">Gerencie informações do seu estabelecimento.</p>
            </div>
          </div>

<<<<<<< HEAD
          {/* Divisor visual */}
          <div className="perfil-divider">◆</div>

          {/* Formulário de edição */}
          <div className="perfil-form">
            
            {/* Campo Nome */}
            <div className="perfil-campo">
              <label>Nome</label>
              <input 
                name="nome" 
                value={dados.nome} 
                onChange={handleChange} 
                placeholder="Nome do Estabelecimento" 
              />
=======
          {/* Divisor decorativo */}
          <div className="perfil-divider">◆</div>

          {/* Formulário com os campos editáveis */}
          <div className="perfil-form">

            {/* Campo Nome do estabelecimento */}
            <div className="perfil-campo">
              <label>Nome</label>
              <input name="nome" value={dados.nome} onChange={handleChange} placeholder="Nome do Estabelecimento" />
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
            </div>

            {/* Campo Telefone */}
            <div className="perfil-campo">
              <label>Telefone</label>
<<<<<<< HEAD
              <input 
                name="telefone" 
                value={dados.telefone} 
                onChange={handleChange} 
                placeholder="(00) 00000-0000" 
              />
=======
              <input name="telefone" value={dados.telefone} onChange={handleChange} placeholder="(00) 00000-0000" />
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
            </div>

            {/* Campo Email */}
            <div className="perfil-campo">
              <label>Email</label>
<<<<<<< HEAD
              <input 
                name="email" 
                value={dados.email} 
                onChange={handleChange} 
                placeholder="seu@email.com" 
              />
            </div>

            {/* Campos de Endereço */}
=======
              <input name="email" value={dados.email} onChange={handleChange} placeholder="seu@email.com" />
            </div>

            {/* Campo Endereço agora dividido em 5 inputs:
                CEP, Rua, Número, Bairro e Complemento */}
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
            <div className="perfil-campo">
              <label>Endereço</label>
              <input name="cep" value={dados.cep} onChange={handleChange} placeholder="CEP" />
              <input name="rua" value={dados.rua} onChange={handleChange} placeholder="Rua" />
<<<<<<< HEAD
              <input name="numero" value={dados.numero} onChange={handleChange} placeholder="Número" />
              <input name="bairro" value={dados.bairro} onChange={handleChange} placeholder="Bairro" />
              <input name="complemento" value={dados.complemento} onChange={handleChange} placeholder="Complemento" />
            </div>

            {/* Divisor visual */}
            <div className="perfil-divider">◆</div>

            {/* Campo CNPJ (não editável) */}
=======
              <input name="bairro" value={dados.bairro} onChange={handleChange} placeholder="Bairro" />
              <input name="numero" value={dados.numero} onChange={handleChange} placeholder="Número" />
              <input name="complemento" value={dados.complemento} onChange={handleChange} placeholder="Complemento" />
            </div>

            {/* Divisor decorativo */}
            <div className="perfil-divider">◆</div>

            {/* Campo CNPJ - desabilitado, não pode ser editado
                Note que aqui NÃO tem mais o campo Data de Nascimento,
                pois essa página é sobre o estabelecimento, não uma pessoa */}
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
            <div className="perfil-campo">
              <label>CNPJ <span className="nao-editavel">(não editável)</span></label>
              <input value="00.000.000/0000-00" disabled />
            </div>
          </div>

<<<<<<< HEAD
          {/* Botão de salvar */}
=======
          {/* Botão que chama a função handleSalvar ao ser clicado */}
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
          <button className="perfil-btn" onClick={handleSalvar}>
            Salvar alterações
          </button>

        </div>
      </div>
<<<<<<< HEAD
    </div> 
  );
}

// Exporta o componente para uso em outras partes da aplicação
export default Perfil2;
=======
    </div>
  );
}

// Exporta o componente para ser usado no App.js
export default Perfil2;
>>>>>>> 8bd2ddee83e6a517a4b6c2868e7c7a13680cd57f
