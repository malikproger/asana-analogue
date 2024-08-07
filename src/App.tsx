import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { Router as ApplicationRouter } from './components';
import { ThemeScope } from './scopes';

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeScope>
        <Provider store={store}>
          <GlobalStyles />
          <ApplicationRouter />
        </Provider>
      </ThemeScope>
    </BrowserRouter>
  );
}

export default App;
