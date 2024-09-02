import { useState } from "react";

const Faq = ({ question, answer, header, border }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <details
        className={`${border === true ? "border-b border-l-lightPink" : "border-none"} block pb-2`}
      >
        <summary
          onClick={toggle}
          className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"
        >
          <span className="text-lg">{question}</span>
          <img src={open ? header.iconMinus : header.iconPlus} />
        </summary>
        <p className={`mt-2 transform text-grayishPurple`}>{answer}</p>
      </details>
    </>
  );
};

export default Faq;
