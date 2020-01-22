import { html, LitElement } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import tagComponent from '../../style/tag-component.scss';

class tagsButton extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, tagComponent];
  }

  render() {
    return html`
      <div class="tag-structure is-inline-flex">
        <p class="buttons tag-buttons">
          <a class="button is-small is-rounded tag-button-colors">
            <span class="icon tag-icons">
              <iron-icon icon="label-outline"></iron-icon>
            </span>
            <span class="tag-label">class project</span>
          </a>
        </p>
      </div>
    `;
  }
}

window.customElements.define('tags-button', tagsButton);
