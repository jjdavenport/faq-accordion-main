import { useState } from "react";

const Faq = ({ question, answer, header }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <details>
        <summary
          onClick={toggle}
          className="list-none flex items-center justify-between cursor-pointer"
        >
          <span>{question}</span>
          <img src={open ? header.iconMinus : header.iconPlus} />
        </summary>
        <p>{answer}</p>
      </details>
    </>
  );
};

export default Faq;
