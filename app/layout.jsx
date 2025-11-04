import "./globals.css";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={`17xl:flex 17xl:justify-center ${roboto.className}`}>
        <div className="17xl:max-w-[1512px]">{children}</div>
      </body>
    </html>
  );
}
