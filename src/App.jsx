import './App.css';
import HelloWorld from './Components/Helloworld/HelloWorld';
import Employee from './Components/NestedComponents/Employee';
import Element from './Components/Elements/Element';
import ImageComponent from './Components/Image/ImageComponent';
import FirstComponent from './Components/Props/FirstComponent';
import SecondComponent from './Components/Props/SecondComponent';
import UseStateComponent from './Components/UseState/UseStateComponent';
import UseEffective from './Components/UseEffective/UseEffective';
import ClickEvent from './Components/Events/EventClick/ClickEvent';
import EventListner from './Components/Events/EventListners/EventListner';
import FormEvent from './Components/Events/FormEvents/FormEvent';
import ConstructorSample from './Components/constructor/ConstructorSample';

// Props Example
const user = {
  name: 'Siva Kumar',
  age: '34',
  surname: 'Thota',
  Address: 'Ravuru'
}

function App() {
  return (
    // <HelloWorld />
    //<Employee />  // Nested Component Example 
    //<Element /> // React Element
    //<ImageComponent />
    
    // Props Example
    // <div>
    //   <FirstComponent user = {user} />
    //   <SecondComponent name = "Mani"/>
    // </div>

    //<UseStateComponent user = {user}/>

    //<UseEffective  user = {user}/>

    //<ClickEvent />
    //<EventListner />
    //<FormEvent /> //login Page


    //Tutorial 2 Example Practice
    <ConstructorSample />
  );
}

export default App;
