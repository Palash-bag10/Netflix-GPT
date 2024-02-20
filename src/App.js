import { Provider } from 'react-redux';
import Body from './components/Body';
import userStore from './utils/appStore';

function App() {
  return (
    <Provider store={userStore}>
    <Body />
    </Provider>
  );
}

export default App;
