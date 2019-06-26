import { html, css, LitElement } from 'lit-element';

const USER_TYPE = 'user';

class Header extends LitElement {
  _isUser(json) {
    return json.resourceType === USER_TYPE && json.id;
  }

  notifyLoggedIn(body) {
    this.loggedIn = true;
    this.session = body;

    // Debug
    console.log('Just set loggedin flag to ' + this.loggedIn);
  }

  notifyLoggedOut() {
    this.loggedIn = false;
    this.session = null;

    // Debug
    console.log('Just set loggedin flag to ' + this.loggedIn);
  }

  logout(event) {
    event.preventDefault();
    fetch('http://guest.oae.com/api/auth/logout', {
      method: 'POST',
      // mode: 'cors',
      credentials: 'same-origin',
      cache: 'no-cache',
      redirect: 'follow'
    })
      .then(response => {
        if (response.status === 200) {
          this.notifyLoggedOut();
        }
        else {
          // TODO show error somehow and somewhere
        }
      });
  }

  login(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('username', 'miguellaginha');
    formData.append('password', 'miguellaginha');

    formData = new URLSearchParams(formData);

    let data = {};
    fetch('http://guest.oae.com/api/auth/login', {
      method: 'POST',
      // mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      body: formData
    })
      .then(response => {
        data.response = response;
        return response.json();
      })
      .then(body => {
        if (this._isUser(body)) {
          this.notifyLoggedIn(body, data.response);
        }
      });
  }

  constructor() {
    super();
    this.loggedIn = false;
    this.session = null;
  }

  static get styles() {
    return [
      css`
        :host div {
          border: 1px red dashed;
        }
      `
    ];
  }

  static get properties() {
    return {
      loggedIn: { type: Boolean },
      session: { type: Object }
    };
  }

  render() {
    return html`
      <div>
        <h1 ?hidden=${!this.session}>
          Hi, my name is ${this.session ? this.session.displayName : 'coco'} from
          ${this.session ? this.session.tenant.alias : 'coco'} tenant!
        </h1>
        <ul>
          <li>Logo</li>
          <li>Search</li>
          <li ?hidden="${this.loggedIn === true}" >
            <a @click="${this.login}" href="#">Login</a>
          </li>
          <li ?hidden="${this.loggedIn === false}" >
            <a @click="${this.logout}" href="#">Logout</a>
          </li>
        </ul>
      </div>
    `;
  }
}

window.customElements.define('oae-header', Header);
