import Header from './components/Header';
import routes from './routes';
import './App.css'
function App() {
  return (
    <div>
      <Header/>
      {routes}
    </div>
  );
}

export default App;
