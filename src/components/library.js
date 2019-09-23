import { html } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import library from '../../style/library.scss';
import { PageViewElement } from './page-view-element.js';
import './sidebar.js';
import './top-nav.js';
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
      <section class="hero is-link is-fullheight">
        <div class="hero-body">
          <div class="container is-fluid is-fullheight">
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
                    <div class="column is-three-quarters">
                      <section class="column activity-dashboard">
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
                    <div class="column is-one-fifth">
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
