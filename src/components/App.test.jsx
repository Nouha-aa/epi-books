import Welcome from "./Welcome";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";
import CommentArea from "./CommentArea";
import { render, screen, fireEvent } from "@testing-library/react";
import AddComment from "./AddComment";

test('il componente Welcome viene renderizzato correttamente?', () => {
    render(<Welcome />);
    const welcomeText = screen.getByText('Embark on a Literary Adventure')
    expect(welcomeText).toBeInTheDocument()
});

//secondo test
test('numero delle card pari al numero dei libri in array', async () => {
    render(<App />)
    const nCard = await screen.findAllByTestId('cards');
    expect(nCard).toHaveLength(150)
});

//terzo test 
test('renderizzazione del componente commentArea', () => {
    const mockAsin = '123456';
    const { getByTestId } = render(<CommentArea asin={mockAsin} />);
  
    const commentAreaElement = getByTestId('comment-area');
  
    expect(commentAreaElement).toBeInTheDocument();
  }); 

//non è richiesto ma già che ci sono testo anche AddComment e CommentArea
test('renders AddComment component within CommentArea', () => {
    const mockAsin = '123456';
    const { getByTestId } = render(<CommentArea asin={mockAsin} />);
  
    const addCommentElement = getByTestId('add-comment');
    expect(addCommentElement).toBeInTheDocument();
  });

test('renders CommentList component within CommentArea', () => {
    const mockAsin = '123456';
    const { getByTestId } = render(<CommentArea asin={mockAsin} />);

    const commentListElement = getByTestId('comment-list');
    expect(commentListElement).toBeInTheDocument();
  });

//test 4
test("filtra gli utenti in base alla ricerca", async () => {
    // Renderizzo il componente app
    render(<App />);
  
    // Uso screen.getByPlaceholderText per trovare l'input di ricerca tramite il suo placeholder
    const searchInput = screen.getByPlaceholderText("Book's Title...");
  
    // L'oggetto { target: { value: 'Edge of Eternity' } } simula l'oggetto evento di un input
    fireEvent.change(searchInput, { target: { value: "Edge of Eternity" } });
  
    // Cerchiamo tutti gli elementi "cards" filtrati dopo l'input di ricerca
    const filteredUserItems = await screen.findAllByTestId("cards");
  
    // Verifichiamo che ci sia un solo elemento "cards" filtrato
    expect(filteredUserItems).toHaveLength(1);
  
    // Verifichiamo che l'unico elemento "cards" filtrato contenga il testo "Edge of Eternity"
    expect(screen.getByText("Edge of Eternity")).toBeInTheDocument();
  });

//test 5
test("seleziona un utente al click", async () => {
    // Renderizziamo il componente app
    render(<App />);
  
    // Cerchiamo l'elemento "userItem" che contiene l'id "cards"
    const userItem = await screen.findAllByTestId("cards"); 
  
    // Simuliamo un click sull'elemento "userItem"
    fireEvent.click(userItem[0]);
  
    // Verifichiamo che l'elemento "userItem" abbia la classe CSS "border: 2px solid red"
    expect(userItem[0]).toHaveStyle("border: 2px solid red");
  });

//test 6  
  test("verifico che al click della seconda card si toglie il bordo della prima card cliccata", async () => {
    render(<App />);
  
    // Trova le card
    const cards = await screen.findAllByTestId("cards");
    
    const primaCard = cards[0];
    const secondaCard = cards[1];
  
    // Simula il click sulla prima card
    fireEvent.click(primaCard);
  
    // Verifica che il bordo della prima card sia rosso
    expect(primaCard).toHaveStyle('border: 2px solid red');
  
    // Simula il click sulla seconda card
    fireEvent.click(secondaCard);
  
    // Verifica che il bordo della aa card sia rosso
    expect(secondaCard).toHaveStyle('border: 2px solid red');
  
    // Verifica che il bordo della prima card non sia più rosso
    expect(primaCard).not.toHaveStyle('border: 2px solid red');
  });


//test 7
test("Nessuna istanza di SingleComment nel DOM all'avvio della pagina", () => {
    render(<App />);
  
    const singleCommentElements = screen.queryAllByTestId("single-comment");
    expect(singleCommentElements).toHaveLength(0);
  });


//test 8
test('renderizzazione del componente commentArea', () => {
    const mockAsin = '123456';
    const { getByTestId } = render(<CommentArea asin={mockAsin} />);
  
    const commentAreaElement = getByTestId('comment-area');
  
    expect(commentAreaElement).toBeInTheDocument();
  }); 
 

