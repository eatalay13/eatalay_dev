import Footer from "@/components/Footer";
import PalestineBanner from "@/components/layout/PalestineBanner";
import Navbar from "@/components/Navbar";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <PalestineBanner />
    </>
  );
}
