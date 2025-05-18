import type { AppProps } from 'next/app'; // ✅ importe les types
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
