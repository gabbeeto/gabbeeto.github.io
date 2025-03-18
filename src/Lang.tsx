import  { ReactNode } from 'react';

export default function Lang({es, en}: {es: ReactNode,en: ReactNode }) {
	return (<>{window.lang == 'es' ? es : en}</>)
}


export function LangT(es: string, en: string) {
	return (window.lang == 'es' ? es : en)
}
