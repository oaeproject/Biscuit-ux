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
          <img class="is-rounded" src="https://scontent.fopo1-1.fna.fbcdn.net/v/l/t1.0-9/537484_224892540989084_1267897031_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=XFXRaFbyn0AAX84b7iF&_nc_ht=scontent.fopo1-1.fna&oh=a63ebf898d71c55443aab13cb60ce95d&oe=5EFFF95A" />
        </figure>
      </section>
    `;
  }
}

window.customElements.define('groups-avatar', avatarGroups);
