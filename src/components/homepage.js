import {html, css} from 'lit-element';
import {PageViewElement} from './page-view-element.js';

import homepageStyles from './../../style/homepage.scss';
import legacyStyles from '../../style/legacy.css';

class OAEHomepage extends PageViewElement {
  static get styles() {
    return [homepageStyles /*, sharedStyles */, legacyStyles];
  }

  render() {
    return html`
      <style include="legacy"></style>
      <style include="homepage"></style>
      <h1 class="title">
        Bulma
      </h1>

      <p class="subtitle">
        Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
      </p>

      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Input">
        </div>
      </div>

      <div class="field">
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div class="buttons">
        <a class="button is-primary">Primary</a>
        <a class="button is-link">Link</a>
      </div>
    `;
  }
}

window.customElements.define('oae-landing-page', OAEHomepage);
