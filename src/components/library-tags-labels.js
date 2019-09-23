import { html, LitElement } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import tagMenuLabels from '../../style/tag-menu-labels.scss';

class tagsSideLabels extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, tagMenuLabels];
  }

  render() {
    return html`
      <nav class="level tag-menu-label">
        <div class="level-left">
          <div class="level-item">
            <tags-button></tags-button>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <a class="button tag-menu-button">
              <span class="icon">
                <iron-icon icon="delete"></iron-icon>
              </span>
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

window.customElements.define('tags-side-labels', tagsSideLabels);
