import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { Logo } from './components/Logo';
import { ThemeScope } from './scopes';

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeScope>
        <Provider store={store}>
          <GlobalStyles />
          <Logo />
        </Provider>
      </ThemeScope>
    </BrowserRouter>
  );
}

export default App;
