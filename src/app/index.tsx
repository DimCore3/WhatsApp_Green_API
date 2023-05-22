import './styles/index.scss';
import { withProviders } from "./providers";
import { Routing } from 'pages';
import { useState } from 'react';
import { Header } from 'widgets';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div className="App">
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
      <Routing isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
    </div>
  );
}

export default withProviders(App);
