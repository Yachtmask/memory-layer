"use client";

import {useState} from "react";

export default function MemoryInput(){

const[
message,
setMessage
]=useState("");

const[
result,
setResult
]=useState("");

function fragment(){

if(!message)return;

let pieces=
message
.split("");

let visible=
pieces
.filter(
()=>Math.random()>.4
);

setTimeout(()=>{

setResult(
visible.join("")
)

},900)

}

return(

<div>

<textarea

placeholder="Leave memory"

value={message}

onChange={
e=>
setMessage(
e.target.value
)
}

/>

<button
onClick={fragment}
>

Propagate

</button>

{
result&&(

<div>

Recovered

<div>

{result}

</div>

</div>

)

}

</div>

)

}
