import './App.css';
import Student from './components/Student';
import Navbar from './components/Navbar';
import Toggle from './components/Toggle';
import LoggedinButton from './components/LoggedinButton'
import LoginController from './components/LoginController';
import Test from './components/Test';
import ListandKeys from './components/ListandKeys';
import FormName from './components/FormName';
import FormEssay from './components/FormEssay';
import FormFlavor from './components/FormFlavor';
import Reservation from './components/Reservation';
import Calculator from './components/Calculator';


function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <h1>Props and State</h1>
      <Student name="Ashu"/>
      <Navbar/>
      <Toggle/>
      <LoggedinButton/>
      <LoginController/>
      <Test/>
      <ListandKeys numbers={numbers}/>
      <FormName/>
      <FormEssay/>
      <FormFlavor/>
      <Reservation/>
      <Calculator/>
    </div>
  );
}

export default App;
