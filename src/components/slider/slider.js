require('./_slider.scss');

class Slider extends EventTarget {

    #element = null;
    #currentSlide = null;

    get element() { return this.#element; }

    constructor() {

        super();

        this.#element = document.createElement('div');
        this.#element.classList.add('slider');

        this.#currentSlide = 0;
    }

    add(image, title, text) {
        const slideElement = document.createElement('div');
        const imageElement = document.createElement('img');
        const titleElement = document.createElement('h2');
        const textElement = document.createElement('p');

        slideElement.classList.add('slider__slide');
        imageElement.classList.add('slider__image');
        titleElement.classList.add('slider__title');
        textElement.classList.add('slider__text');

        imageElement.src = image;
        titleElement.innerHTML = title;
        textElement.innerHTML = text;

        slideElement.append(imageElement, titleElement, textElement);

        this.#element.append(slideElement);
    }

    goto(index) {
        this.dispatchEvent(new CustomEvent('change', { detail: index }));

        if (index >= 0 && index < this.#element.children.length) {
            this.#currentSlide = index;
            this.#element.scrollTo(this.#element.clientWidth * this.#currentSlide, 0);

            return true;
        }

        return false;
    }

    next() {
        return this.goto(this.#currentSlide + 1);
    }

    previous() {
        return this.goto(this.#currentSlide - 1);
    }


}

module.exports = Slider;