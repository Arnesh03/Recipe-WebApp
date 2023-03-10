import View from './View';
import prewviewView from './prewviewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet . Find a noce recipe and Bookmark it ;) ';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => prewviewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
