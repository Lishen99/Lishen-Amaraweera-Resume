import { Poppins } from 'next/font/google';
import './globals.css';
import ParticlesBackground from '../components/ParticlesBackground';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata = {
  title: "Lishen's Resume",
  description: 'The resume of Lishen Madusha Amaraweera',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}