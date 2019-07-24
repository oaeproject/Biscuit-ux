import { html, LitElement } from 'lit-element';
import homepageStyles from "../../style/homepage.scss";
import sharedStyles from "../../style/app.scss";

class infoCards extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div class="box">
        <article class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>DASHBOARD</strong> <small></small> <small></small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
                egestas. Nullam condimentum luctus turpis.
              </p>
              <hr class="navbar-divider">
            </nav>
          </div>
        </article>
      </div>
    `;
  }
}

window.customElements.define('info-cards', infoCards);
