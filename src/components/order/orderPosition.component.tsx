 import "./orderPosition.scss"

 interface IOrderPosition {
    positionNo:number;
    SetPositionNo:Function;
    //10 innych
  }
 export default function OrderPosition(props:IOrderPosition){
    const { positionNo,SetPositionNo } = props;
    console.log("zmieniam sie orderPosition")
    return(<div style={{border:"solid blue 2px", padding:"30px"}}>
order position
<button onClick={()=>{SetPositionNo(positionNo+1)}}>dodaj produkt</button>
    </div>)
}