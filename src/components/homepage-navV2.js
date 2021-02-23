import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import sharedStyles from '../../style/app.scss';
import homeNavStyles from '../../style/homepage-navv2.scss';
import '../../node_modules/@dannymoerkerke/material-webcomponents/src/material-dialog.js';

class homeNavV2 extends LitElement {

  open_modal(e){
    this.shadowRoot.querySelector('#modal').open();
  }

  close_modal(e){
    this.shadowRoot.querySelector('#modal').close();
  }

  static get styles() {
    return [sharedStyles, homeNavStyles];
  }

  render() {
    return html`
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item logo" href="/oae">
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
                Create account
              </a>
              <span class="navbar-item">
                <a id="open-modal-id" class="button sign-in" @click="${this.open_modal}" ">
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

      <material-dialog id="modal">
        <h1 slot="header">Sign In</h1>
        <p slot="body">
          <input class="input" type="text" placeholder="Email">
          <input class="input" type="password" placeholder="Password" minlength="8" maxlength="12" required>
        </p>
        <div slot="footer" class="footer-buttons">
          <button id="close-modal-id" class="button-close-modal is-right" @click="${this.close_modal}">Sign In</button>
        </div>
      </material-dialog>
    `;
  }
}

window.customElements.define('home-nav-v2', homeNavV2);

