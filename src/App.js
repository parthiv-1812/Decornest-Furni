import './App.css';
import DecornestHeader from './Layout/Header';
import DecornestAllPages from './Rendering';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DecornestrFooter from './Layout/Footer';

function App() {
  return (
    <div>
      <DecornestHeader/>
      <DecornestAllPages/>
      <DecornestrFooter/>
    </div>
  );
}

export default App;
