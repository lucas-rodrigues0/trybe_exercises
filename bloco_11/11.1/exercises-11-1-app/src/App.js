import logo from './logo.svg';
import './App.css';

const apointement = ['estudar react', 'preparar refeições da semana', 'jardinagem', 'comprar mouse novo', 'ligar pai']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return apointement.map(taskItem => task(taskItem));
}

export default App;
