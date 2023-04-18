import './App.css';
import CountryCard from './components/CountryCard';
import BR from './svgs/br.svg';
import US from './svgs/us.svg'

function App() {
  return (
    <div className="App">
    <CountryCard imgSrc={BR} countryName="Brazil" imgHeight={'150px'} cardHeight={'120px'} population={1000000} region={'Americas'} capital={'Brasilia'}></CountryCard>
    </div>
  );
}

export default App;
