import {ReactElement} from "react";

export default function Schedule({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={containerStyle}>

<table className="schedulo">
<caption className="textSize-1">My Schedule in a nutshell</caption>
<thead>
<tr>
<th scope='col' className="textSize-2">
time
</th>

<th scope='col' className="textSize-2">
task
</th>
</tr>
</thead>

<tbody >
<tr>
<th scope="row" className="textSize-4">6a.m/3p.m</th>
<th className="textSize-4">
work on my job
</th>
</tr>


<tr>
<th scope="row" className="textSize-4">3p.m/6p.m</th>
<th className="textSize-4">
stream on Twitch
</th>
</tr>


<tr>
<th scope="row" className="textSize-4">6p.m/11p.m</th>
<th className="textSize-4">
go to highschool
</th>
</tr>

</tbody>
</table>

</section>)

}
