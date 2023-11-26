import { useSelector, useDispatch } from "react-redux"
import {ordered, reStocked} from './iceCreamSlice'
import { useState } from "react"
const IcecreamView = () => {
  const [value , setValue] = useState(1)
    const numOfIceCreams  = useSelector(state=> state.icecream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
      <div>
          <h2>Number of ice creams : {numOfIceCreams}</h2>
          <button onClick={()=> dispatch(ordered())}>Order ice cream</button>
          <input type="number" value={value} onChange={e => setValue(Number(e.target.value))}/>
          <button onClick={()=> dispatch(reStocked(value))}>Restock ice cream</button>
          {console.log(value)}
      </div>
    )
  }
  export default IcecreamView