import { html, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import sharedStyles from '../../style/app.scss';
import infoBox from '../../style/info-box.scss';

class followersList extends LitElement {
  static get styles() {
    return [sharedStyles, infoBox];
  }

  render() {
    return html`
    <nav class="level followers-top">
        <div class="level-left">
            <div class="level-item">
                <div class="column is-flex news-feed-nav">
                    <figure class="image avatar-news-feed">
                        <img class="is-rounded avatar-news-feed" src="/images/avatar.jpg" />
                    </figure>
                    <section class=infoBox-followers">
                        <h4>
                            <a class="feed-user">Michael Brown</a>
                        </h4>
                        <p>
                            Following since October 2019
                        </p>
                    </section>
                </div>
            </div>
        </div>
        </hr>
    </nav>
    `;
  }
}

window.customElements.define('followers-list', followersList);
