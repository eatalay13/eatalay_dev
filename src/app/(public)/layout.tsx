import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/lib/Providers";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <Providers>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </Providers>
  );
}
