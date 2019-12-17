import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import infoBox from '../../style/info-box.scss';

class infoCard extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles, infoBox];
  }

  render() {
    return html`
      <div class="box info">
        <div class="content info-card">
          <nav class="level news-feed-top">
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
        </div>
      </div>
    `;
  }
}

window.customElements.define('info-card', infoCard);
