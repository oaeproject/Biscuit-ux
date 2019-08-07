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
        <article class="media">
          <div class="media-content">
            <div class="content info-card">
              <h3>
                <strong>TAGS AND LABELS</strong>
              </h3>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}

window.customElements.define('tag-cards', tagCards);
