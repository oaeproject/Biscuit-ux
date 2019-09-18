import { html, LitElement } from 'lit-element';
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
          <a class="tag-menu-add-new">
            Add New Label
          </a>
        </section>
        <hr class="navbar-divider" />
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="tag-menu-label">
                Redesign
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item tag-menu-add-new-wrap">
              <a class="button tag-menu-add-new"></a>
            </div>
          </div>
        </nav>
        <tags-button></tags-button>
      </div>
    `;
  }
}

window.customElements.define('tags-side', tagsSide);
