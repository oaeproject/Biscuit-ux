import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class OAEDiscussions extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
        <h2>This is the user discussions page HAHAHAHAHAHAHAH</h2>
        
      </section>
    `
  }
}
window.customElements.define('user-discussions', OAEDiscussions);

