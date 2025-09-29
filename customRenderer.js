
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
              <img src="./content/img/${e.date}.png" alt="${e.imgAlt}">
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
    <article>
      <h2>social media</h2>

        <ul>
          <li><a href='https://www.twitch.tv/gabbeeto'>Twitch</a></li>
          <li><a href='https://www.youtube.com/@gabbeeto'>YouTube</a></li>
          <li><a href='https://x.com/GabbeetoRSC'>Twitter/x</a></li>
          <li><a href='https://www.instagram.com/gabbeeto27/'>Instagram</a></li>
          <li><a href='https://gabbeto.itch.io/'>Itch.io</a></li>
        </ul>
    </article>
    <article>
      <h2>Blog</h2>
      ${sections}
    </article>

  </main>

    
  `


}
