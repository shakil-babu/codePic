import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {HiOutlineSave} from 'react-icons/hi';
import Slider from 'react-rangeslider'

// Style selector 
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Appbar = ({ themeData, languageData, bgData, screenshot, pad, rangeSlider}) => {
  // selector style
  const classes = useStyles();
  // destructuring  data
  const { theme, setTheme, handleChange } = themeData;
  const { language, setLanguage, handleLanChange } = languageData;
  const { bg, setBg, handleBgChange } = bgData;
  const {padding, setPadding} = pad;
  const {dwidth, handleChangeStart,handleSliderChange , handleChangeComplete} = rangeSlider ;
  return (
    <>
      <section className="appbar-area">
        <div className="app-bar-inner">
          <div className="flex-items">
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Theme</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={theme}
              onChange={handleChange}
            >
              <MenuItem value="atomDark">
                <div className="flex">
                  <div className="style atom-dark"></div> <h4>Atom-dark</h4>
                </div>
              </MenuItem>
              <MenuItem value="darcula">
                <div className="flex">
                  <div className="style darcula"></div> <h4>Darcula</h4>
                </div>
              </MenuItem>

              <MenuItem value="dracula">
                <div className="flex">
                  <div className="style dracula"></div> <h4>Dracula</h4>
                </div>
              </MenuItem>

              <MenuItem value="duotoneDark">
                <div className="flex">
                  <div className="style dDark"></div> <h4>Duotone dark</h4>
                </div>
              </MenuItem>

              <MenuItem value="okaidia">
                <div className="flex">
                  <div className="style okaidia"></div> <h4>Okai dia</h4>
                </div>
              </MenuItem>

              <MenuItem value="nord">
                <div className="flex">
                  <div className="style nord"></div> <h4>Nord</h4>
                </div>
              </MenuItem>
              <MenuItem value="materialDark">
                <div className="flex">
                  <div className="style md"></div> <h4>Material dark</h4>
                </div>
              </MenuItem>

              <MenuItem value="tomorrow">
                <div className="flex">
                  <div className="style tomorrow"></div> <h4>Tomorrow</h4>
                </div>
              </MenuItem>
            </Select>
          </FormControl>

          {/* ================ for langulage ================= */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={language}
              onChange={handleLanChange}
            >
              <MenuItem value='actionscript'>ActionScript</MenuItem>
              <MenuItem value='applescript'>AppleScript</MenuItem>
              <MenuItem value='bash'>Bash</MenuItem>
              <MenuItem value='basic'>Basic</MenuItem>
              <MenuItem value='c'>C</MenuItem>
              <MenuItem value='css'>css</MenuItem>
              <MenuItem value='chsarp'>C#</MenuItem>
              <MenuItem value='cpp'>C++</MenuItem>
              <MenuItem value='dart'>Dart</MenuItem>
              <MenuItem value='django'>Django</MenuItem>
              <MenuItem value='docker'>Docker</MenuItem>
              <MenuItem value='ejs'>Ejs</MenuItem>
              <MenuItem value='fortan'>Fortan</MenuItem>
              <MenuItem value='java'>Java</MenuItem>
              <MenuItem value='javascript'>JavaScript</MenuItem>
              <MenuItem value='json'>Json</MenuItem>
              <MenuItem value='jsx'>Jsx</MenuItem>
              <MenuItem value='julia'>Julia</MenuItem>
              <MenuItem value='kotlin'>Kotlin</MenuItem>
              <MenuItem value='less'>Less</MenuItem>
              <MenuItem value='markdown'>Markdown</MenuItem>
              <MenuItem value='mongodb'>MongoDB</MenuItem>
              <MenuItem value="php">PHP</MenuItem>
              <MenuItem value="perl">Perl</MenuItem>
              <MenuItem value="rust">Rust</MenuItem>
              <MenuItem value="ruby">Ruby</MenuItem>
              <MenuItem value="scss">Scss</MenuItem>
              <MenuItem value="typescript">TypeScript</MenuItem>
            </Select>
          </FormControl>

          </div>
          <div className="flex-items">
            {/* ============== background color ============== */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Background
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={bg}
              onChange={handleBgChange}
            >
              <MenuItem value="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #5826d8 100%)">
                <div className="flex">
                  <div className="style nc"></div> <h4>Night call</h4>
                </div>
              </MenuItem>

              <MenuItem value="linear-gradient(#eecda3 , #ef629f)">
                <div className="flex">
                  <div className="style tranquil"></div> <h4>Tranquil</h4>
                </div>
              </MenuItem>
              <MenuItem value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                <div className="flex">
                  <div className="style pp"></div> <h4>Plum plate</h4>
                </div>
              </MenuItem>
              <MenuItem value="linear-gradient(#02aab0 , #00cdac)">
                <div className="flex">
                  <div className="style gb"></div> <h4>Green Beach</h4>
                </div>
              </MenuItem>
              <MenuItem value="linear-gradient(#4B79A1, #283E51)">
                <div className="flex">
                  <div className="style dk"></div> <h4>Dark skies</h4>
                </div>
              </MenuItem>

              <MenuItem value="linear-gradient(to top, #ff0844 0%, #ffb199 100%)">
                <div className="flex">
                  <div className="style lk"></div> <h4>Love kiss</h4>
                </div>
              </MenuItem>

              <MenuItem value="linear-gradient(to right, #43e97b 0%, #38f9d7 100%)">
                <div className="flex">
                  <div className="style newlife"></div> <h4>New life</h4>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
          {/* ================ for langulage ================= */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              Padding
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={padding}
              onChange={(e) => setPadding(e.target.value)}
            >
              <MenuItem value='20px'>20px</MenuItem>
              <MenuItem value='30px'>30px</MenuItem>
              <MenuItem value='40px'>40px</MenuItem>
              <MenuItem value='50px'>50px</MenuItem>
              <MenuItem value='60px'>60px</MenuItem>
            </Select>
          </FormControl>

          {/* save button */}
          <div onClick={screenshot} className="save" style={{backgroundImage:bg}}>
            <HiOutlineSave className='save-icon'/>
          </div>
          </div>
        </div>

      </section>
      <Slider
          min={32}
          max={92}
          value={dwidth}
          onChangeStart={handleChangeStart}
          onChange={handleSliderChange}
          onChangeComplete={handleChangeComplete}
        />
    </>
  );
};

export default Appbar;
