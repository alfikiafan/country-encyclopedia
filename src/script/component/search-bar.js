import 'jquery';
import 'jquery-ui/themes/base/all.css';
import 'jquery-ui/ui/widgets/autocomplete';
window.$ = window.jQuery = require('jquery');

class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} event
   */
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 40px;
        display: flex;
        top: 10px;
        background-color: white;
        width: 100%;
      }
      
      .search-container > input {
        flex: 1;
        padding: 16px 16px 16px 32px;
        border: 0;
        font-size: 18px;
        outline: none;
        max-width: 100%;
      }
      
      .search-container > input::placeholder {
        color: #808080;
        font-weight: normal;
        font-size: 16px;
      }
      
      .search-container > button {
        cursor: pointer;
        padding: 16px;
        background-color: #008b8b;
        color: white;
        border: 0;
        text-transform: uppercase;
        font-size: 18px;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      #backButtonElement {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        padding: 16px 8px 16px 24px;
      }
      
      .search-container > button > i {
        margin-right: 8px;
      }
      @media screen and (max-width: 400px) {
        .search-container {
          max-width: 100%;
        }
      }
      </style> 
      
      <div id="search-container" class="search-container">
        <button id="backButtonElement" type="submit">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" fill="white"></path> </svg></i>
        </button>
        <input placeholder="Search country name" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg></i>
        </button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchElement').addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        this._clickEvent();
        window.document.body.style.background = 'none'
      }
    });

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', (event) => {
      this._clickEvent();
      window.document.body.style.background = 'none'
    });

    this.shadowDOM.querySelector('#backButtonElement').addEventListener('click', (event) => {
        window.location.replace(document.referrer)
    });
    
    this.shadowDOM.querySelector('#searchElement').autocomplete({
      source: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
      minLength: 2
    });
  }
}

customElements.define('search-bar', SearchBar);