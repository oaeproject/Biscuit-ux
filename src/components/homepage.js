import {html, css} from 'lit-element';
import {PageViewElement} from './page-view-element.js';
// import {SharedStyles} from './shared-styles.js';

import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';
import legacyStyles from '../../style/legacy.css';

class OAEHomepage extends PageViewElement {
  static get styles() {
    // return [SharedStyles];
    return [homepageStyles, sharedStyles, legacyStyles];
  }

  render() {
    return html`
      <style include="legacy"></style>
      <style include="homepage"></style>
      <style include="app"></style>
      <section>
        <h2>This is the homepage</h2>
        <button class="foo-button mdc-button">Button</button>
      </section>
    `;
  }
}
window.customElements.define('oae-landing-page', OAEHomepage);
