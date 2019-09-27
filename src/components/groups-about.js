import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import newsFeedComponent from '../../style/news-feed.scss';
import './tags.js';

class groupsAbout extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, newsFeedComponent];
  }

  render() {
    return html`
    `;
  }
}

window.customElements.define('groups-about', groupsAbout);
