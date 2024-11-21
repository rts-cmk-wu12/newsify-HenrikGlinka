require('./_scrollbar.scss');

class Scrollbar extends EventTarget {

    #element = null;

    get element() { return this.#element; }

  constructor(stops = 1) {

    super();

    this.#element = document.createElement('div');
    this.#element.classList.add('scrollbar');

    for (let i = 0; i < stops; i++) {
      const labelElement = document.createElement('label');
      const radioElement = document.createElement('input');
      
      labelElement.classList.add('scrollbar__label');
      radioElement.classList.add('scrollbar__radio');

      radioElement.type = 'radio';
      radioElement.name = 'scrollbar';

      radioElement.value = i;

      if (i === 0) radioElement.setAttribute('checked', '');

      radioElement.addEventListener('change', () => this.dispatchEvent(new CustomEvent('change', { detail: i })));

      labelElement.append(radioElement);
      this.#element.append(labelElement);
    }
  }

  goto(index) {
    if (index >= 0 && index < this.#element.children.length) {
      this.#element.children[index].children[0].checked = true;

      return true;
    }

    return false;
  }
}

module.exports = Scrollbar;