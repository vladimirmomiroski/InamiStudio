import Footer from "./components/layout/footer/footer";
import Navbar from "./components/layout/navbar/navbar";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main>
        <Navbar/>
        {children}
        <Footer/>
      </main>
    </>
  );
};

export default ClientLayout;