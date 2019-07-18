import { html, LitElement } from 'lit-element';
//import {PageViewElement} from './page-view-element.js';
import homepageStyles from './../../style/homepage.scss';
import sharedStyles from './../../style/app.scss';

class navCrumb extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
   
    `
  }
}

window.customElements.define('breadcrumbs', navCrumb);