const counterTemplate = document.createElement('template')
counterTemplate.innerHTML = `
<style>
button {
  display: inline-block;
  color: #5c8012;
  font-size: 18px;
  font-weight: 500;
  font-family: "Futura";
  background-color: white;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  transition: box-shadow .4s ease;
  user-select: none;
}
button:hover {
  box-shadow: 0 4px 32px 0 rgba(0,0,0,.161);
}
button:active {
  background-color: grey;
  color: #9ed137;
}
</style>
<button id="inc">
  Clicked <span id="count">0</span> times
</button>`
class MyCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(counterTemplate.content.cloneNode(true))
    this.handleClick = () => {
      this.count++
    }
  }
  connectedCallback() {
    this.shadowRoot.getElementById('inc').addEventListener('click', this.handleClick)
    if (!this.hasAttribute('count')) {
      this.setAttribute('count', 0)
    }
  }
  disconnectedCallback() {
    this.shadowRoot.getElementById('inc').removeEventListener('click', this.handleClick)
  }
  static get observedAttributes() {
    return ['count']
  }
  attributeChangedCallback(name, oldCount, newCount) {
    this.shadowRoot.getElementById('count').innerHTML = newCount
  }
  get count() {
    return this.getAttribute('count')
  }
  set count(newCount) {
    this.setAttribute('count', newCount)
  }
}
window.customElements.define('my-counter', MyCounter)
