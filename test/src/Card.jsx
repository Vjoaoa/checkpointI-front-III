import "./Style.css"

function Card(props){
  return(
    <div className="card-css" style={{background:props.corr.cor}}>
      <h1>{props.corr.nome}</h1>
      {/* <h5 className="card-css-h5" >
        {props.corr.cor}
      </h5> */}
    </div>
  )
}

export default Card;