export default App;
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./components/Menu";

export function AppRouter() {
  return (
    <>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>     
    </>
  );
}

export function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}