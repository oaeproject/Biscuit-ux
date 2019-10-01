import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import newsFeedComponent from '../../style/news-feed.scss';
import tagMenu from '../../style/tag-menu.scss';
import groupsAboutStyle from '../../style/groups-about.scss';

class groupsAbout extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, newsFeedComponent, tagMenu, groupsAboutStyle];
  }

  render() {
    return html`
      <div class="groups-about-box">
        <div class="column groups-wrapper-top is-centered">
          <div class="navbar-brand groups-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>
          </div>
          <div class="group-name">
            <div class="group-name-tag is-inline-flex">
              <span class="icon group-name-icon">
                <iron-icon icon="social:people-outline"></iron-icon>
              </span>
              <h5>Open Apereo 2019</h5>
            </div>
            <h6>Created by Jen Cummings</h6>
          </div>
          <div class="group-join-button">
            <a class="button is-info">
              <span class="icon is-small group-join-icon">
                <iron-icon icon="social:group-add"></iron-icon>
              </span>
              <span>Join Group</span>
            </a>
          </div>
        </div>
        <div class="groups-content-wrapper">
          <hr class="navbar-divider" />
          <div class="group-about-section">
            <h5>About</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div class="group-members">
            <h5>Members</h5>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('groups-about', groupsAbout);
