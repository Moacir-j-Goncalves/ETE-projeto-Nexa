import { useState } from 'react';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import Calendario from '../../Componentes/Calendario/Calendario2.js'; 
import Horarios2 from '../../Componentes/Horarios/index.js';
import './HorarioDoProfissional.css';


function HorarioDoProfissional() {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  return (
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu />
      <div className="horarios-page-container">
        <div className="horarios-page-card">

          <p className="horarios-page-label">ÁREA DO PROFISSIONAL</p>
          <h1 className="horarios-page-titulo">Horários de Atendimentos</h1>

          <div className="horarios-page-divider">◆</div>

          <Calendario onDataChange={setDataSelecionada} />

          <Horarios2 dataSelecionada={dataSelecionada} />

        </div>
      </div>
    </div>
  );
}

export default HorarioDoProfissional;