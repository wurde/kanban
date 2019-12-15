/**
 * Define helper
 */

class LocalStorage {
  static addCard(listIndex, title) {
    const data = JSON.parse(localStorage.getItem('lists'));
    const lists = Object.keys(data);
    const i = listIndex;

    data[lists[i]] = data[lists[i]].concat(title);

    localStorage.setItem('lists', JSON.stringify(data));
  }

  static moveCard(fromListIndex, toListIndex, title) {
    const data = JSON.parse(localStorage.getItem('lists'));
    const lists = Object.keys(data);
    const from_i = fromListIndex;
    const to_i = toListIndex;

    data[lists[from_i]] = data[lists[from_i]].filter(card => card !== title);
    data[lists[to_i]] = [title].concat(data[lists[to_i]]);

    localStorage.setItem('lists', JSON.stringify(data));
  }

  static clearAllCards() {
    const data = JSON.parse(localStorage.getItem('lists'));

    const empty = Object.keys(data).reduce((obj, list) => {
      obj[list] = [];
      return obj;
    }, {});

    localStorage.setItem('lists', JSON.stringify(empty));
  }
}

/**
 * Export helper
 */

export default LocalStorage;
