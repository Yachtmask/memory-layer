"use client";

import {
useEffect,
useState
} from "react";

export default function Archive(){

const[
items,
setItems
]=useState<any[]>(
[]
);

useEffect(()=>{

setItems(

JSON.parse(

localStorage
.getItem(
"memory_archive"
)||"[]"

)

);

},[]);

return(

<main

style={

{

padding:
"60px",

background:
"#040404",

minHeight:
"100vh",

color:
"white"

}

}

>

<h1>

Recovered
Archive

</h1>

<br/>

{

items.length===0

?

<div>

Nothing archived yet

</div>

:

items.map(
m=>(

<div

key={
m.id
}

style={{

padding:
32,

marginBottom:
20,

background:
"rgba(255,255,255,.03)",

border:
"1px solid rgba(255,255,255,.08)",

borderRadius:
28

}}

>

<div>

LOSS

{" "}

{m.loss}%

</div>

<br/>

<div>

{m.recovered}

</div>

</div>

)

)

}

</main>

)

}
