import SideBar from "./SideBar/SideBar";
import Menu from "./Menu/Menu";

import "./Main.css";

function Main({ search }) {
  return (
    <main className="main">
      <SideBar />

      <Menu search={search} />
    </main>
  );
}

export default Main;