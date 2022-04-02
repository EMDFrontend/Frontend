import "./orderList.scss"
import {useEffect, useState} from "react"
interface IOrderList {
    positionNo:number;
  }
  
export default function OrderList(props:IOrderList){
    const [visibility, setVisibility]= useState<boolean>(true);
    const { positionNo } = props;


    useEffect(()=>
    {
        setVisibility(!visibility)
    },[positionNo])

    console.log("zmieniam sie Order list")
    return (<div style={{padding:"150px",border:"solid red 3px"}}>
        orderList
        <div>
            {/* {visibility &&(
                <div>test jest lub nie</div>
            )} */}
           <div style={ visibility ? { border:'1px solid red'} : {border: '1px solid yellow'} }>
               ehehehehehhehe
           </div>
        liczba pozycji {positionNo} 
        </div>

    </div>)
}