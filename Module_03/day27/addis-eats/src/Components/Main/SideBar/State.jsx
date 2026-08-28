import { useState } from "react";
import './State.css'
function State() {
const [count, setCount] = useState(0);
return (
    <div>
    <h3>{count}</h3>
<button onClick={() => setCount(count + 1)}>

<h2>+</h2> 
</button>
<button onClick={()=>setCount(count-1)}>-</button>


    </div>
);}
export default State;