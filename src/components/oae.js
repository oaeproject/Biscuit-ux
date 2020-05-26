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
      <div class="hero-body">
      <div class="container">
          <div class="columns is-vcentered">
              <div class="column is-5 landing-caption left-landing">
                  <h1 class="title is-2 is-bold is-spaced bold-title ">
                    A new way to share, explore and connect</h1>
                  </h1>
                  <h2 class="subtitle is-5"><strong>The Open Academic Environment</strong> is the easiest way to communicate and share files with your classmates. Whether you're a student, investigator or professor, <strong>join us for free!</strong></h2>
                  <home-search-v2></home-search-v2>
                  <div class="button-wrap buttons-landing">
                      <a class="button cta is-rounded primary-btn button-start">
                          Get Started
                      </a>
                      <a class="button cta is-rounded button-filter">
                          Filter Results
                      </a>
                  </div>
              </div>
              <div class="column is-5 landing-image">
                  <figure class="image is-4by5 cover">
                      <img src="images/illustration.svg" alt="Description">
                  </figure>
              </div>

          </div>
      </div>
  </div>

 
</section>


      
    `;
  }
}

window.customElements.define('apereo-oae', OAE);
