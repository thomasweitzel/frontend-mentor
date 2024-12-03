import "./generated-styles.css";
import Testimonials from "@/components/testimonials";
import testimonials from "@/data";

const App = () => {
  return <Testimonials testimonials={testimonials} />;
};

export default App;
