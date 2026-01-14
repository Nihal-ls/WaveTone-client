import Navbar from "@/components/Root/Navbar";
import Footer from "@/components/Root/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
