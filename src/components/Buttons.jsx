import { Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function Buttons({ setType }) {
  const location = useLocation();

  // Verifica se siamo nella route per i dettagli del libro
  const showButtons =  location.pathname.startsWith('/details') || location.pathname === '/about' || location.pathname === '*';

  const handleClick = (genre) => {
    // Aggiorna il tipo di libri nel genitore
    setType(genre);
  };

  console.log('Current pathname:', location.pathname); // Verifica il percorso attuale

  return (
    <>
      {!showButtons && (
        <Container className='d-flex justify-content-center'>
          <Button variant="info" className='mx-2 my-3 rounded-3' onClick={() => handleClick('history')}>History</Button>
          <Button variant="info" className='mx-2 my-3 rounded-3' onClick={() => handleClick('fantasy')}>Fantasy</Button>
          <Button variant="info" className='mx-2 my-3 rounded-3' onClick={() => handleClick('horror')}>Horror</Button>
          <Button variant="info" className='mx-2 my-3 rounded-3' onClick={() => handleClick('romance')}>Romance</Button>
          <Button variant="info" className='mx-2 my-3 rounded-3' onClick={() => handleClick('scifi')}>Sci-Fi</Button>
        </Container>
      )}
    </>
  );
}


