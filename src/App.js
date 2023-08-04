
import { Route, Routes } from "react-router";
import { SamplebootstrapExample } from "./BootstrapSample";
import { Mainpage } from "./HomePage";
import { Parameter } from "./ParameterComponent";
import { TernaryOperator } from "./TernaryOperator";
import { FirstHook } from "./UseStateSample";
import { UseState2 } from "./UseStateUsingNumber";
import Fun1, { Orderlist, Table, Table1 } from "./function";
import { Usingobotstrap } from "./usingBootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <Usingobotstrap/>
  <Fun1/>
    <Orderlist/>
    <Table1/>
    
    {/* ? <Parameter where="./cocktail.jpg" uyaram="200px" agalam="200px"/> */}
     
     {/* <UseState2/> */}
      {/* <FirstHook/>   */}
     {/* <SamplebootstrapExample/> */}
     {/* <TernaryOperator/> */}
     {/* <BrowserRouter>
        <Mainpage/>
        <Routes>
          <Route path="update" exact element={<Table1/>}/>
          <Route path="create" exact element={<h2>Welcome to BrowserRouter Module</h2>} />
        </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
