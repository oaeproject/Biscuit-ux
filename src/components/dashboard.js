import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import dashboardStyles from '../../style/dashboard.scss';
import dashboardButtonsStyles from '../../style/dashboard-filter.scss';
import { PageViewElement } from './page-view-element.js';
import '@polymer/iron-icons/iron-icons.js';
import './sidebarV2.js';
import './top-navV2.js';
import './info-card.js';
import './tag-card.js';
import './news-feed.js';
import './quick-settings.js';
import './tags.js';

class OAEDashboard extends PageViewElement {
  static get styles() {
    return [sharedStyles, dashboardStyles, dashboardButtonsStyles];
  }

  render() {
    return html`
      <section class="hero is-fullheight">
        <div class="hero-body is-fullheight">
          <div class="container content-wrapResponsive is-fluid">
            <div class="columns dasboard">
              <div class="column is-narrow sidebar is-fullheight">
                <sidebar-nav2></sidebar-nav2>
              </div>
              <div class="column content-base">
                <div class=" column content-wrap">
                  <div class="column top-nav">
                    <top-nav2></top-nav2>
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
                        <nav class="level">
                          <!-- Left side -->
                          <div class="level-left">
                            <div class="level-item">
                              <span class="dashboard-icon">
                                <iron-icon icon="icons:update"></iron-icon>
                              </span>
                              <h3>Recent Activity</h3>
                            </div>
                          </div>
                          <!-- Right side -->
                          <div class="level-right">
                            <div class="buttons">
                              <button class="button filter-feed filter-active-feed">Most Recent</button>
                              <button class="button filter-feed">Oldest</button>
                            </div>
                          </div>
                        </nav>
                        <news-feed></news-feed>
                        <news-feed></news-feed>
                        <news-feed></news-feed>
                      </section>
                    </div>
                    <div class="column">
                      <info-card></info-card>
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
