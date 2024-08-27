import React from "react";

export default function Header(): React.ReactElement {
return (<header className="flex justify-center items-center bg-red-200">
<h1 className="text-black text-center textSize-1">Gabbeeto's website</h1>
<img src={"/img/happy.png"}  alt="goodLookingSausage" />
</header>)
}
