import "./globals.css";

export const metadata = {
title:"Memory Layer",
description:"What survives when the network forgets"
};

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(
<html lang="en">
<body>
{children}
</body>
</html>
)

}
