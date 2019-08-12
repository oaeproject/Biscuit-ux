import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class infoCard extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div class="box info">
        <article class="media">
          <div class="media-content">
            <div class="content info-card">
              <h3>
                <strong>USER DASHBOARD</strong>
              </h3>
              <p>
                Welcome to your dashboard. From here, you can access different sections of the OAE.
              </p>
              <hr class="navbar-divider" />
              <a>
                Open Link
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}

window.customElements.define('info-card', infoCard);
