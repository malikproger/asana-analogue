import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { ThemeScope } from './scopes/ThemeScope';

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeScope>
        <Provider store={store}>
          <GlobalStyles />
        </Provider>
      </ThemeScope>
    </BrowserRouter>
  );
}

export default App;
