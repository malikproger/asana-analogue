import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import { store } from './app/store';
import { ThemeScope } from './scopes';
import { Button } from './UI';

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeScope>
        <Provider store={store}>
          <GlobalStyles />
          <Button loading={true}>Кнопка</Button>
        </Provider>
      </ThemeScope>
    </BrowserRouter>
  );
}

export default App;
