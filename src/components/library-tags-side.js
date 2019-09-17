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
            Add New Label
          </a>
        </section>
        <hr class="navbar-divider" />
        <section>
          <span class="is-inline-flex">
            <nav class="level">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                  <p>Redesign</p>
                </div>
              </div>
            </nav>
          </span>
        </section>
        <tags-button></tags-button>
      </div>
    `;
  }
}

window.customElements.define('tags-side', tagsSide);
