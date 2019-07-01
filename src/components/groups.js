import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class OAEGroups extends PageViewElement {
  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <h2>Groups go here</h2>
      </section>
    `;
  }
}
window.customElements.define('user-groups', OAEGroups);
