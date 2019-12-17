import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import dashboardStyles from '../../style/dashboard.scss';
import { PageViewElement } from './page-view-element.js';
import '@polymer/iron-icons/iron-icons.js';
import './sidebar.js';
import './top-nav.js';
import './info-card.js';
import './tag-card.js';
import './news-feed.js';
import './quick-settings.js';
import './tags.js';

class OAEDashboard extends PageViewElement {
  static get styles() {
    return [sharedStyles, dashboardStyles];
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
                    <div class="column is-three-fifths main-left">
                      <section class="column activity-dashboard">
                        <section class="is-flex">
                          <ul class="breadcrumb">
                            <li><a href="#">User Profile Area</a></li>
                            <li>Dashboard</li>
                          </ul>
                        </section>
                        <section class="is-flex">
                          <span class="dashboard-icon">
                            <iron-icon icon="icons:update"></iron-icon>
                          </span>
                          <h3>Recent Activity</h3>
                        </section>
                        <news-feed></news-feed>
                        <news-feed></news-feed>
                        <news-feed></news-feed>
                      </section>
                    </div>
                    <div class="column">
                      <quick-settings></quick-settings>
                      <info-card></info-card>
                      <tag-card></tag-card>
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
