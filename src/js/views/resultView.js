import View from './View';
import prewviewView from './prewviewView';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found! Please try again ;) ';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => prewviewView.render(result, false))
      .join('');
  }
}

export default new ResultView();
