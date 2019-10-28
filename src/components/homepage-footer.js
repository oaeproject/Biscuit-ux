import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import homeFooterStyles from '../../style/homepage-footer.scss';

class homeFooter extends LitElement {
  static get styles() {
    return [sharedStyles, landingStyles, homeFooterStyles];
  }

  render() {
    return html`
      <footer class="footer">
        <div class="content has-text-centered">
          <p>© Apereo Foundation 2019 All Rights Reserved</p>
        </div>
      </footer>
    `;
  }
}

window.customElements.define('home-footer', homeFooter);
