

if(navigator.language.startsWith('es')){
    document.querySelector("html").lang = 'es'
}
else{
    document.querySelector("html").lang = 'en'
}

class MSG{
constructor(id, messages){
    this.obj = document.querySelector(`#${id}`)
    this.eng = messages[0]
    this.es = messages[1]

    if(document.querySelector("html").lang == 'en'){
    this.obj.innerText = this.eng
    }
    else{
    this.obj.innerText = this.es
    }
}
updt(){
    if(document.querySelector("html").lang == 'en'){
    this.obj.innerText = this.eng
    }
    else{
    this.obj.innerText = this.es
    }
}

}

    if(document.querySelector("html").lang == 'en'){
    document.title = `gabbeeto's website`
    }
    else{
    document.title = `la pagina de gabriel`
    }

const tit = new MSG("title", ["About Gabbeeto", "Acerca de Gabbeeto"]);