import "./style.css"
import Header from "./Component/Header.jsx";
import InputText from "./Component/InputText";
import Display from "./Component/Display";
import Modal from "./Component/Modal";
import { useState } from "react";

function App() {
  const [work, setWork] = useState('')
  const [time, setTime] = useState(0)
  const [timeWorkRender, setprops] = useState(false)
  const [modal, viewModal] = useState(false)

  return (<>
    <div className="wrap">
      <Header/>
      <InputText setWork={setWork} setTime={setTime} setprops={setprops}/>
      {timeWorkRender && <Display work={work} time={time} viewModal={viewModal}/>}
    </div>
    {modal ? <Modal viewModal={viewModal}/> : undefined}
  </>);
}
export default App;
