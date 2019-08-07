import { html } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import { PageViewElement } from './page-view-element.js';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <section class="hero is-link is-fullheight">
        <div class="hero-body">
          <div class="container is-fluid is-fullheight is-mobile">
            <div class="columns test">
              <div class="column is-2">
                <aside class="menu">
                  <ul class="menu-list">
                    <li>
                      <a>
                        <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg" />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a>
                        <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg" />
                        Library</a
                      >
                    </li>
                    <li>
                      <a>
                        <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg" />
                        Discussions</a
                      >
                    </li>
                    <li>
                      <a>
                        <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg" />
                        User Settings</a
                      >
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="column content-base">
                <div class="column top-nav">
                  <section>
                    <button class="button is-primary is-rounded is-pulled-right">Username</button>
                  </section>
                  <section>
                    <button class="button is-primary is-rounded is-pulled-right">Notifications</button>
                  </section>
                  <section>
                    <button class="button is-primary is-rounded is-pulled-right">Context Change</button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
