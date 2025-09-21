
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: "Anusha Resin Arts",
  description: "Anusha Resin Arts & Crafts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Loading />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
