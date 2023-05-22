import './styles/index.scss';
import { withProviders } from "./providers";
import { Routing } from 'pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HEADER
      </header>
      <Routing isAuthorized={true} />
    </div>
  );
}

export default withProviders(App);
