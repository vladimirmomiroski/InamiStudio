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
      </main>
    </>
  );
};

export default ClientLayout;