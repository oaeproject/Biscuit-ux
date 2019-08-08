import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class quickSettings extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div class="box info">
        <article class="media">
          <div class="media-content">
            <div class="content info-card">
              <p>
                LAST SIGN IN
              <h3>
               <strong>TUESDAY APRIL 4 2019</strong>
              </h3>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}

window.customElements.define('quick-settings', quickSettings);
