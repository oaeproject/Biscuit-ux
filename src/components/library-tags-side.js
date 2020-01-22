import { html, LitElement } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './library-tags-labels.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import tagMenu from '../../style/tag-menu.scss';

class tagsSide extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, tagMenu];
  }

  render() {
    return html`
      <div>
        <section class="is-flex tag-menu-add-new-wrap">
          <div class="level-left">
            <div class="level-item">
              <a class="add-menu-label">
                Add New Label
              </a>
            </div>
          </div>
        </section>
        <hr class="navbar-divider" />
        <nav class="level tag-menu-label-top">
          <div class="level-left">
            <div class="level-item">
              <p class="tag-menu-label">
                Redesign
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a class="button tag-menu-button">
                <span class="icon">
                  <iron-icon icon="add"></iron-icon>
                </span>
              </a>
            </div>
            <div class="level-item">
              <a class="button tag-menu-button">
                <span class="icon">
                  <iron-icon icon="create"></iron-icon>
                </span>
              </a>
            </div>
          </div>
        </nav>
        <tags-side-labels></tags-side-labels>
      </div>
    `;
  }
}

window.customElements.define('tags-side', tagsSide);
