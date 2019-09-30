import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import { PageViewElement } from './page-view-element.js';
import './sidebar.js';
import './top-nav.js';
import './info-card.js';
import './tag-card.js';
import './groups-feed.js';
import './groups-about.js';
import './quick-settings.js';
import './tags.js';

class OAEGroups extends PageViewElement {
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
                      <section class="column is-inline-flex"></section>
                      <section class="column activity-dashboard">
                        <section class="is-flex">
                          <span class="icon tag-activity-dashboard">
                            <img src="./../../node_modules/@mdi/svg/svg/tag-text-outline.svg" />
                          </span>
                          <h3>RECENT ACTIVITY</h3>
                        </section>
                        <groups-feed></groups-feed>
                      </section>
                    </div>
                    <div class="column">
                      <groups-about></groups-about>
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
window.customElements.define('user-groups', OAEGroups);
