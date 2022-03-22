import React, { useState } from "react";

const Highlighter = () => {
  const [texts, setTexts] = useState("");

  const handleChange = (e) => {
    setTexts(e.target.value);
  };

  const handleSearch = (e) => {
    //     const regex = new RegExp(^${e.target.value}, "gi");
    let cleansed = texts.replace("<mark>", "").replace("</mark>", "");

      const matchEl = cleansed.match(e.target.value)?.toString();
    const test = cleansed.replace(matchEl, `<mark>${matchEl}</mark>`);
    setTexts(test);
    console.log(cleansed.join(""), "test");

    //    console.log(texts.replace(matchEl, <mark>${matchEl}</mark>))
  };

  return (
    <>
      <textarea onChange={handleChange} data-testid="source-text" />
      <input onChange={handleSearch} data-testid="search-term" />
      <input type="checkbox" data-testid="case-sensitive" />
      <div data-testid="result">
        <div dangerouslySetInnerHTML={{ __html: texts }} />
      </div>
    </>
  );
};

export default Highlighter;
