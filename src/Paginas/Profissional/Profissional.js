// Importa a função de navegação entre páginas
import { useNavigate } from "react-router-dom";

// Importa o componente Menu (barra de navegação)
import Menu from "../../Componentes/Menu";

// Importa a imagem de fundo
import fundo from "../../Componentes/Imagens/nexa_fundo.jpg";

function Profissional() {

  // Cria a função navigate para trocar de página ao clicar
  const navigate = useNavigate();

  // Cria um componente "Card" dentro do próprio Profissional
  // Ele recebe 3 props: titulo, descricao e destino
  // Isso evita ter que repetir o mesmo bloco de div+p+p várias vezes
  const Card = ({ titulo, descricao, destino }) => (
    <div
      // Ao clicar no card, navega para a rota recebida em "destino"
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

      {/* Mostra a descrição recebida por prop */
       /* Props são argumentos que passa de você passa para um componente, 
       igual passar argumentos para uma função. 
       Eles permitem reaproveitar o mesmo componente com dados diferentes, 
       em vez de criar um componente novo para cada variação. */}
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

    // Div principal com imagem de fundo ocupando a tela toda
    // Usa template string (crases) para inserir a variável "fundo" dentro do url()
    <div
      style={{
        backgroundImage: `url(${fundo})`,
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
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 16px",
          gap: "16px",
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

        {/* Em vez de escrever a div inteira de novo,
            cada card chama o componente Card passando
            apenas as informações diferentes (titulo, descricao, destino) */}

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

        {/* Novo card de Assinatura, criado do mesmo jeito que os outros */}
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