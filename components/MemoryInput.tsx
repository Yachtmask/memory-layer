"use client";

import {
useState
} from "react";

export default function MemoryInput(){

const[
message,
setMessage
]=useState("");

const[
phase,
setPhase
]=useState("");

const[
result,
setResult
]=useState("");

function simulate(){

if(!message)return;

setPhase(
"encoding"
);

setTimeout(()=>{

setPhase(
"propagating"
);

},900);

setTimeout(()=>{

setPhase(
"loss"
);

},2200);

setTimeout(()=>{

let chars=
message.split("");

let keep=
chars.filter(
()=>Math.random()>.25
);

setResult(
keep.join("")
);

setPhase(
"recovering"
);

},3500);

}

return(

<div className="memory">

<textarea

placeholder="Leave something worth preserving"

value={message}

onChange={
e=>
setMessage(
e.target.value
)
}

/>

<button
onClick={simulate}
>

Begin Propagation

</button>

{

phase&&(

<div className="state">

{phase==="encoding"&&"Encoding memory"}

{phase==="propagating"&&"Traversing network"}

{phase==="loss"&&"Packet loss detected"}

{phase==="recovering"&&"Recovery complete"}

</div>

)

}

{

result&&(

<div className="recovered">

<div className="tag">

RECOVERED

</div>

{result}

</div>

)

}

</div>

)

}
