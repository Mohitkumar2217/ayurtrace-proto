import BinScan from "./components/BinScan";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Smart Waste Platform</h1>
      <BinScan />
      <Dashboard />
    </div>
  );
}
