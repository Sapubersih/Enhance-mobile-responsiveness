import ResponsiveLayout from "./components/ResponsiveLayout";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <ResponsiveLayout>
      <Navbar />

      <h1>Responsive UI Demo</h1>
      <p>This layout adapts to mobile, tablet, and desktop</p>

      <CardGrid />
    </ResponsiveLayout>
  );
}

export default App;
