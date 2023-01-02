import React from "react";
import Page10 from "pages/Page10";
import Three6 from "pages/Three6";
import Two8 from "pages/Two8";
import One11 from "pages/One11";
import Two7 from "pages/Two7";
import One10 from "pages/One10";
import Four4 from "pages/Four4";
import Three5 from "pages/Three5";
import Two6 from "pages/Two6";
import One9 from "pages/One9";
import Page9 from "pages/Page9";
import Seven2 from "pages/Seven2";
import Six2 from "pages/Six2";
import Four3 from "pages/Four3";
import One8 from "pages/One8";
import Four2 from "pages/Four2";
import Seven1 from "pages/Seven1";
import Six1 from "pages/Six1";
import Page8 from "pages/Page8";
import Five3 from "pages/Five3";
import Page7 from "pages/Page7";
import One7 from "pages/One7";
import MacTwo1 from "pages/MacTwo1";
import Seven from "pages/Seven";
import One6 from "pages/One6";
import Page6 from "pages/Page6";
import Six from "pages/Six";
import MacOne1 from "pages/MacOne1";
import Page5 from "pages/Page5";
import Three4 from "pages/Three4";
import Page4 from "pages/Page4";
import One5 from "pages/One5";
import Three3 from "pages/Three3";
import Mac from "pages/Mac";
import Five2 from "pages/Five2";
import Two5 from "pages/Two5";
import Three2 from "pages/Three2";
import One4 from "pages/One4";
import Five1 from "pages/Five1";
import MacThree from "pages/MacThree";
import Four1 from "pages/Four1";
import Two4 from "pages/Two4";
import Three1 from "pages/Three1";
import Two3 from "pages/Two3";
import Page3 from "pages/Page3";
import Two2 from "pages/Two2";
import Windows1 from "pages/Windows1";
import One3 from "pages/One3";
import ComponentSetRegistration from "pages/ComponentSetRegistration";
import Three from "pages/Three";
import MacTwo from "pages/MacTwo";
import Two1 from "pages/Two1";
import Five from "pages/Five";
import Two from "pages/Two";
import MacOne from "pages/MacOne";
import Page2 from "pages/Page2";
import One2 from "pages/One2";
import Four from "pages/Four";
import One1 from "pages/One1";
import Windows from "pages/Windows";
import Page1 from "pages/Page1";
import Page from "pages/Page";
import One from "pages/One";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/page" element={<Page />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/one1" element={<One1 />} />
        <Route path="/four" element={<Four />} />
        <Route path="/one2" element={<One2 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/macone" element={<MacOne />} />
        <Route path="/two" element={<Two />} />
        <Route path="/five" element={<Five />} />
        <Route path="/two1" element={<Two1 />} />
        <Route path="/mactwo" element={<MacTwo />} />
        <Route path="/three" element={<Three />} />
        <Route
          path="/componentsetregistration"
          element={<ComponentSetRegistration />}
        />
        <Route path="/one3" element={<One3 />} />
        <Route path="/windows1" element={<Windows1 />} />
        <Route path="/two2" element={<Two2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/two3" element={<Two3 />} />
        <Route path="/three1" element={<Three1 />} />
        <Route path="/two4" element={<Two4 />} />
        <Route path="/four1" element={<Four1 />} />
        <Route path="/macthree" element={<MacThree />} />
        <Route path="/five1" element={<Five1 />} />
        <Route path="/one4" element={<One4 />} />
        <Route path="/three2" element={<Three2 />} />
        <Route path="/two5" element={<Two5 />} />
        <Route path="/five2" element={<Five2 />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/three3" element={<Three3 />} />
        <Route path="/one5" element={<One5 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/three4" element={<Three4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/macone1" element={<MacOne1 />} />
        <Route path="/six" element={<Six />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/one6" element={<One6 />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/mactwo1" element={<MacTwo1 />} />
        <Route path="/one7" element={<One7 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/five3" element={<Five3 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/six1" element={<Six1 />} />
        <Route path="/seven1" element={<Seven1 />} />
        <Route path="/four2" element={<Four2 />} />
        <Route path="/one8" element={<One8 />} />
        <Route path="/four3" element={<Four3 />} />
        <Route path="/six2" element={<Six2 />} />
        <Route path="/seven2" element={<Seven2 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/one9" element={<One9 />} />
        <Route path="/two6" element={<Two6 />} />
        <Route path="/three5" element={<Three5 />} />
        <Route path="/four4" element={<Four4 />} />
        <Route path="/one10" element={<One10 />} />
        <Route path="/two7" element={<Two7 />} />
        <Route path="/one11" element={<One11 />} />
        <Route path="/two8" element={<Two8 />} />
        <Route path="/three6" element={<Three6 />} />
        <Route path="/page10" element={<Page10 />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
