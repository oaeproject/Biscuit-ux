import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import sharedStyles from './../../style/app.scss';

class OAEDashboard extends PageViewElement {
  static get styles() {
    return [sharedStyles];
  }

  render() {
    return html`
      <h2>Sou provavelmente o maior da minha aldeia em CSS :)</h2>
      <section>
        <h2>dfghgjgh incomplete dashboard!</h2>
      </section>
    `;
  }
}
window.customElements.define('user-dashboard', OAEDashboard);
