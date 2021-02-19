import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import sharedStyles from '../../style/app.scss';
import homeNavStyles from '../../style/homepage-navv2.scss';
//import '../../node_modules/@dannymoerkerke/material-webcomponents/src/material-button.js';


class homeNavV2 extends LitElement {
  static get styles() {
    return [sharedStyles, homeNavStyles];
  }

  render() {
    return html`
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item logo" href="http://0.0.0.0:8080/oae">
              <img src="/images/logo-01.svg" />
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active register">
                Register
              </a>
              <span class="navbar-item">
                <a href="#modal-one" class="button sign-in btn btn-big" ">
                  <span class="icon account-icon">
                    <iron-icon icon="account-circle"></iron-icon>
                  </span>
                  <span>Sign In</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

window.customElements.define('home-nav-v2', homeNavV2);
