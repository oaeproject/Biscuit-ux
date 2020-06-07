import { html, LitElement } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import libraryEntries from '../../style/library-table-entries.scss';
import './tags.js';
import './library-table-entries.js';

class libraryTable extends LitElement {
  static get styles() {
    return [sharedStyles, libraryEntries];
  }

  render() {
    return html`
    <div class="columns is-flex table-wrap">
        <div class="library-box library-content library-padding ">
            <table class="table is-fullwidth lib-table">
                <thead>
                <tr class="library-columns library-top">
                    <th>
                        <label for="checkbox">
                        <input type="checkbox">
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
                                    <div class="b-checkbox">
                                        <label for="checkbox">
                                        <input type="checkbox">
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
                                            Design Matters
                                        </p<
                                    </div>
                                    <div class="level-item library-designation-tag">
                                    </div>
                                </div>
                            </section>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Rita Carvalho
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                27/10/2018
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Folder
                            </p>
                        </td>
                    </tr>
     </tbody>
                <tbody class="library-section">
                    <tr class="library-designation-label is-size-6">
                        <th>
                            <div class="field">
                                <p class="control">
                                    <div class="b-checkbox">
                                        <label for="checkbox">
                                        <input type="checkbox">
                                        </label>
                                    </div>
                                </p>
                            </div>
                        </th>
                        <td>
                            <p class="has-text-weight-bold">
                                Conference 2020
                            </p>
                        <!-- Main container -->
                            <section class="level library-designation-wrap is-inline-flex">
                                <!-- Left side -->
                                <div class="level-left">
                                    <div class="level-item">
                                        <p class="library-designation-hover">
                                            Open Apereo 
                                        </p<
                                    </div>
                                    <div class="level-item library-designation-tag">
                                    </div>
                                </div>
                            </section>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Miguel Laginha
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                27/03/2020
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Folder
                            </p>
                        </td>
                    </tr>
     </tbody>   
     <tbody class="library-section">
     <tr class="library-designation-label is-size-6">
         <th>
             <div class="field">
                 <p class="control">
                     <div class="b-checkbox">
                         <label for="checkbox">
                         <input type="checkbox">
                         </label>
                     </div>
                 </p>
             </div>
         </th>
         <td>
             <p class="has-text-weight-bold">
                 OAE Frontend
             </p>
         <!-- Main container -->
             <section class="level library-designation-wrap is-inline-flex">
                 <!-- Left side -->
                 <div class="level-left">
                     <div class="level-item">
                         <p class="library-designation-hover">
                            OAE Development
                         </p<
                     </div>
                     <div class="level-item library-designation-tag">
                     </div>
                 </div>
             </section>
         </td>
         <td>
             <p class="has-text-weight-medium">
                 Rita Carvalho
             </p>
         </td>
         <td>
             <p class="has-text-weight-medium">
                 27/10/2018
             </p>
         </td>
         <td>
             <p class="has-text-weight-medium">
                 Folder
             </p>
         </td>
     </tr>
</tbody>
<tbody class="library-section">
                    <tr class="library-designation-label is-size-6">
                        <th>
                            <div class="field">
                                <p class="control">
                                    <div class="b-checkbox">
                                        <label for="checkbox">
                                        <input type="checkbox">
                                        </label>
                                    </div>
                                </p>
                            </div>
                        </th>
                        <td>
                            <p class="has-text-weight-bold">
                                Advertisement
                            </p>
                        <!-- Main container -->
                            <section class="level library-designation-wrap is-inline-flex">
                                <!-- Left side -->
                                <div class="level-left">
                                    <div class="level-item">
                                        <p class="library-designation-hover">
                                            Marketing 
                                        </p<
                                    </div>
                                    <div class="level-item library-designation-tag">
                                    </div>
                                </div>
                            </section>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Michael Brown
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                27/03/2020
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Folder
                            </p>
                        </td>
                    </tr>
     </tbody>   
<tbody class="library-section">
     <tr class="library-designation-label is-size-6">
         <th>
             <div class="field">
                 <p class="control">
                     <div class="b-checkbox">
                         <label for="checkbox">
                         <input type="checkbox">
                         </label>
                     </div>
                 </p>
             </div>
         </th>
         <td>
             <p class="has-text-weight-bold">
                 Dissertation
             </p>
         <!-- Main container -->
             <section class="level library-designation-wrap is-inline-flex">
                 <!-- Left side -->
                 <div class="level-left">
                     <div class="level-item">
                         <p class="library-designation-hover">
                             OAE Dissertation
                         </p<
                     </div>
                     <div class="level-item library-designation-tag">
                     </div>
                 </div>
             </section>
         </td>
         <td>
             <p class="has-text-weight-medium">
                 Rita Carvalho
             </p>
         </td>
         <td>
             <p class="has-text-weight-medium">
                 27/10/2018
             </p>
         </td>
         <td>
             <p class="has-text-weight-medium">
                 Folder
             </p>
         </td>
     </tr>
</tbody>
<tbody class="library-section">
                    <tr class="library-designation-label is-size-6">
                        <th>
                            <div class="field">
                                <p class="control">
                                    <div class="b-checkbox">
                                        <label for="checkbox">
                                        <input type="checkbox">
                                        </label>
                                    </div>
                                </p>
                            </div>
                        </th>
                        <td>
                            <p class="has-text-weight-bold">
                                Internship Project
                            </p>
                        <!-- Main container -->
                            <section class="level library-designation-wrap is-inline-flex">
                                <!-- Left side -->
                                <div class="level-left">
                                    <div class="level-item">
                                        <p class="library-designation-hover">
                                            Classes
                                        </p<
                                    </div>
                                    <div class="level-item library-designation-tag">
                                    <tags-button></tags-button>
                                    </div>
                                </div>
                            </section>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Sarah Brightman
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                07/04/2019
                            </p>
                        </td>
                        <td>
                            <p class="has-text-weight-medium">
                                Folder
                            </p>
                        </td>
                    </tr>   
            </table>
        </div>
      </div>
    `;
  }
}

window.customElements.define('library-table', libraryTable);
