import { html, LitElement } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import infoBox from '../../style/info-box.scss';
import './followers.js';

class infoCard extends LitElement {
  static get styles() {
    return [sharedStyles, infoBox];
  }

  render() {
    return html`
      <div class="box info">
        <div class="content info-card">
          <followers-list></followers-list>
          <followers-list></followers-list>
          <followers-list></followers-list>
          <followers-list></followers-list>
        </div>
      </div>
    `;
  }
}

window.customElements.define('info-card', infoCard);
