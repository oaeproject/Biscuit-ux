import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import sharedStyles from './../../style/app.scss';

class OAEDashboard extends PageViewElement {
  static get styles() {
    return [sharedStyles];
  }

  render() {
    return html`
    <div class="columns is-mobile">
    <div class="column">1</div>
    <div class="column">2</div>
    <div class="column">3</div>
    <div class="column">4</div>
  </div>


    `;
  }
}
window.customElements.define('user-dashboard', OAEDashboard);
