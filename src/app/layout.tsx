import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

import { TokenProvider } from "@/modules/TokenProvider";
import getToken from "@/lib/api/utils/getToken";

async function Layout({ children }: { children: React.ReactNode }) {
  const token = await getToken();

  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body>
        <TokenProvider token={token}>
          <main className="w-full px-4 py-14">{children}</main>
        </TokenProvider>
      </body>
    </html>
  );
}

export default Layout;
