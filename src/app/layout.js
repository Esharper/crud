import { Inter } from "next/font/google";
import '../styles/globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="App">
          <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/management">Management</Link>
              </li>
            </ul>
          </nav>
          <div className="container mx-auto mt-8 flex-grow">
            {children}
          </div>
          <footer className="text-center mt-8">
            &copy; Elgin Sharper - Crud app
          </footer>
        </div>
      </body>
    </html>
  );
}
