/**
 * Define helper
 */

class LocalStorage {
  static addCard(list, title) {
    let lists = JSON.parse(localStorage.getItem('lists'));

    if (list in lists) {
      lists[list] = lists[list].concat(title);
    }

    localStorage.setItem('lists', JSON.stringify(lists));
  }

  static clearAllCards(list, title) {
    const lists = JSON.parse(localStorage.getItem('lists'));

    const empty = Object.keys(lists).reduce((obj, list) => {
      obj[list] = [];
      return obj;
    }, {})

    localStorage.setItem('lists', JSON.stringify(empty));
  }
}

/**
 * Export helper
 */

export default LocalStorage;
