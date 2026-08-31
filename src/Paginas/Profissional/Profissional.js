// Importações necessárias
import { useNavigate } from "react-router-dom"; // Hook do React Router para navegação programática
import Menu from "../../Componentes/Menu"; // Componente de menu
import fundo from "../../Componentes/Imagens/nexa_fundo.jpg"; // Imagem usada como fundo

// Componente principal
function Profissional() {
  const navigate = useNavigate(); // Hook que permite redirecionar o usuário para outras rotas

  // Componente "Card" para criar os balões clicáveis
  const Card = ({ titulo, descricao, destino }) => (
    <div
      onClick={() => navigate(destino)} // Ao clicar, redireciona para a rota indicada
      style={{
        background: "#fdf6f0",
        borderRadius: "16px",
        padding: "24px 32px",
        width: "100%",
        maxWidth: "420px",
        cursor: "pointer",
      }}
    >
      {/* Mostra o título recebido por prop */}
      <p
        style={{
          color: "#3d0c0c",
          fontSize: "18px",
          fontFamily: "serif",
          margin: 0,
        }}
      >
        {titulo}
      </p>

      {/* Mostra a descrição recebida por prop */}
      <p
        style={{
          color: "#9e6b6b",
          fontSize: "13px",
          margin: "4px 0 0",
        }}
      >
        {descricao}
      </p>
    </div>
  );

  // Estrutura visual do componente
  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`, // Define a imagem de fundo
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {/* Renderiza a barra de menu no topo */}
      <Menu />

      {/* Div que organiza os cards em coluna centralizada */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Organiza os elementos em coluna
          alignItems: "center", // Centraliza horizontalmente
          padding: "40px 16px",
          gap: "16px", // Espaçamento entre os elementos
        }}
      >
        {/* Título da página */}
        <h2
          style={{
            color: "#fdf6f0",
            fontFamily: "serif",
            fontSize: "28px",
          }}
        >
          Área do Profissional
        </h2>

        {/* Cards de navegação */}
        <Card
          titulo="Editar Perfil"
          descricao="Altere informações do seu estabelecimento"
          destino="/perfil2"
        />
        <Card
          titulo="Meus Atendimentos"
          descricao="Consulte seus atendimentos"
          destino="/meus-atendimentos"
        />
        <Card
          titulo="Meus Horários"
          descricao="Gerencie seus horários disponíveis"
          destino="/horario-do-profissional"
        />
        <Card
          titulo="Sobre Nós"
          descricao="Conheça mais sobre nosso estabelecimento"
          destino="/sobre"
        />
        <Card
          titulo="Assinatura"
          descricao="Gerencie seu plano de divulgação"
          destino="/assinatura"
        />
      </div>
    </div>
  );
}

// Exporta o componente para ser usado no App.js
export default Profissional;
