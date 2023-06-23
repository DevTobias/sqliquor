import '$lib/styles/base/foundation.scss';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'SQLiquor', icons: { icon: 'favicon.ico' } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
