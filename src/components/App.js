import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';

import Navi from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RechercheFilm from './recherchefilm';
import Infos from './Infos';
import Page_x from './Page_x';

function App() {
  return (
    <div id="App">
      <RechercheFilm>
      <Navi/> 
      <Routes>

        {/* <Route path="/films" element={<BesoinsCaloriques/>}/>
          <Route path="/series" element={<Compteur/>}/> */}
        <Route path="/infos" element={<Infos/>} />
        <Route path="/" element={<Page_x />}/>
      </Routes>

      </RechercheFilm>

    </div>
  );
}

export default App;
