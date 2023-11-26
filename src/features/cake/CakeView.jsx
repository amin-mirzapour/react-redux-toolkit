import {useSelector , useDispatch} from 'react-redux'
import { ordered, reStocked } from './cakeSlice'
const CakeView = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Cakes : {numOfCakes}</h2>
        <button onClick={()=> dispatch(ordered())}>Order Cake</button>
        <button onClick={()=> dispatch(reStocked(5))}>Restock Cake</button>
    </div>
  )
}
export default CakeView