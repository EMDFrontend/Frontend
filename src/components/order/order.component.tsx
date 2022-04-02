import OrderList from "./orderList.component"
import OrderPosition from "./orderPosition.component";
import { useState } from "react";
import "./order.scss";


export default function Order(){
const [positionNo, SetPositionNo]= useState<number>(0);///position to zmienna, SetPosition to funkcja ktora ustawia wartosc dla zmiennej
return(
            <div>

                <OrderList
                positionNo={positionNo}/>

                <OrderPosition
                SetPositionNo={SetPositionNo}
                positionNo={positionNo}
                />

            </div>
        )
}