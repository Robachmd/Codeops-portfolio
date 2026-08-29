import { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Menu from "./Menu/Menu";
import './Main.css'
function Main() {
  const [total, setTotal] = useState(0);

  function handleAdd(price) {
    setTotal((prevTotal) => prevTotal + price);
  }

  return (
    <main className="main">
      <SideBar total={total} />
      <Menu onAdd={handleAdd} />
    </main>
  );
}

export default Main;