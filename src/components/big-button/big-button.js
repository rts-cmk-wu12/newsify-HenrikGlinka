require('./big-button.scss');

class BigButton {

    #button = null;

    constructor(text = '', filled = false) {
        this.button = document.createElement('button');
        this.button.classList.add('big-button');
        this.button.textContent = text;

        if (filled) this.button.classList.add('big-button--filled');

        return this.button;
    }
    
}

module.exports = BigButton;