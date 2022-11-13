import { useState } from "react"
import Card from "./Card";
import Form from "./Form";
import "./Style.css"

function App() {

  const [nome, setNome] = useState("")
  const [cor, setCor] = useState("")



  const [cores, setCores] = useState([]);

  return(

 <div>
    

    <Form 
      nome={nome}
      cor={cor}
      cores={cores}
      setNome={setNome}
      setCor={setCor}
      setCores={setCores}
    />

    {
      cores.map((corr)=>{
        return(
         <Card corr={corr}/>
        )
      })
    }
  </div>
  )
}

export default App