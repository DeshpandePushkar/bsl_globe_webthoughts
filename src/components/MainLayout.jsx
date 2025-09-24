import NavHeader from "./NavHeader";
import Footer from "./Footer";
import { Layout } from "antd";

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh', overflow: 'hidden', backgroundColor: "white" }}>
      <NavHeader />
      <main>
        {children}
        <Footer />
      </main>

    </Layout >
  );
};

export default MainLayout;
