/**
 * Define helper
 */

class LocalStorage {
  static moveCard(fromListIndex, toListIndex, title) {
    const data = JSON.parse(localStorage.getItem('lists'));
    const lists = Object.keys(data);
    const from_i = fromListIndex;
    const to_i = toListIndex;

    data[lists[from_i]] = data[lists[from_i]].filter(card => card !== title);
    data[lists[to_i]] = [title].concat(data[lists[to_i]]);

    localStorage.setItem('lists', JSON.stringify(data));
  }
}

/**
 * Export helper
 */

export default LocalStorage;
