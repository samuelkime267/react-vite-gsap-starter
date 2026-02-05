import { Route, Routes } from "react-router-dom";
import { pages } from "@/data/pages.data";
import { Header, Sidebar } from "@/components";

function App() {
  return (
    <div className="flex items-start justify-start relative w-full">
      <Sidebar />
      <div className="w-full flex items-start justify-start flex-col">
        <Header />
        <Routes>
          {pages.map(({ Component, path }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
