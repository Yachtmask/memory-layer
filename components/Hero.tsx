"use client";

import NetworkField from "./NetworkField";
import MemoryInput from "./MemoryInput";

export default function Hero(){

return(

<section className="hero">

<NetworkField/>

<div className="content">

<div className="label">

ARCHIVE 0001

</div>

<h1>

MEMORY
<br/>
LAYER

</h1>

<p>

What survives
when the network forgets?

</p>

<MemoryInput/>

</div>

</section>

)

}
