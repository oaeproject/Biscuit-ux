import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import library from '../../style/library.scss';
import { PageViewElement } from './page-view-element.js';
import '@polymer/iron-icons/iron-icons.js';
import './sidebarV2.js';
import './top-navV2.js';
import './info-card.js';
import './tag-card.js';
import './news-feed.js';
import './quick-settings.js';
import './tags.js';
import './library-tags-side.js';
import './library-table.js';

class OAELibrary extends PageViewElement {
  static get styles() {
    return [sharedStyles, library];
  }

  render() {
    return html`
      <section class="hero is-fullheight">
        <div class="hero-body is-fullheight">
          <div class="container content-wrapResponsive is-fluid">
            <div class="columns dasboard">
              <div class="column is-narrow sidebar">
                <sidebar-nav2></sidebar-nav2>
              </div>
              <div class="column content-base">
                <div class=" column content-wrap">
                  <div class="column top-nav">
                    <top-nav2></top-nav2>
                  </div>
                  <div class=" columns is-flex main-content">
                    <div class="column is-four-fifths main-left">
                      <section class="column activity-dashboard">
                        <section class="is-flex">
                          <ul class="breadcrumb">
                            <li><a href="#">User Profile Area</a></li>
                            <li>Library</li>
                          </ul>
                        </section>
                        <div class="is-inline-flex">
                          <div>
                            <a class="button library-button">
                              <span class="icon is-medium">
                                <iron-icon icon="delete"></iron-icon>
                              </span>
                            </a>
                          </div>
                          <div>
                            <a class="button library-button">
                              <span class="icon">
                                <iron-icon icon="list"></iron-icon>
                              </span>
                            </a>
                          </div>
                        </div>
                        <library-table></library-table>
                      </section>
                    </div>
                    <div class="column is-one-fifth is-pulled-right">
                      <tags-side></tags-side>
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
window.customElements.define('user-library', OAELibrary);
