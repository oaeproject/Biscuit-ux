import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class sideTags extends LitElement {
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
          <section class="tag-list">
            <tags-button></tags-button>
            <tags-button></tags-button>
            <tags-button></tags-button>
          </section>
        </div>
      </div>
    `;
  }
}

window.customElements.define('side-tags', sideTags);
