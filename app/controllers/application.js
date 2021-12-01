import Controller from '@ember/controller';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class ApplicationController extends Controller {
  modalIsOpen = true;

  @action
  setFocusManually() {
    console.log('currently focused: ', document.activeElement);

    later(() => {
      console.log('currently focused (after 1s): ', document.activeElement);

      console.log('setting focus after 1s manually...');

      const searchInput = document.querySelector(
        '.ember-power-select-search-input'
      );

      console.log(searchInput);

      searchInput.focus();
    }, 1000);
  }
}
