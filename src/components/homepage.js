import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
    <link rel="stylesheet" href="bundle.css">
      <body>
        <button class="foo-button mdc-button">
        Login
        </button>
      </body>
    `
  }
}
window.customElements.define('oae-landing-page', OAEHomepage);

