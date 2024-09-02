import Faq from "./components/faq";
import data from "./components/assets/data.json";
import Footer from "./components/footer";

function App() {
  const faqs = data.faqs;
  const header = data.header;
  return (
    <>
      <div className="bg-mobile md:bg-deskop flex h-full min-h-screen flex-col justify-between bg-lightPink bg-contain bg-top bg-no-repeat font-custom text-base text-darkPurple">
        <div className="flex flex-1 items-center justify-center p-4">
          <main className="flex w-full flex-col gap-8 rounded-xl bg-white p-8 md:w-[600px] md:max-w-screen-md">
            <div className="flex items-center gap-4">
              <img className="h-8 w-8" src={header.iconStar} />
              <h1 className="text-5xl font-bold">{header.h1}</h1>
            </div>
            <article className="flex flex-col gap-2">
              {faqs.map((i, index) => (
                <Faq
                  key={index}
                  question={i.question}
                  answer={i.answer}
                  header={header}
                  border={i.border}
                />
              ))}
            </article>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
