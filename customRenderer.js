alert("this works")

async function renderStuff() {
  const response = await fetch("./content/main.json");
  const json = await response.json();
  renderWebsite(json)
}
renderStuff()
function renderWebsite(json) {
  const sections = json.blog.map(e => {

    return `<section>
              <h3>${e.name}</h3>
              <p class="date">${e.date}</p>
              <p>${e.description}</p>
              <img src="./img/${e.date}" alt="${e.imgAlt}">
            </section>`

  }).join("")

  const body = document.querySelector("body");
  body.innerHTML = `
  <header>
  <h1> ${json.tittle[0]} </h1>
  </header>

  <main>
    <article>
      <h2>${json.about[0]}</h2>
      <p>
      ${json.aboutP[0]}
      </p>
    </article>
      ${sections}
    <article>

    </article>

  </main>

    
  `


}
