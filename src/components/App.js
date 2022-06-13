import '../styles/App.scss';
import Navigation from'./Navigation.js'
import Cards from './Cards.js'
import Sidebars from './Sidebars.js'

function App() {
  return (
    <div className="App">
       <Navigation />
       <main>
         <div className="container">
           <Cards />
           <Sidebars />
         </div>
       </main>
    </div>
  );
}

export default App;
