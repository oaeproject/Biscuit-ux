import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class OAELibrary extends PageViewElement {
  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <h2>This is the user library</h2>
      </section>
    `;
  }
}
window.customElements.define('user-library', OAELibrary);
