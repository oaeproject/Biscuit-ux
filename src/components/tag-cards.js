import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class tagCards extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div class="box tags">
        <div class="content info-card">
          <h3>
            <strong>TAGS AND LABELS</strong>
          </h3>
          <p class="buttons tag-buttons">
            <a class="button is-small is-rounded tag-button-colors">
              <span class="icon tag-icons">
                <img src="./../../node_modules/@mdi/svg/svg/tag-text-outline.svg" />
              </span>
              <span class="tag-label">class project</span>
            </a>
          </p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('tag-cards', tagCards);
