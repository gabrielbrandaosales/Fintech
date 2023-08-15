import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Resumo from './Pages/Resumo';
import './Style.css';

function App() {
  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </>
  );
}

export default App;
