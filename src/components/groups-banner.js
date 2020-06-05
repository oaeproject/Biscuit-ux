import { html, LitElement } from 'lit-element';
import bannerStyles from '../../style/groups-banner.scss';

class bannerGroups extends LitElement {
  static get styles() {
    return [bannerStyles];
  }

  render() {
    return html`
      <section>
        <figure class="image is-1by3 is-fullwidth banner">
          <img src="https://www.apereo.org/sites/default/files/styles/slider_large/public/OA2020%20Logo%20Flat%20w1200.jpg?itok=qTI6Np7z" />
        </figure>
      </section>
    `;
  }
}

window.customElements.define('groups-banner', bannerGroups);
