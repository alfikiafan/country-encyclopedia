import './country-item.js';

class CountryList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._country.forEach(country => {
      const countryItemElement = document.createElement('country-item');
      countryItemElement.country = country;
      this.shadowDOM.appendChild(countryItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('country-list', CountryList);