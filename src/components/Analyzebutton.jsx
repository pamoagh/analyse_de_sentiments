import { Button, Spinner } from 'react-bootstrap';

const AnalyzeButton = ({ onAnalyze, disabled }) => {
  return (
    <div className="text-center mb-4">
      <Button 
        variant="primary" 
        onClick={onAnalyze}
        disabled={disabled}
        size="lg"
        className="px-5 py-2 shadow"
      >
        {disabled ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Analyse en cours...
          </>
        ) : (
          <>
            <span role="img" aria-label="magic" className="me-2">✨</span>
            Analyser le sentiment
          </>
        )}
      </Button>
    </div>
  );
};

export default AnalyzeButton;  