import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import './PerfilSalao.css';

// Imagens dos perfis
import studioBellaImg from '../../Componentes/Imagens/Studiobella.jpg';
import espacoGlamourImg from '../../Componentes/Imagens/EspacoGlamour.jpg';
import beautyCenterImg from '../../Componentes/Imagens/BeautyCenter.jpg';
import guilhermeMendesImg from '../../Componentes/Imagens/GuilhermeMendes.jpg';

const saloes = {
  1: {
    nome: 'Studio Bella',
    foto: studioBellaImg,
    descricao: 'Salão especializado em cortes modernos, coloração e tratamentos capilares...',
    categoria: 'Salão de Beleza',
    cidade: 'Recife - PE',
    distancia: '1.2 km',
    avaliacao: 4.9,
    totalAvaliacoes: 128,
    servicos: ['Corte feminino', 'Coloração', 'Hidratação', 'Escova progressiva', 'Manicure', 'Pedicure'],
    avaliacoes: [
      { nome: 'Ana Paula', nota: 5, comentario: 'Atendimento incrível!' },
      { nome: 'Juliana M.', nota: 5, comentario: 'Melhor salão de Recife.' },
      { nome: 'Carla S.', nota: 4, comentario: 'Ambiente muito agradável.' },
    ],
  },
  2: {
    nome: 'Guilherme Mendes',
    foto: guilhermeMendesImg,
    descricao: 'Personal trainer certificado, especialista em emagrecimento e hipertrofia...',
    categoria: 'Academia',
    cidade: 'Recife - PE',
    distancia: '2.5 km',
    avaliacao: 4.8,
    totalAvaliacoes: 95,
    servicos: ['Musculação', 'Treino funcional', 'Emagrecimento', 'Treino online', 'Avaliação física'],
    avaliacoes: [
      { nome: 'Fernanda L.', nota: 5, comentario: 'Resultados incríveis em 3 meses.' },
      { nome: 'Bianca T.', nota: 4, comentario: 'Pontual e dedicado.' },
    ],
  },
  3: {
    nome: 'Beauty Center',
    foto: beautyCenterImg,
    descricao: 'Centro de beleza completo com os melhores profissionais da região...',
    categoria: 'Centro de Beleza',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 5.0,
    totalAvaliacoes: 214,
    servicos: ['Corte masculino', 'Barba', 'Coloração', 'Tratamento capilar', 'Spa dos pés', 'Nail art'],
    avaliacoes: [
      { nome: 'Roberto A.', nota: 5, comentario: 'Perfeito em tudo!' },
      { nome: 'Tatiane B.', nota: 5, comentario: 'Atendimento impecável.' },
      { nome: 'Marcos V.', nota: 5, comentario: 'O melhor da cidade.' },
    ],
  },
  4: {
    nome: 'LUMOS BEAUTY SPA',
    foto: espacoGlamourImg,
    descricao: 'O Lumos Beauty Spa é mais do que um ambiente, é uma experiência...',
    categoria: 'Estética',
    cidade: 'Recife - PE',
    distancia: '3.8 km',
    avaliacao: 5.0,
    totalAvaliacoes: 214,
    servicos: ['Spa', 'Beleza', 'Tratamento Facial', 'Tratamento capilar', 'Spa dos pés', 'Relaxar'],
    avaliacoes: [
      { nome: 'Rodrigo A.', nota: 5, comentario: 'Perfeito em tudo!' },
      { nome: 'Talita S.', nota: 5, comentario: 'Sempre saio satisfeita.' },
      { nome: 'Jefferson', nota: 5, comentario: 'O melhor da cidade.' },
    ],
  },
};

function estrelas(nota) {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color: i < Math.round(nota) ? '#c0392b' : '#ddd', fontSize: '16px' }}>★</span>
  ));
}

export default function PerfilSalao() {
  const navigate = useNavigate();
  const { id } = useParams(); // pega o id da URL
  const salao = saloes[id] || saloes[1];

  return (
    <div style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu />
      <div className="perfil-salao-container">
        <div className="perfil-salao-card">

          {/* Foto */}
          <img src={salao.foto} alt={salao.nome} className="perfil-salao-foto" />

          {/* Nome e categoria */}
          <h1 className="perfil-salao-nome">{salao.nome}</h1>
          <p className="perfil-salao-categoria">{salao.categoria} • {salao.cidade} • {salao.distancia}</p>

          {/* Avaliação geral */}
          <div className="perfil-salao-avaliacao-geral">
            {estrelas(salao.avaliacao)}
            <span className="perfil-salao-nota">{salao.avaliacao}</span>
            <span className="perfil-salao-total">({salao.totalAvaliacoes} avaliações)</span>
          </div>

          <div className="perfil-salao-divider">◆</div>

          {/* Descrição */}
          <p className="perfil-salao-descricao">{salao.descricao}</p>

          <div className="perfil-salao-divider">◆</div>

          {/* Serviços */}
          <h2 className="perfil-salao-secao-titulo">Serviços</h2>
          <div className="perfil-salao-servicos">
            {salao.servicos.map((s) => (
              <span key={s} className="perfil-salao-servico-tag">{s}</span>
            ))}
          </div>

          <div className="perfil-salao-divider">◆</div>

          {/* Avaliações */}
          <h2 className="perfil-salao-secao-titulo">Avaliações</h2>
          <div className="perfil-salao-avaliacoes">
            {salao.avaliacoes.map((a, i) => (
              <div key={i} className="perfil-salao-avaliacao-card">
                <div className="perfil-salao-avaliacao-header">
                  <span className="perfil-salao-avaliacao-nome">{a.nome}</span>
                  <span>{estrelas(a.nota)}</span>
                </div>
                <p className="perfil-salao-avaliacao-comentario">{a.comentario}</p>
              </div>
            ))}
          </div>

          {/* Botão agendar */}
          <button className="perfil-salao-btn" onClick={() => navigate('/agendamento')}>
            AGENDAR AGORA
          </button>

        </div>
      </div>
    </div>
  );
}
