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
style={{

padding:"80px",

background:"#050505",

minHeight:"100vh",

color:"white"

}}

>

<h1>

Archive

</h1>

<br/>

{

items.map(
m=>(

<div

key={
m.id
}

style={{

padding:"24px",

border:
"1px solid rgba(255,255,255,.08)",

marginBottom:
20,

borderRadius:
20

}}

>

<div>

Loss:
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
