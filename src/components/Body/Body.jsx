import React, { createRef, useState } from "react";
import "./Body.css";
import Mainshot from "./Mainshot/Mainshot";
import Appbar from "./Appbar/Appbar";
import { atomDark,darcula,dracula,duotoneDark,okaidia,nord,materialDark,tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useScreenshot, createFileName  } from "use-react-screenshot";
const Body = () => {
  // image title
  const [title, setTitle] = useState('codepic');

  // code screenshot
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/png",
    quality: 2.0,
  });

  // image dowenload
  const download = (image, { name = title, extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const getImage = () => takeScreenShot(ref.current).then(download);
 
  // code show state
  const [showCodeArea, setShowCodeArea] = useState(false);
  const [value, setValue] = useState('');
  const changeHanlder = (e) => {
      setValue(e.target.value);
  }

  // for theme item
  const [theme, setTheme] = useState("atomDark");
  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  // for language
  const [language, setLanguage] = useState("jsx");
  const handleLanChange = (event) => {
    setLanguage(event.target.value);
  };

  // for background color
  const [bg, setBg] = useState("linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #5826d8 100%)");
  const handleBgChange = (event) => {
    setBg(event.target.value);
  };

  // for code padding
  const [padding, setPadding] = useState('40px');
  // theme hunt code
  let initialTheme = materialDark;
  if(theme === 'atomDark') {
    initialTheme = atomDark;
  }else if(theme === 'darcula'){
    initialTheme = darcula;
  }else if(theme === 'dracula'){
    initialTheme = dracula;
  }else if(theme === 'duotoneDark'){
    initialTheme = duotoneDark;
  }else if(theme === 'okaidia'){
    initialTheme = okaidia;
  }
  else if(theme === 'materialDark'){
    initialTheme = materialDark;
  }
  else if(theme === 'tomorrow'){
    initialTheme = tomorrow;
  }
  else{
    initialTheme = nord;
  }


  // for resize 
  const [dwidth, setDwidth] = useState(45);
  const handleChangeStart = () => {
    console.log('Change event started')
  };

  const handleSliderChange = value => {
    setDwidth(value);
  };

  const handleChangeComplete = () => {
    console.log('Change event completed')
  };
  return (
    <>
      <section className="app-body-area" >
       {
         showCodeArea ? (
          <div className="app-body-inner">
          <Appbar
            themeData={{ theme, setTheme, handleChange }}
            languageData={{ language, setLanguage, handleLanChange }}
            bgData={{ bg, setBg, handleBgChange }}
            screenshot={getImage}
            pad = {{padding, setPadding}}
            rangeSlider = {{dwidth, handleChangeStart,handleSliderChange , handleChangeComplete}}
          ></Appbar>

          <div ref={ref} style={{backgroundImage:bg, padding:padding, width:dwidth + '%'}} className="code-body">
            {/* <div onPointerMove={decreaseWidth} className="blink-left"></div>
            <div onAbort ={increaseWidth} className="blink-right"></div> */}
            <Mainshot theme={initialTheme} value={value} bg={bg} language={language} title={title} setTitle={setTitle} ></Mainshot>
          </div>
        </div>
         ) : (
           <div className='content-code'>
             <textarea onChange={changeHanlder} placeholder='write or paste code here' className='code' >
              </textarea>
           </div>
         )
       }
      </section>

      {value && <div>
      {!showCodeArea && <button onClick = {() => setShowCodeArea(true)} className='btn-submit'>Submit</button>}
      </div>}
    </>
  );
};

export default Body;