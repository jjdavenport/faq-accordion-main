import Faq from "./components/faq";
import data from "./components/assets/data.json";
import Footer from "./components/footer";

function App() {
  const faqs = data.faqs;
  const header = data.header;
  return (
    <>
      <main>
        <img src={header.iconStar} />
        <h1>{header.h1}</h1>
        <article>
          {faqs.map((i, index) => (
            <Faq
              key={index}
              question={i.question}
              answer={i.answer}
              header={header}
            />
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
