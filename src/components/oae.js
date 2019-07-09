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

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import './oae-main.js';
import './oae-header.js';
import './oae-sidebar.js';
import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';

// These are the shared styles needed by this element.
// import {SharedStyles} from './shared-styles.js';

class OAE extends PageViewElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <div>
        <oae-header> </oae-header>
        <div id="main">
          <oae-sidebar> </oae-sidebar>
          <oae-main> </oae-main>
        </div>
      </div>
    `;
  }
}

window.customElements.define('apereo-oae', OAE);
