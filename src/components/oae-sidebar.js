import {html, css} from 'lit-element';
import {PageViewElement} from './page-view-element.js';
import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';


class Sidebar extends PageViewElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <aside class="menu">
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Library</a></li>
          <li><a>Discussions</a></li>
          <li><a>User Settings</a></li>
        </ul>
      </aside>
    `;
  }
}

window.customElements.define('oae-sidebar', Sidebar);
