import { html, css, LitElement } from 'lit-element';

class Main extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          flex: 1;
          display: block;
          box-sizing: border-box;
        }
        :host div {
          border: 1px dashed cyan;
        }
      `
    ];
  }

  render() {
    return html`
      <div>
        <section>
          <h2>This is OAE!!</h2>
        </section>
      </div>
    `;
  }
}

window.customElements.define('oae-main', Main);
