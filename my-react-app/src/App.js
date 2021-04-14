import logo from './logo.svg';
import './App.css';
import Hello from './my_components/Hello';
import Welcome from './my_components/Welcome'

import Bs_button_pri from './my_components/Bs_button_pri'
import Arrow from './my_components/Arrow';
import My_states from './my_components/My_states'
import ChangeStateVal from './my_components/ChangeStateVal'
import Condition1 from './my_components/Condition1'
import Condition2 from './my_components/Condition2'
import Refresh from './my_components/Refresh'
import Render_demo from './my_components/Render_demo';
import SeekDomNode from './my_components/SeekDomNode';
import Form from './my_components/Form';
import Signup from './my_components/Signup';
import Textarea from './my_components/Textarea';
import Select from './my_components/Select';

function App() {
  return (
    <div className="App">
      <Select/>
      <Hello age="20" name="Taher"></Hello>

      <Welcome age="01" name="class 01"></Welcome>
      <Bs_button_pri></Bs_button_pri>
      <br/>
      <Arrow></Arrow>
     <My_states></My_states>
     <ChangeStateVal></ChangeStateVal>
      <Condition1></Condition1>
      <Condition2></Condition2>
      <Refresh/>
      <Render_demo/>
      <SeekDomNode/>
      <Form/>
      <Signup/>
      <Textarea/>


    </div>
  );
}

export default App;
