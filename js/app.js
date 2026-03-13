fetch("data/partite.json")
.then(response => response.json())
.then(data => {

const container = document.querySelector(".container")

data.partite.forEach(p => {

const card = document.createElement("div")

card.className = "card"

card.innerHTML = `
<h3>${p.home} vs ${p.away}</h3>
<p>Tiri: ${p.tiri_home} - ${p.tiri_away}</p>
<p>Falli: ${p.falli_home} - ${p.falli_away}</p>
`

container.appendChild(card)

})

})
