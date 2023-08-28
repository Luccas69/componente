import { useState } from 'react';
import styles from './styles.module.css';

export default function Caixa() {
  const [feedbackEnviado, setFeedbackEnviado] = useState(false);

  const handleFeedback = (feedback) => {
    setFeedbackEnviado(true);
  };

  const handleVoltar = () => {
    setFeedbackEnviado(false);
  };

  return (
    <div className={styles.caixa}>
      {feedbackEnviado ? (
        <div>
          <h1 className={styles.titulo}>Obrigado pelo feedback!</h1>
          <p>Você pode voltar ao estado anterior clicando no botão abaixo:</p>
          <button className={styles.botao_voltar} onClick={handleVoltar}>
            Voltar
          </button>
        </div>
      ) : (
        <div>
          <h1 className={styles.titulo}>Esse conteúdo foi útil?</h1>
          <button
            className={styles.botao_sim}
            onClick={() => handleFeedback('sim')}
          >
            😄 Sim
          </button>
          <button
            className={styles.botao_nao}
            onClick={() => handleFeedback('não')}
          >
            😢 Não
          </button>
        </div>
      )}
    </div>
  );
}
