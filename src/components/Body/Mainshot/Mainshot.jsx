import React, { useEffect } from "react";
import "./Mainshot.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Mainshot = ({ theme, value,bg, language, title, setTitle}) => {
 
  return (
    <>
      <section className="code-background" >
        <div className="code-bg-header">
        <div className="dots">
          <div className="dot-1"></div>
          <div className="dot-2" style={{backgroundImage: bg}} ></div>
          <div className="dot-3"></div>
        </div>

        <div className="input-area">
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
          <label htmlFor="title">.png</label>
        </div>
        </div>
        {/* pre here */}
        <SyntaxHighlighter className='codee'contentEditable={true} language={language} style={theme}>
      {value}
    </SyntaxHighlighter>
      </section>
    </>
  );
};

export default Mainshot;
