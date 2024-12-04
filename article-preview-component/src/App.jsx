import "./generated-styles.css";
import Product from "@/components/product";
import product from "@/data";

const App = () => {
  return <Product product={product} />;
};

export default App;
