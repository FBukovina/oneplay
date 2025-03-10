// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="homepage">
      <header style={{ padding: '20px 0', textAlign: 'center' }}>
        <Image src="/logo.png" alt="Oneplay Logo" width={150} height={50} className="logo" />
      </header>
      <main style={{ padding: '0 20px', textAlign: 'center' }}>
        <h1>Toto je parodie na Oneplay :D</h1>
        <p>
          Oneplay je nová služba, která spojuje O2 TV a Voyo. Nabízím <strong>televizní kanály</strong>, rozsáhlou knihovnu <strong>filmů a seriálů</strong> 
          i exkluzivní <strong>sportovní přenosy</strong>.
        </p>
        <h2>Ceník předplatného</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>💳 <strong>Komfort</strong> – 199 Kč/měsíc</li>
          <li>💳 <strong>Extra Zábava</strong> – 399 Kč/měsíc</li>
          <li>💳 <strong>Extra Sport</strong> – 599 Kč/měsíc</li>
          <li>💳 <strong>Maximum</strong> – 799 Kč/měsíc</li>
        </ul>
        <p><em>Služba spuštěna:</em> 10. března 2025</p>
        <nav style={{ marginTop: '30px' }}>
          <Link href="/error-codes">Chybové kódy</Link>
          {' | '}
          <Link href="/report-error">Nahlásit chybu</Link>
        </nav>
      </main>
    </div>
  );
}