import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-primary text-primary ">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;