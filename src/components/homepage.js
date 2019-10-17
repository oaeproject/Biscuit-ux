import { html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import { PageViewElement } from './page-view-element.js';
import './homepage-nav.js';
import './homepage-search';
import './homepage-filters.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [sharedStyles, landingStyles];
  }

  render() {
    return html`
      <home-nav></home-nav>
      <div class="columns is-gapless is-flex">
        <div class="column home-leftCol">
          <div class="home-right">
            <h1 class="home-title">Welcome to the OAE</h1>
            <h6>
              Try searching for tags like "meeting" or "document"
            </h6>
            <home-search></home-search>
            <home-filters></home-filters>
          </div>
        </div>
        <div class="column is-5">
          <figure class="image home-img is-16by9">
            <img
              src="https://images.pexels.com/photos/356086/pexels-photo-356086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </figure>
        </div>
      </div>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
