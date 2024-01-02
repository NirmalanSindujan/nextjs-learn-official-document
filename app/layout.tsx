import '@/app/ui/global.css'; 
import { inter } from '@/app/ui/fonts';
import { Poppins } from 'next/font/google';
import { lusitana } from '@/app/ui/fonts';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
