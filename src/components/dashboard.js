import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class OAEDashboard extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>dfghgjgh incomplete dashboard!</h2>
        
      </section>
    `
  }
}
window.customElements.define('user-dashboard', OAEDashboard);

