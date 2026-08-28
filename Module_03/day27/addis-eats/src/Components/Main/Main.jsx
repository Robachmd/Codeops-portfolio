import Menu from "./Menu/Menu";
import SideBar from "./SideBar/SideBar";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <SideBar/>
      <Menu category="Main"/>
    </main>
  );
}

export default Main;