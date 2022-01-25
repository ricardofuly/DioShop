import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';
import styled from 'styled-components';
import Carousel from './components/Carroucel';

function App() {

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'));

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart });
  }

  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
