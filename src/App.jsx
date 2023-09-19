import { Outlet } from "react-router-dom";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
