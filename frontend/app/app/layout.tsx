import '$lib/styles/index.css';

export const metadata = { title: 'SQL Game Demo' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
