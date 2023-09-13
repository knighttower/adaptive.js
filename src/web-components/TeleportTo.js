import Teleport from '@knighttower/js-teleport';

class TeleportTo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let target = this.getAttribute('target');
        let position = this.getAttribute('position') ?? 'to';
        let dId = this.getAttribute('data-adaptive-id');

        if (target && !dId) {
            return new Teleport(this).beam(`${position}(${target})`);
        }
    }
}

customElements.define('teleport-to', TeleportTo);
