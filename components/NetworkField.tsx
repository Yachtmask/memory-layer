"use client";

import { motion } from "framer-motion";

const nodes = [
{ x:12,y:22 },
{ x:30,y:60 },
{ x:52,y:32 },
{ x:74,y:64 },
{ x:88,y:26 }
];

export default function NetworkField(){

return(

<div className="network">

{nodes.map((n,i)=>(

<motion.div
key={i}
className="node"

initial={{
opacity:0
}}

animate={{
opacity:[0.2,1,.2],
scale:[1,1.3,1]
}}

transition={{
repeat:Infinity,
duration:4,
delay:i*.4
}}

style={{
left:`${n.x}%`,
top:`${n.y}%`
}}

/>

))}

<svg>

{nodes.slice(0,-1).map((n,i)=>(

<line
key={i}
x1={`${n.x}%`}
y1={`${n.y}%`}
x2={`${nodes[i+1].x}%`}
y2={`${nodes[i+1].y}%`}

/>

))}

</svg>

</div>

)

}
