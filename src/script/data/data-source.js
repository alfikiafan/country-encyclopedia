class DataSource {
  static searchCountry(keyword) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        try {
          const responseJson = JSON.parse(this.responseText);
          if (responseJson) {
            resolve(responseJson);
          } else {
            reject(`${keyword} tidak ditemukan`);
          }
        } catch (e) {
          reject(e.message);
        }
      };
      xhr.onerror = function() {
        reject('Error');
      };
      xhr.open('GET', `https://restcountries.com/v3.1/name/${keyword}`);
      xhr.send();
    });
  }
}

export default DataSource;
