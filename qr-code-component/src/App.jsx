import "./generated-styles.css";
import Card from "@/components/card";
import info from "@/data";

const App = () => {
  return (
    <main>
      <Card info={info} />
    </main>
  );
};

export default App;
