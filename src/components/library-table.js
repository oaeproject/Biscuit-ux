import { html, LitElement } from 'lit-element';
import homepageStyles from '../../style/homepage.scss';
import sharedStyles from '../../style/app.scss';
import './tags.js';

class libraryTable extends LitElement {
  static get styles() {
    return [sharedStyles, homepageStyles];
  }

  render() {
    return html`
    <div class="columns is-desktop is-vcentered is-flex">
        <div class="library-box library-content library-padding ">
            <table class="table">
                <thead>
                <tr class="library-columns library-top">
                    <th>
                    <label class="checkbox checkbox-container is-inline-flex library-top">
                        <input type="checkbox" class="checkmark"/>
                            <p class="library-checkbox-label-top">
                                Select All
                            </p>
                    </label>
                    </th>
                    <th>
                        <p>
                            Name
                        </p>
                    </th>
                    <th>
                        <p>
                            Owner
                        </p
                    </th>
                    <th>
                        <p>
                            Last Modified
                        </p>
                    </th>
                    <th>
                        <p>
                            File Type
                        </p>
                    </th>
                </tr>
                </thead>
                <tbody class="library-section">
                    <tr class="library-designation-label is-size-6">
                        <th>
                            <div class="field">
                                <p class="control">
                                    <div class="b-checkbox is-warning">
                                        <input id="checkbox" class="styled" checked type="checkbox">
                                        <label for="checkbox">
                                            Test
                                        </label>
                                    </div>
                                </p>
                            </div>
                        </th>
                        <td>
                            <p class="has-text-weight-bold">
                                Redesign
                            </p>
                        <!-- Main container -->
                            <section class="level library-designation-wrap is-inline-flex">
                                <!-- Left side -->
                                <div class="level-left">
                                    <div class="level-item">
                                        <p class="library-designation-hover">
                                            Group - Design Matters
                                        </p<
                                    </div>
                                    <div class="level-item library-designation-tag">
                                        <tags-button></tags-button>
                                        <tags-button></tags-button>
                                    </div>
                                </div>
                            </section>
                        </td>
                        <td>
                            <p class="has-text-weight-bold">
                                Rita Carvalho
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-bold">
                                27/10/2018
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-bold">
                                Folder
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    `;
  }
}

window.customElements.define('library-table', libraryTable);
