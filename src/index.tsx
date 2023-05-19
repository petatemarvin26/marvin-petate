import {createRoot} from 'react-dom/client';
import Navigator from 'navigator';

const root = document.getElementById('root') as HTMLElement;
const container = createRoot(root);

container.render(<Navigator />);
