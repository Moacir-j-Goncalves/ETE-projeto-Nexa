// Importa o useState para guardar e atualizar a lista de agendamentos
import { useState } from 'react';

// Importa o componente Menu (barra de navegação)
// Caminho diferente da versão anterior: agora vem de Componentes/Menu/index.js
import Menu from '../../Componentes/Menu/index.js';

// Importa a imagem de fundo
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

// Importa o arquivo de estilos da página
import './atendimentos.css';

function Atendimentos() {

  // Cria o estado com a lista de agendamentos
  // Cada agendamento tem: id, data, serviço e status
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, data: '23/05/2026 - 14:00', servico: 'Corte de cabelo', status: 'confirmado' },
    { id: 2, data: '30/05/2026 - 10:00', servico: 'Manicure', status: 'pendente' },
  ]);

  // Guarda o id do agendamento que está aguardando confirmação de cancelamento
  // null significa que nenhum está sendo cancelado no momento
  const [confirmarId, setConfirmarId] = useState(null);

  // Função que cancela o agendamento removendo ele da lista
  // filter cria uma nova lista mantendo só os agendamentos com id diferente do clicado
  function handleCancelar(id) {
    setAgendamentos(agendamentos.filter(a => a.id !== id));
    setConfirmarId(null); // Fecha a confirmação após cancelar
  }

  return (

    // Div principal com imagem de fundo ocupando a tela toda
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>

      {/* Renderiza a barra de menu no topo */}
      <Menu/>

      {/* Container que centraliza o card na tela */}
      <div className="agendamentos-container">
        <div className="agendamentos-card">

          {/* Label e título da página */}
          <p className="agendamentos-label">ÁREA DO PROFISSIONAL</p>
          <h1 className="agendamentos-titulo">Meus Atendimentos</h1>

          {/* Divisor decorativo */}
          <div className="agendamentos-divider">◆</div>

          {/* Mostra mensagem se não houver nenhum agendamento na lista */}
          {agendamentos.length === 0 && (
            <p style={{ color: '#9e6b6b', textAlign: 'center' }}>Nenhum agendamento encontrado.</p>
          )}

          {/* Percorre a lista e renderiza um card para cada agendamento */}
          {agendamentos.map(a => (
            <div className="agendamento-item" key={a.id}>

              {/* Mostra a data do agendamento */}
              <p className="agendamento-data">{a.data}</p>

              {/* Mostra o serviço do agendamento */}
              <p className="agendamento-servico">{a.servico}</p>

              {/* Badge de status: aplica classe "confirmado" ou "pendente"
                  Note o espaço dentro da string antes de a.status,
                  garantindo que as duas classes fiquem separadas:
                  ex: "agendamento-status confirmado" */}
              <span className={"agendamento-status " + a.status}>
                {a.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
              </span>

              {/* Se esse agendamento está aguardando confirmação de cancelamento */}
              {confirmarId === a.id ? (
                <div className="confirmar-cancelamento">
                  <p>Deseja cancelar este atendimento?</p>
                  {/* Confirma o cancelamento chamando handleCancelar */}
                  <button className="btn-sim" onClick={() => handleCancelar(a.id)}>Sim, cancelar</button>
                  {/* Volta atrás sem cancelar */}
                  <button className="btn-nao" onClick={() => setConfirmarId(null)}>Não</button>
                </div>
              ) : (
                // Botão que abre a confirmação de cancelamento para esse agendamento
                <button className="btn-cancelar" onClick={() => setConfirmarId(a.id)}>
                  Cancelar atendimento
                </button>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

// Exporta o componente para ser usado no App.js
export default Atendimentos;