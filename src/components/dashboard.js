import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import sharedStyles from './../../style/app.scss';
import './sidebar.js';
import './top-nav.js';
//import './crumbs.js';


class OAEDashboard extends PageViewElement {
  static get styles() {
    return [sharedStyles];
  }

  render() {
    return html`
    <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container is-fluid is-fullheight is-mobile">
        <div class="columns test">
        <div class="column is-narrow"> 
          <sidebar-nav></sidebar-nav>
          </div>
          <div class="column content-base">  
          <div class="column top-nav">
            <top-nav></top-nav>
          </div>
          
         </div>
        </div>
      </div>
    </div>
</section>


    `;
  }
}
window.customElements.define('user-dashboard', OAEDashboard);
