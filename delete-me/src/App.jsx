import { Outlet } from "react-router-dom";
import { SideBar } from "./components";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <div className="d-flex">
      <div className="col-2 p-0" style={{ height: "100vh" }}>
        <SideBar />
      </div>
      <div className="col-10 p-0">
        <div className="d-flex flex-column w-100 p-0 m-0">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
