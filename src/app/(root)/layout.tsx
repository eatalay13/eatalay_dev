import Footer from "@/components/footer";
import Header from "@/components/header";

interface RootHomeProps extends Readonly<{
  children: React.ReactNode;
}> { };

function RootHomeLayout({ children }: RootHomeProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white flex flex-col font-sans  min-h-screen antialiased leading-normal tracking-normal overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default RootHomeLayout;