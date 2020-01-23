import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import calendarStyles from '../../style/calendar.scss';
import sharedStyles from '../../style/app.scss';

class quickSettings extends LitElement {
  static get styles() {
    return [sharedStyles, calendarStyles];
  }

  render() {
    return html`
      <div class="box info calendar-card">
        <article class="media">
          <div class="media-content">
            <div class="content info-card">
              <nav class="level">
                <div class="level-left calendar">
                  <div class="level-item">
                    <span class="card-icon">
                      <iron-icon icon="icons:today"></iron-icon>
                    </span>
                  </div>
                  <div class="level-item calendar-p">
                    <p>Last Sign In</p>
                  </div>
                  <div class="level-item calendar-date">
                    <p>Thursday 4 April 2019</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    `;
  }
}

window.customElements.define('quick-settings', quickSettings);
