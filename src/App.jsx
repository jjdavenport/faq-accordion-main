import Faq from "./components/faq";
import data from "./components/assets/data.json";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Faq data={data} />
      <Footer />
    </>
  );
}

export default App;
