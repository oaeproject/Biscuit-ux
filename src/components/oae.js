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
import sharedStyles from '../../style/app.scss';
import homepageStyles from '../../style/homepage-v2.scss';
import './homepage-navV2.js';
import { PageViewElement } from './page-view-element.js';

class OAE extends PageViewElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
      <section class="hero is-primary is-medium">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
          <home-nav-v2></home-nav-v2>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body main-area">


          <input type="checkbox" id="toggle" />
          <label for="toggle">Sign In</label>
          <dialog>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad
              blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est
              iusto!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad
              blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est
              iusto!
            </p>
            <label for="toggle" class="close-dialog pull-right">Close</label>
          </dialog>





          

          <div class="container has-text-centered is-centered">
            <p class="title homepage-title">
              A new way to share, explore and connect
            </p>
            <div class="search-input is-centered">
              <input class="input" type="text" placeholder="Search Here" />
            </div>
          </div>
        </div>

        <!-- Hero content: will be in the middle 
        <div class="hero-body section1-area">
          <div class="container has-text-centered is-centered">
            <p class="subtitle">
              The Open Academic Environment is the easiest way to communicate and share files with your classmates.
              Whether you're a student, investigator or professor, join us for free!
            </p>
          </div>
        </div>
      </section>
      -->
      </section>
    `;
  }
}

window.customElements.define('apereo-oae', OAE);
