import { html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import sharedStyles from '../../style/app.scss';
import groupStyles from '../../style/groups.scss';
import groupButtonStyles from '../../style/groups-filter.scss';
import { PageViewElement } from './page-view-element.js';
import './top-nav.js';
import './sidebar.js';
import './groups-banner.js';
import './groups-avatar.js';
import './groups-tabs.js';
import './groups-feed.js';
import './groups-about.js';
import './news-feed.js';
import './quick-settings.js';
import './tags.js';

class OAEGroups extends PageViewElement {
  static get styles() {
    return [sharedStyles, groupStyles, groupButtonStyles];
  }

  render() {
    return html`
      <section class="hero is-fullheight">
        <div class="hero-head">
          <top-nav></top-nav>
        </div>

        <div class="hero-body">
          <div class="container content-wrapResponsive is-fluid">
            <div class="columns dasboard">
              <div class="column is-narrow sidebar">
                <sidebar-nav></sidebar-nav>
              </div>
              <div class="column content-base">
                <div class=" column content-wrap">
                  <div class=" columns is-flex main-content">
                    <div class="column is-three-fifths">
                      <section class="is-flex">
                        <ul class="breadcrumb">
                          <li><a href="#">Groups</a></li>
                          <li>Open Apereo 2019</li>
                        </ul>
                      </section>

                      <groups-banner></groups-banner>
                      <groups-avatar></groups-avatar>
                      <groups-tabs></groups-tabs>

                      <section>
                        <div class="level">
                          <!-- Left side -->
                          <div class="level-left">
                            <div class="level-item activity">
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
                        </div>
                      </section>
                      
                      <news-feed></news-feed>
                      <news-feed></news-feed>
                      <news-feed></news-feed>
                    </div>
                    <div class="column is-one-fifth">
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
