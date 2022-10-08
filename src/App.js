// import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Mounting from './Components/Mounting';
import Order from './Components/Order';
import OrderFunction from './Components/OrderFunction';
import Unmounting from './Components/Unmounting';
import Updating from './Components/Updating';
import Color from './Components/Color';
import TextBoxLen from './Components/TextBoxLen';
import Voter from './Components/Voter';
import Arraylen from './Components/Arraylen';
import ArrMap from './Components/ArrMap';
import Animal from './Components/Animal';
import ElectricalOfficer from './Components/Child to Parent/ElectricalOfficer';
import Father from './Components/Parent to Child/Father';
import Classm from './Components/Classm';
import Effect from './Components/Hooksmethod/Effect';
import Reducer from './Components/Hooksmethod/Reducer';
import Refmethod from './Components/Hooksmethod/Refmethod';
import Statemethod from './Components/Hooksmethod/Statemethod';
import DataBox from './Components/DataBox'
import Inline from './Components/Inline'

function App() {
   return ( 
    <>
    <Mounting/>
    <br/>
    <Updating/>
    <br/>
    <Unmounting/>
    <br/>
    <Order/>
    <br/>
    <OrderFunction/>
    <br/>
    <Color colorName="Rajesh" color="yellow" />
    <Color colorName="Avinsh" color="red"/>
    <Color colorName="Viknesh" color="pink"/>
    <br/>
    <TextBoxLen/>
    <br/>
    <Voter/>
    <br/>
    <Arraylen/>
    <br/>
    <ArrMap/>
    <br/>    
    <Animal/>
    <br/>
    <ElectricalOfficer/>
    <br/>
    <Father/>
    <br/>
    <Classm/>
    <br/>
    <Effect/>
    <br/>
    <Reducer/>
    <br/>
    <Refmethod/>
    <br/>
    <Statemethod/>
    <br/>
    <DataBox/>
    <br/>
    <Inline/>
    
    </>

  //   <BrowserRouter>
  //   <Routes>
  //   <Route path="/0" element={<Mounting/>}/>
  //   <Route path="1" element={<Updating/>}/>
  //   <Route path="2" element={<Unmounting/>}/>
  //   <Route path="3" element={<Order/>}/>
  //   <Route path="4" element={<OrderFunction/>}/>
  //   <Route path="5" element={<TextBoxLen/>}/>  
  //   <Route path="6" element={<Voter/>}/>
  //   <Route path="7" element={<Arraylen/>}/>
  //   <Route path="8" element={<ArrMap/>}/>
  //   <Route path="9" element={<Animal/>}/>
  //   <Route path="10" element={<ElectricalOfficer/>}/>
  //   <Route path="11" element={<Father/>}/> 
  //   <Route path="12" element={<Classm/>}/>   
  //   </Routes>
  //   </BrowserRouter>
  );
}
export default App;
