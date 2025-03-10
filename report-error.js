// pages/report-error.js
import { useState } from 'react';
import Link from 'next/link';

export default function ReportErrorPage() {
  const [odeslano, setOdeslano] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Chyba odeslána');
    setOdeslano(true);
  }

  return (
    <div className="report-error-page" style={{ maxWidth: '600px', margin: '20px auto', padding: '0 20px' }}>
      <h1>Nahlásit chybu</h1>
      {odeslano ? (
        <p style={{ color: 'lightgreen', fontWeight: 'bold' }}>
          Děkujeme, chyba byla odeslána.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Název chyby:<br />
              <input type="text" name="nazev" required />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Číselný kód chyby:<br />
              <input type="number" name="kod" required />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Popis problému:<br />
              <textarea name="popis" rows="4" required></textarea>
            </label>
          </div>
          <button type="submit">Odeslat</button>
        </form>
      )}
      <p style={{ marginTop: '20px' }}>
        <Link href="/">&#8592; Zpět na hlavní stránku</Link>
      </p>
    </div>
  );
}