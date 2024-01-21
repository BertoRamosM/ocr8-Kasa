
import AppRoutes from "./Routes/AppRoutes";
import { DataProvider } from "./UseDataContext/UseDataContext";

function App() {
  return (
    <>
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </>
  );
}

export default App;
