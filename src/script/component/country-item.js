class CountryItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set country(country) {
        this._country = country;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }

        :host body {
            background: none;
        }

        .country-symbol {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            gap: 5px;
        }

        .country-symbol img {
            margin: 20px;
        }

        .country-flag {
            max-height: 20vw;
            object-position: center;
            box-shadow: 3.3px 6.6px 6.6px hsl(0deg 0% 0% / 0.40);

        }

        .country-coat {
            max-height: 20vw;
            object-position: center;
            text-align: center;
        }

        h2 {
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            margin-bottom: 10px;
            line-height: 75px;
        }

        .country-data>p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }

        .country-data {
            width: 100%;
            margin: 5px auto;
            display: flex;
        }

        .country-data p {
            padding: 0;
            font-size: 21px;
            word-wrap: break-word;
            margin-left: 20px;
        }

        .country-data .namelist {
            margin-bottom: 15px;
        }

        .country-data .row {
            flex-direction: row;
            width: 30%;
        }

        .country-data .row p {
            text-align: left;
            color: #3A4FA1;
            font-weight: bold;
            margin-right: 10px;
        }

        .country-data .col {
            flex-direction: row;
            width: 70%;
        }

        .country-data .col p {
            text-align: left;
            margin: 0 0 5px 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: none;
            vertical-align: top;
            font-size: 21px;
        }

        td, th {
            border: none;
            vertical-align: top;
        }

        table tr td:nth-child(1) {
            width: 100px;
        }

        table tr td:nth-child(2) {
            width: 20px;
        }

        @media screen and (max-width:768px) {
            .country-symbol {
                flex-direction: column;
                justify-content: center;
                content-align: center;
                margin: auto;
            }

            .country-symbol img {
                max-width: 300px;
                height: 150px;
                margin: 20px auto;
            }

            .country-data td {
                
            }
        }

        @media screen and (max-widht:425px) {
            .country-data p {
                font-size: 14px;
            }
        }
      </style>
    <h2>${this._country.name.common}
        <hr>
    </h2>
    <div class="country-container">
    <div class="country-symbol">
        <img class="country-flag" src="${this._country.flags.png}" alt="Country Flag">
        <img class="country-coat" src="${this._country.coatOfArms.svg}" alt="Country Coat">
    </div>
        <div class="country-data">
            <div class="row">
                <p>Official Name</p>
            </div>
            <div class="col">
                <p>${this._country.name.official}</p>
            </div>
        </div>
        <div class="country-data">
            <div class="row">
                <p>Capital</p>
            </div>
            <div class="col">
                <p>${this._country.capital}</p>
            </div>
        </div>
        <div class="country-data">
            <div class="row">
                <p>Population</p>
            </div>
            <div class="col">
                <p>${this._country.population.toLocaleString()}</p>
            </div>
        </div>
        <div class="country-data">
            <div class="row">
                <p>Region</p>
            </div>
            <div class="col">
                <p>${this._country.region}</p>
            </div>
        </div>
        <div class="country-data">
            <div class="row">
                <p>Sub Region</p>
            </div>
            <div class="col">
                <p>${this._country.subregion}</p>
            </div>
        </div>
        <div class="country-data">
            <div class="row">
                <p>Time Zone</p>
            </div>
            <div class="col">
                <p>${this._country.timezones}</p>
            </div>
        </div>
        <div class="country-data" style="margin-bottom: 21px;">
            <div class="row">
                <p>Other Names</p>
            </div>
                <div class="col">
                <table>
                    <tr>
                    <td><b>Spanish</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.spa.official}</td>
                    </tr>
                    <tr>
                    <td><b>French</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.fra.official}</td>
                    </tr>
                    <tr>
                    <td><b>Deutsch</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.deu.official}</td>
                    </tr>
                    <tr>
                    <td><b>Italian</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.ita.official}</td>
                    </tr>
                    <tr>
                    <td><b>Arabic</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.ara.official}</td>
                    </tr>
                    <tr>
                    <td><b>Japanese</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.jpn.official}</td>
                    </tr>
                    <tr>
                    <td><b>Korean</b></td>
                    <td><b>:</b></td>
                    <td>${this._country.translations.kor.official}</td>
                    </tr>
                </table>
            </div>

            </div>
        </div>
    `;
    }
}


customElements.define('country-item', CountryItem);