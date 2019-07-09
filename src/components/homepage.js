import {html, css} from 'lit-element';
import {PageViewElement} from './page-view-element.js';
import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';

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
                    <li><a>Dashboard</a></li>
                    <li><a>Library</a></li>
                    <li><a>Discussions</a></li>
                    <li><a>User Settings</a></li>
                  </ul>
              </aside>
            </div>
            <div class="column content-base">  
            </div>
          </div>
        </div>
      </div>
  </section>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
