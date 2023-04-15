import '../component/country-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const countryListElement = document.querySelector('country-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCountry(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    countryListElement.country = results;
  };

  const fallbackResult = message => {
    countryListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;