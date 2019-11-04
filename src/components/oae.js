/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* eslint-disable import/no-unassigned-import */

import { html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import sharedStyles from '../../style/app.scss';
import landingStyles from '../../style/landing-page.scss';
import homeV2Styles from '../../style/homepage-v2.scss';
import { PageViewElement } from './page-view-element.js';
import './homepage-navV2.js';
import './homepage-searchV2.js';
import './homepage-filters.js';
import './homepage-footer.js';

class OAE extends PageViewElement {
  static get styles() {
    return [sharedStyles, landingStyles, homeV2Styles];
  }

  render() {
    return html`
      <home-nav-v2></home-nav-v2>
      <section class="hero is-fullheight">
        <div class="hero-body is-gapless">
          <div class="column home-leftCol">
            <div class="home-rightv2">
              <h1 class="home-titlev2">Explore and work together with the OAE</h1>
              <h6 class="home-h6v2">
                Try searching for tags like "meeting" or "document"
              </h6>
              <home-search-v2></home-search-v2>
              <home-filters></home-filters>
            </div>
          </div>
          <div class="column is-5">
          </div>
          </div>
        </div>
      </section>
      <home-footer></home-footer>

      
    `;
  }
}

window.customElements.define('apereo-oae', OAE);
