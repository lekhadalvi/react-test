import AddHire from "./components/AddHire";
import HireList from "./components/HireList";

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>React + TanStack Query App</h1>
      <AddHire />
      <HireList />
    </div>
  );
};

export default App;
