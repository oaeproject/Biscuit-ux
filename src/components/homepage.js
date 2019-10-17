import { html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import { PageViewElement } from './page-view-element.js';
import './homepage-nav.js';
import './homepage-search';
import './homepage-filters.js';
import './homepage-footer.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [sharedStyles, landingStyles];
  }

  render() {
    return html`
      <home-nav></home-nav>
      <section class="hero is-fullheight">
        <div class="hero-body is-gapless">
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
      </section>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
