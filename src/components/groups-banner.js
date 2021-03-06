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
          <img src="https://images.pexels.com/photos/3184660/pexels-photo-3184660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </figure>
      </section>
    `;
  }
}

window.customElements.define('groups-banner', bannerGroups);
