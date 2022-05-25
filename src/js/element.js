export class picture extends HTMLPictureElement {
    constructor () {
        super();
        this.#shadowRoot = this.attachShadow({ mode: 'open' });
    }
}