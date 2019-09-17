import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';

class tagsSide extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div class="small-device-tags">
        <section class="is-flex">
          <a class="tag-activity-dashboard">
            ADD LABEL
          </a>
        </section>
        <hr class="navbar-divider" />
        <section>
          <span class="is-inline-flex">
            <tags-button></tags-button>
          </span>
        </section>
      </div>
    `;
  }
}

window.customElements.define('tags-side', tagsSide);
