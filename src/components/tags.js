import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class tagsButton extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div class="tag-structure is-inline-flex">
        <p class="buttons tag-buttons">
          <a class="button is-small is-rounded tag-button-colors">
            <span class="icon tag-icons">
              <img src="./../../node_modules/@mdi/svg/svg/tag-text-outline.svg" />
            </span>
            <span class="tag-label">class project</span>
          </a>
        </p>
      </div>
    `;
  }
}

window.customElements.define('tags-button', tagsButton);
