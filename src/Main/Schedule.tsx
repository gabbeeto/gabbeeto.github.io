import {ReactElement} from "react";
import {InstagramEmbed} from "react-social-media-embed";


export default function Posts({containerStyle}: {containerStyle: string}): ReactElement {
	return (<section className={containerStyle}>

<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'  }} >
  <InstagramEmbed  url="https://www.instagram.com/p/DCkFbFwyLYD/" width={328}  />
  <InstagramEmbed  url="https://www.instagram.com/p/C_QxRxvpjGx/" width={328}  />
</div>
	</section>)

}
