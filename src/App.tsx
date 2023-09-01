import './App.css';
import DiscordLink from './components/DiscordLink';
import Uminekopeel from './components/Uminekopeel';

interface AppProps {
  
}


const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <a href="https://discord.gg/wfF3zVJw9g" target="_blank" rel="noopener noreferrer">
      Umineko
      </a>
      <Uminekopeel/>
      <DiscordLink/>
    </div>
  );
};

export default App;
