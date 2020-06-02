import { html, LitElement } from 'lit-element';
import avatarStyles from '../../style/groups-avatar.scss';

class avatarGroups extends LitElement {
  static get styles() {
    return [avatarStyles];
  }

  render() {
    return html`
      <section>
        <figure class="image is-128x128">
          <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </section>
    `;
  }
}

window.customElements.define('groups-avatar', avatarGroups);
