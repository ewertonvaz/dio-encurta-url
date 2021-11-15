import logo from './logo.svg';
import './App.css';
import { Layout } from '../../components/layout';

const handleUrl = () => {
  alert('Você clicou no botão');
}

function App() {
  return (
    <Layout onChange={handleUrl}/>
  );
}

export default App;
