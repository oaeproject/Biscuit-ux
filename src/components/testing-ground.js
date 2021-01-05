import { html } from 'lit-element';
import sharedStyles from '../../style/testing-styles.scss';
import { PageViewElement } from './page-view-element.js';
import '@polymer/iron-icons/iron-icons.js';
import './news-feed.js';
import './sidebar.js';

class Test extends PageViewElement {
  static get styles() {
    return [sharedStyles];
  }

  render() {
    return html`
      <div class="container main-container">
        <div class="columns columns-container">
          <div class="column is-one-quarter sidebar">
            <div class="menu sticky">
            <sidebar-nav></sidebar-nav>
            </div>
          </div>
          <div class="column is-three-fifths main-content">
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
            <news-feed></news-feed>
          </div>
          <div class="column options">
            <div class="menu sticky">
              <p class="menu-label"><b>Quick Links</b></p>
              <ul id="menu" class="menu-list">
                <li><a href="#basic">Basic SEO Checklist</a></li>
                <li><a href="#keyword">Keyword Research Checklist</a></li>
                <li><a href="#onpage">On-Page SEO Checklist</a></li>
                <li><a href="#content">Content Checklist</a></li>
                <li><a href="#technical">Technical SEO Checklist</a></li>
                <li><a href="#link">Link Building Checklist</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
window.customElements.define('dev-testing', Test);
