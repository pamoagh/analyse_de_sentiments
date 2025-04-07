import { Alert } from 'react-bootstrap';

const ResultBox = ({ sentiment }) => {
  const getSentimentInfo = () => {
    switch(sentiment) {
      case 'positive':
        return {
          variant: 'success',
          emoji: '😊',
          title: 'Sentiment Positif',
          description: 'Le texte exprime des émotions positives et optimistes.'
        };
      case 'negative':
        return {
          variant: 'danger',
          emoji: '😔',
          title: 'Sentiment Négatif',
          description: 'Le texte exprime des émotions négatives ou pessimistes.'
        };
      case 'neutral':
        return {
          variant: 'info',
          emoji: '😐',
          title: 'Sentiment Neutre',
          description: 'Le texte exprime une opinion neutre ou objective.'
        };
      default:
        return {
          variant: 'warning',
          emoji: '🤔',
          title: 'Indéterminé',
          description: 'Le sentiment n\'a pas pu être déterminé.'
        };
    }
  };

  const info = getSentimentInfo();

  return (
    <Alert 
      variant={info.variant} 
      className="mt-4 shadow-sm border-0 text-center"
    >
      <Alert.Heading className="d-flex align-items-center justify-content-center gap-2">
        <span role="img" aria-label="sentiment" style={{ fontSize: '1.5em' }}>
          {info.emoji}
        </span>
        {info.title}
      </Alert.Heading>
      <p className="mb-0">{info.description}</p>
    </Alert>
  );
};

export default ResultBox;