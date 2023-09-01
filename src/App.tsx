import './App.css';
import DiscordLink from './components/DiscordLink';

interface AppProps {
  
}


const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      Umineko
      <DiscordLink/>
    </div>
  );
};

export default App;
