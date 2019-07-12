import { html, LitElement } from 'lit-element';
//import {PageViewElement} from './page-view-element.js';
import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';

class Sidebar extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
            
            <aside class="menu">
            <ul class="menu-list">
                <li><a>
                <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg"/>
                Dashboard
                </a></li>
                <li><a>
                <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg"/>
                Library</a></li>
                <li><a>
                <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg"/>
                Discussions</a></li>
                <li><a>
                <img class="sidebar" src="./../../node_modules/@mdi/svg/svg/view-dashboard-outline.svg"/>
                User Settings</a></li>
            </ul>
            </aside>
            
    `;
  }
}

window.customElements.define('sidebar-nav', Sidebar);
