import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import { PageViewElement } from './page-view-element.js';
import './sidebar.js';
import './top-nav.js';
import './info-cards.js';
import './tag-cards.js';
import './news-feed.js';

class OAEDashboard extends PageViewElement {
  static get styles() {
    return [sharedStyles];
  }

  render() {
    return html`
      <section class="hero is-link is-fullheight">
        <div class="hero-body">
          <div class="container is-fluid is-fullheight is-mobile">
            <div class="columns dasboard">
              <div class="column is-narrow sidebar">
                <sidebar-nav></sidebar-nav>
              </div>
              <div class="column content-base">
                <div class=" column content-wrap">
                  <div class="column top-nav">
                    <top-nav></top-nav>
                  </div>
                  <div class=" columns is-flex main-content">
                    <div class="column is-two-thirds">
                      <section class="column is-inline-flex">
                        <info-cards></info-cards>
                        <tag-cards></tag-cards>
                      </section>
                      <section class="column activity-dashboard">
                        <h3>RECENT ACTIVITY</h3>
                        <news-feed></news-feed>
                      </section>
                    </div>
                    <div class="column">
                      <info-cards></info-cards>
                      <info-cards></info-cards>
                      <info-cards></info-cards>
                      <info-cards></info-cards>
                      <info-cards></info-cards>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
window.customElements.define('user-dashboard', OAEDashboard);
