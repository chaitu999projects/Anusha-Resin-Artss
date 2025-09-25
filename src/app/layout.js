
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: "Sonalisinghrao Resin Arts",
  description: "Sonalisinghrao Resin Arts & Crafts",
  icons: {
    icon: '/Sonalisingh-logo.png'
  }
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
