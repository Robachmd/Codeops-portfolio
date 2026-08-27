import Menu from "./Menu/Menu";
import SideBar from "./SideBar/SideBar";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <SideBar/>
      <Menu />
    </main>
  );
}

export default Main;