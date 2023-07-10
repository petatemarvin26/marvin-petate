import {createRoot} from 'react-dom/client';
import App from './App';
import {LoadPercentage} from 'context';

const root = document.getElementById('root') as HTMLElement;
const contaienr = createRoot(root);

if (process.env.NODE_ENV === 'production') {
  console.log = function () {};
}

contaienr.render(
  <LoadPercentage.Provider>
    <App />
  </LoadPercentage.Provider>
);
