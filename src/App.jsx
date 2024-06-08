import './App.css';
import HelloWorld from './Components/Functional/Helloworld/HelloWorld';
import Employee from './Components/Functional/NestedComponents/Employee';
import Element from './Components/Functional/Elements/Element';
import ImageComponent from './Components/Functional/Image/ImageComponent';
import FirstComponent from './Components/Functional/Props/FirstComponent';
import SecondComponent from './Components/Functional/Props/SecondComponent';
import UseStateComponent from './Components/Functional/UseState/UseStateComponent';
import UseEffective from './Components/Functional/UseEffective/UseEffective';
import ClickEvent from './Components/Functional/Events/EventClick/ClickEvent';
import EventListner from './Components/Functional/Events/EventListners/EventListner';
import FormEvent from './Components/Functional/Events/FormEvents/FormEvent';
import ConstructorSample from './Components/ClassComponent/ConstructorExample/ConstructorSample';
import StateExample from './Components/ClassComponent/UseState/StateExample';
import EventBind from './Components/ClassComponent/EventBind/EventBind';
import ParentComponent from './Components/ClassComponent/Props/ParentComponent';

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
    //<ConstructorSample />
    //<StateExample />
    //<EventBind />
    <ParentComponent />
  );
}

export default App;
