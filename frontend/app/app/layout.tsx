import { Metadata } from 'next';

import '$lib/styles/base/foundation.scss';

export const metadata: Metadata = { title: 'SQLiquor', icons: { icon: 'favicon.ico' } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
