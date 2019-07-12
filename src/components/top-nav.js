import { html, LitElement } from 'lit-element';
//import {PageViewElement} from './page-view-element.js';
import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';

class topNav extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
         <section>
            <button class="button is-primary is-rounded is-pulled-right">Username</button>
        </section>
        <section>
            <button class="button is-primary is-rounded is-pulled-right">Notifications</button>
        </section>
        <section>
            <button class="button is-primary is-rounded is-pulled-right">Context Change</button>
        </section>
    `;
  }
}

window.customElements.define('top-nav', topNav);
