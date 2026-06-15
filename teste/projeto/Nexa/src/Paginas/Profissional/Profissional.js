import { useNavigate } from "react-router-dom";
import Menu from "../../Componentes/Menu";
import fundo from "../../Componentes/Imagens/nexa_fundo.jpg";

function Profissional() {
  const navigate = useNavigate();

  // Função auxiliar para criar os balões
  const Card = ({ titulo, descricao, destino }) => (
    <div
      onClick={() => navigate(destino)}
      style={{
        background: "#fdf6f0",
        borderRadius: "16px",
        padding: "24px 32px",
        width: "100%",
        maxWidth: "420px",
        cursor: "pointer",
      }}
    >
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

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Menu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 16px",
          gap: "16px",
        }}
      >
        <h2
          style={{
            color: "#fdf6f0",
            fontFamily: "serif",
            fontSize: "28px",
          }}
        >
          Área do Profissional
        </h2>

        {/* Balões */}
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
        {/* ✅ Novo balão de Assinatura */}
        <Card
          titulo="Assinatura"
          descricao="Gerencie seu plano de divulgação"
          destino="/assinatura"
        />
      </div>
    </div>
  );
}

export default Profissional;
