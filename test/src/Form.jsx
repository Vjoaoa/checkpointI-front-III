

function Form(props){


    function salvarCor(){
      const regex =   /^[0-9]$/;

      if(props.nome == "" || props.cor == "" || props.nome[0] == " "||props.nome.length < 3||props.cor.length < 6||regex.exec(props.cor)){
        alert("Por favor, verifique os dados inseridos no formulário");
      }else{
  
        props.setCores([...props.cores, {
          nome:props.nome,
          cor:props.cor,
        } ])
      }

    }
  
  
    return (
      <div className="formCSS">
        <form >
          <h2>COLOQUE UMA COR</h2>

          <input 
          className="input1"
          value={props.nome} 
          onChange={(event)=>props.setNome(event.target.value)} 
          placeholder="Digite o nome"/>
  
  
          <input
          className="input1"
          min="1"
          value={props.cor} 
          onChange={(event)=>props.setCor(event.target.value)} 
          placeholder="Digite a cor"/>
        </form>
        <div>  
          <button
            type="button" 
            onClick={salvarCor}>Salvar  
          </button>
        </div>
      </div>
    )
    
  }
  
  export default Form;