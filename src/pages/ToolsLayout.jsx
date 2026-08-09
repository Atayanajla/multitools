import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const ToolsLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ToolsLayout
