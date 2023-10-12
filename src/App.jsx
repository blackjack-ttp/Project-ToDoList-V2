//* LIB
import { Suspense } from 'react';

//* SCSS
import '@/styles/globals/app.scss';

//* ROUTER
import RouterPage from './routers';

//* IMPORT
import { LoadingComponent } from './imports/component';

//* COMPONENT

function App() {
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <div className="App">
          <RouterPage />
        </div>
      </Suspense>
    </>
  );
}

export default App;
