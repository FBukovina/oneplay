// pages/error-codes.js
import Link from 'next/link';

export default function ErrorCodesPage() {
  return (
    <div className="error-codes-page" style={{ padding: '20px' }}>
      <h1>Chybové kódy</h1>
      <p>Seznam častých chyb služby Oneplay:</p>
      <ul>
        <li><strong>Kód -9</strong> – Neznámá chyba aplikace.</li>
        <li><strong>Kód 5000</strong> – Interní chyba serveru.</li>
        <li><strong>Kód 5008</strong> – Chyba přehrávání obsahu.</li>
      </ul>
      <p>
        Sledujte aktuální stav služby Oneplay na{' '}
        <a href="https://downdetector.com/status/oneplay" target="_blank" rel="noopener noreferrer">
          Oneplay Downdetector
        </a>.
      </p>
      <p>
        <Link href="/">&#8592; Zpět na hlavní stránku</Link>
      </p>
    </div>
  );
}