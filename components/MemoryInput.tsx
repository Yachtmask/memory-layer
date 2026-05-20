"use client";

import { useEffect, useState } from "react";

type Memory = {
id:number;
original:string;
recovered:string;
loss:number;
};

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
memory,
setMemory
]=useState<
Memory|null
>(null);

function saveMemory(
item:Memory
){

const old=
JSON.parse(
localStorage.getItem(
"memory_archive"
)||"[]"
);

old.unshift(
item
);

localStorage.setItem(
"memory_archive",
JSON.stringify(
old.slice(
0,
25
)
)

);

}

function simulate(){

if(!message)return;

setMemory(
null
);

setPhase(
"encoding"
);

setTimeout(
()=>{
setPhase(
"propagating"
);
},
900
);

setTimeout(
()=>{
setPhase(
"loss"
);
},
2200
);

setTimeout(()=>{

const chars=
message.split("");

const kept=
chars.filter(
()=>Math.random()>.32
);

const recovered=
kept.join("");

const loss=
100-
Math.floor(
(
kept.length/
chars.length
)*100
);

const item={

id:Date.now(),

original:
message,

recovered,

loss

};

saveMemory(
item
);

setMemory(
item
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

value={
message
}

onChange={
e=>
setMessage(
e.target.value
)
}

/>

<button
onClick={
simulate
}
>

Begin Propagation

</button>

{

phase&&(

<div
className="state"
>

{
phase==="encoding"
&&"Encoding"
}

{
phase==="propagating"
&&"Traversing"
}

{
phase==="loss"
&&"Packet loss"
}

{
phase==="recovering"
&&"Recovered"
}

</div>

)

}

{

memory&&(

<div
className="recovered"
>

<div
className="tag"
>

ARCHIVED

</div>

<div>

Loss:
{" "}
{memory.loss}%

</div>

<br/>

<div>

Original

</div>

<p>

{
memory.original
}

</p>

<br/>

<div>

Recovered

</div>

<p>

{
memory.recovered
}

</p>

</div>

)

}

</div>

)

}
