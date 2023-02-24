import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { apiContext } from './recherchefilm';
import { Link} from "react-router-dom"


function Navi() {
const { setVal } = useContext(apiContext)

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e.target.children[0].value);
  setVal(e.target.children[0].value)
}

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Link to="/"><img src={require('../assets/bedflix-logo.png')}/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"><button>Accueil</button></Link>
            <Link to="/"><button>Films</button></Link>
            <Link to="/"><button>Series</button></Link>
            <Link to="/infos"><button>Infos</button></Link>

            <form className="searchBar" onSubmit={handleSubmit}>
              <input type="text" id="recherche"/>
              <button id="btnRecherche" type="submit">Search</button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;

