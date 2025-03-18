import  {ReactNode} from 'react';

export default function Section({content}: {content: ReactNode}) {
	return (<section className='border-2 border-white p-2 rounded-3xl'>{content}</section>)}
