class MSG {
	constructor(id, messages) {
		this.obj = document.querySelector(`#${id}`)
		this.eng = messages[0]
		this.es = messages[1]

		if (document.querySelector("html").lang == 'en') {
			this.obj.innerHTML = this.eng
		}
		else {
			this.obj.innerHTML = this.es
		}
	}
	updt() {
		if (document.querySelector("html").lang == 'en') {
			this.obj.innerHTML = this.eng
		}
		else {
			this.obj.innerHTML = this.es
		}
	}

}
