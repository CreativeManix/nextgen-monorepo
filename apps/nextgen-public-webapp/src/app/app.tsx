// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { FeatureB } from '@nextgen-monorepo/feature-b';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <h1>NextGen Public webapp</h1>
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/feature-b">Show feature-B</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/feature-b"
          element={
            <div>
              <FeatureB />
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
