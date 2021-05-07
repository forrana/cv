customElements.define('key-value',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('key-value');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
);
