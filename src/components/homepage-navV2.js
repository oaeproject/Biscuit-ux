import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import homeNavStyles from '../../style/homepage-navv2.scss';

class homeNavV2 extends LitElement {
  static get styles() {
    return [sharedStyles, landingStyles, homeNavStyles];
  }

  render() {
    return html`
      <nav class="navbar home-nav">
        <div class="navbar-brand">
          <a class="navbar-item logo" href="http://0.0.0.0:8080/oae">
            <img src="/images/logo-01.svg" />
          </a>
        </div>
        <div class="navbar-end navEnd">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-round register-button">Register</a>
              <a class="button is-round signIn-button">Sign In</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

window.customElements.define('home-nav-v2', homeNavV2);
