import { html, LitElement } from 'lit-element';
import headerStyles from '../../style/groups-header.scss';
import './groups-button.js';

class headerGroups extends LitElement {
  static get styles() {
    return [headerStyles];
  }

  render() {
    return html`
      <section class="title-header">
        <h1>Open Apereo 2020</h1>
      </section>
      <section class="about-header">
        <p>
          The Open Apereo 2020 is scheduled for June 15-19. You’re probably aware of the significant changes to our
          major annual international event, Open Apereo 2020, we were planning this year. If you hadn’t heard about the
          changed shape of the event,
          <a href="https://www.apereo.org/content/open-apereo-2020-vision">you can read about it here.</a>
        </p>
      </section>
    `;
  }
}

window.customElements.define('groups-header', headerGroups);
