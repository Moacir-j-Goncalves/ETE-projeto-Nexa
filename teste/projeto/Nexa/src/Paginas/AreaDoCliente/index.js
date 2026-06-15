import { useNavigate } from 'react-router-dom';
import Menu from '../../Componentes/Menu/index.js';
import fundo from '../../Componentes/Imagens/nexa_fundo.jpg';

function AreaDoCliente() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: "url(" + fundo + ")", backgroundSize: 'cover', minHeight: '100vh' }}>
      <Menu />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 16px', gap: '16px' }}>
        <h2 style={{ color: '#fdf6f0', fontFamily: 'serif', fontSize: '28px' }}>Área do Cliente</h2>
        <div onClick={() => navigate('/editar-perfil')} style={{ background: '#fdf6f0', borderRadius: '16px', padding: '24px 32px', width: '100%', maxWidth: '420px', cursor: 'pointer' }}>
          <p style={{ color: '#3d0c0c', fontSize: '18px', fontFamily: 'serif', margin: 0 }}>Editar Perfil</p>
          <p style={{ color: '#9e6b6b', fontSize: '13px', margin: '4px 0 0' }}>Altere suas informações pessoais</p>
        </div>
        <div onClick={() => navigate('/meus-agendamentos')} style={{ background: '#fdf6f0', borderRadius: '16px', padding: '24px 32px', width: '100%', maxWidth: '420px', cursor: 'pointer' }}>
          <p style={{ color: '#3d0c0c', fontSize: '18px', fontFamily: 'serif', margin: 0 }}>Meus Agendamentos</p>
          <p style={{ color: '#9e6b6b', fontSize: '13px', margin: '4px 0 0' }}>Consulte seus agendamentos</p>
        </div>
      </div>
    </div>
  );
}

export default AreaDoCliente;


