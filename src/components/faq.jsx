const Faq = ({ data }) => {
  const faqs = data.faqs;
  const header = data.header;
  return (
    <>
      <main>
        <img src={header.iconStar} />
        <h1>{header.h1}</h1>
        <article>
          {faqs.map((i, index) => (
            <details key={index}>
              <summary>
                {i.question} <img src={header.iconPlus} />
                <img src={header.iconMinus} />
              </summary>
              <p>{i.answer}</p>
            </details>
          ))}
        </article>
      </main>
    </>
  );
};

export default Faq;
