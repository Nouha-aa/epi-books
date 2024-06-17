import React from 'react';
import { Button } from 'react-bootstrap';

export default function About({ search }) {
  return (
    <div className="about-container">
      {/* Versione in Italiano */}
      <div className="about-section">
        <h2>Viaggia attraverso le Pagine:</h2>
        <p>
          Questo sito è dedicato agli amanti dei libri di ogni genere. Esplora la nostra vasta collezione di libri, tra cui Fantasy, Storia, Horror, Romance e Sci-Fi.
          Puoi cercare libri, visualizzare i dettagli, lasciare commenti e scoprire consigli basati sui tuoi interessi letterari.
        </p>
      </div>

      {/* Versione in Francese */}
      <div className="about-section">
        <h2>Voyage à travers les Pages</h2>
        <p>
          Ce site est dédié aux amateurs de livres de tous genres. Explorez notre vaste collection de livres, y compris Fantasy, Histoire, Horreur, Romance et Science-Fiction. 
          Vous pouvez rechercher des livres, afficher les détails, laisser des commentaires et découvrir des recommandations basées sur vos intérêts littéraires.
        </p>
      </div>

      {/* Versione in Arabo */}
      <div className="about-section">
        <h2>:اسافر عبر الصفحات</h2>
        <p>
          هذا الموقع مخصص لعشاق الكتب من جميع الأنواع.
          استكشف مجموعتنا الواسعة من الكتب، بما في ذلك الخيال، التاريخ، الرعب، الرومانسية، والخيال العلمي. يمكنك البحث عن الكتب، عرض التفاصيل، ترك التعليقات، واكتشاف التوصيات بناءً على اهتماماتك الأدبية.
        </p>
      </div>
      <Button variant="dark" className="mt-3" onClick={() => window.history.back()}>
          Back to Books
      </Button>
    </div>
  );
}
