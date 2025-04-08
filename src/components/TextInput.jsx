import { Form } from 'react-bootstrap';

const TextInput = ({ text, setText }) => {
  return (
    <Form.Group className="mb-4">
      <Form.Label className="fw-bold mb-2">Entrez votre texte</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Écrivez quelque chose ici pour analyser son sentiment..."
        className="shadow-sm"
      />
      <Form.Text className="text-muted">
        Conseil : Plus le texte est détaillé, plus l'analyse sera précise.
      </Form.Text>
    </Form.Group>
  );
};

export default TextInput;