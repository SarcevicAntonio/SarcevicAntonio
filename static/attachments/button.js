const template = document.createElement('template')
template.innerHTML = `
<style>
button {
  color: #5c8012;
  background-color: white;
  border: 1px solid grey;
  display: inline-block;
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  user-select: none;
  font-size: 18px;
  font-weight: 500;
  font-family: "Futura";
  transition: box-shadow .4s ease;
}
button:hover {
  box-shadow: 0 4px 32px 0 rgba(0,0,0,.161);
}
button:active {
  background-color: grey;
  color: #9ed137;
}
</style>
<button>
  <span><slot/></span>
</button>`

class MyButton extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

window.customElements.define('my-button', MyButton)
