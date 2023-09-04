import { Metadata } from 'next';

import '$lib/styles/base/foundation.scss';
import '$styles/code/tomorrow.scss';

export const metadata: Metadata = { title: 'SQLiquor', icons: { icon: 'favicon.ico' } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preload' href='fonts/poppins/poppins-latin-400-normal.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='fonts/poppins/poppins-latin-500-normal.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
        <link rel='preload' href='fonts/poppins/poppins-latin-700-normal.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
      </head>
      <body>{children}</body>
    </html>
  );
}
