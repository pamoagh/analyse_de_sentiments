import { useState } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap';
import TextInput from './components/TextInput';
import AnalyzeButton from './components/AnalyzeButton';
import ResultBox from './components/ResultBox';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      alert('Veuillez entrer un texte à analyser');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment",
        {
          headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: text }),
        }
      );
      
      const result = await response.json();
      const score = parseFloat(result[0][0].label.split(' ')[0]);
      if (score >= 4) {
        setSentiment('positive');
      } else if (score <= 2) {
        setSentiment('negative');
      } else {
        setSentiment('neutral');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue lors de l\'analyse');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-background">
      <Container className="py-5">
        <Card className="shadow-lg border-0 rounded-lg">
          <Card.Body className="p-5">
            <h1 className="text-center mb-4 text-primary fw-bold">
              <span className="emoji">🎭</span> Analyse de Sentiment
            </h1>
            <TextInput text={text} setText={setText} />
            <AnalyzeButton onAnalyze={handleAnalyze} disabled={loading} />
            {loading && (
              <div className="text-center mt-3">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </Spinner>
              </div>
            )}
            {sentiment && !loading && <ResultBox sentiment={sentiment} />}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
