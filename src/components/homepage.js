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
      <section>
        <h2>This is the homepage</h2>
        
      </section>
    `
  }
}
window.customElements.define('oae-landing-page', OAEHomepage);

