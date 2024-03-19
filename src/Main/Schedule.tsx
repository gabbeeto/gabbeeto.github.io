import {ReactElement} from "react";

export default function Schedule({containerStyle}:{containerStyle: string}): ReactElement{
return (<section className={containerStyle}>

<table>
<caption className="textSize-2">My Schedule</caption>
<thead>
<tr>
<th scope='col' className="textSize-3">
time
</th>

<th scope='col' className="textSize-3">
task
</th>
</tr>
</thead>

<tbody>
<tr>
<th scope="row" className="textSize-3"> 6 a.m to 7p.m</th>
<th className="textSize-4">
prepare myself and go to my job
</th>
</tr>
</tbody>
</table>

</section>)

}
