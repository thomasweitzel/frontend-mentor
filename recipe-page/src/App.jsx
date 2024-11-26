import "./generated-styles.css";
import Card from "@/components/card";
import recipe from "@/data";

const App = () => {
  return <Card recipe={recipe} />;
};

export default App;
