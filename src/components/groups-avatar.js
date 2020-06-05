import { html, LitElement } from 'lit-element';
import avatarStyles from '../../style/groups-avatar.scss';


class avatarGroups extends LitElement {
  static get styles() {
    return [avatarStyles];
  }

  render() {
    return html`
      <section class="avatar">
        <figure class="image is-128x128 avatar-figure">
          <img class="is-rounded" src="/images/landing-img.jpg" />
        </figure>
      </section>
    `;
  }
}

window.customElements.define('groups-avatar', avatarGroups);
