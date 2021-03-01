import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import newsFeedComponent from '../../style/news-feed.scss';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/av-icons.js';
import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import './tags.js';

class newsFeed extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, newsFeedComponent];
  }

  render() {
    return html`
      <div class="box box-feed">
        <div class="content news-feed">
          <nav class="level news-feed-top">
            <div class="level-left">
              <div class="level-item">
                <div class="column is-flex news-feed-nav">
                  <figure class="image avatar-news-feed">
                    <img class="is-rounded avatar-news-feed" src="/images/avatar.jpg" />
                  </figure>
                  <section>
                    <p class="user-info" style="margin-bottom: 0;">
                      <a class="feed-user">Michael Brown</a>
                      uploaded a file
                      <span class="panel-icon icon-feed">
                        <iron-icon icon="icons:cloud-upload"></iron-icon>
                      </span>
                    </p>
                    <p>
                      23 March 2017
                    </p>
                  </section>
                </div>
              </div>
            </div>
            <div class="level-right">
              <p class="level-item">
                <button class="button news-pin">
                  <iron-icon icon="icons:more-vert"></iron-icon>
                </button>
              </p>
            </div>
          </nav>
          <section class="column news-feed-message">
            <h5>
              Group assignment briefing
            </h5>
            <p>
              Here is the briefing for that group assignment we talked about.
            </p>
            <tags-button></tags-button>
          </section>
          <nav class="level bottom-nav-news">
            <div class="level-left">
              <div class="level-item">
                <a class="button comments-button">
                  <span class="comments-icon">
                    <iron-icon icon="account-circle"></iron-icon>
                  </span>
                  <span>View (25) comments</span>
                </a>
              </div>
              <div class="level-item">
                <a class="button reply-button">
                  <span class="reply-icon">
                    <iron-icon icon="communication:import-export"></iron-icon>
                  </span>
                  <span>Reply</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    `;
  }
}

window.customElements.define('news-feed', newsFeed);
