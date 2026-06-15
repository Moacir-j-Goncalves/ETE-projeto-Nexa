import { useState } from 'react';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';
import './sobre.css';

function Sobre() {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(
    'Esse estabelecimento está em funcionamento desde o ano X e tem como principal objetivo satisfazer os clientes e fazer nosso trabalho do melhor jeito possível.'
  );
  const [textoTemp, setTextoTemp] = useState(texto);

  function handleSalvar() {
    setTexto(textoTemp);
    setEditando(false);
  }

  function handleCancelar() {
    setTextoTemp(texto);
    setEditando(false);
  }

  return (
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu />
      <div className="sobre-container">
        <div className="sobre-card">

          <p className="sobre-label">ÁREA DO PROFISSIONAL</p>
          <h1 className="sobre-titulo">Sobre Nós</h1>

          <div className="sobre-divider">◆</div>

          <div className="sobre-texto">
            {editando ? (
              <textarea
                className="sobre-textarea"
                value={textoTemp}
                onChange={(e) => setTextoTemp(e.target.value)}
                rows={6}
              />
            ) : (
              <p>{texto}</p>
            )}
          </div>

          <div className="sobre-botoes">
            {editando ? (
              <>
                <button className="sobre-btn-salvar" onClick={handleSalvar}>Salvar</button>
                <button className="sobre-btn-cancelar" onClick={handleCancelar}>Cancelar</button>
              </>
            ) : (
              <button className="sobre-btn-editar" onClick={() => setEditando(true)}>Editar</button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sobre;