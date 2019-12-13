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

  static removeCard(list, title) {
    let lists = JSON.parse(localStorage.getItem('lists'));

    if (list in lists) {
      lists[list] = lists[list].filter(card => card !== title);
    }

    localStorage.setItem('lists', JSON.stringify(lists));
  }
}

/**
 * Export helper
 */

export default LocalStorage;
