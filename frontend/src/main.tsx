import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
    if (!import.meta.env.VITE_API_MOCKING) {
        return;
    }

    const { worker } = await import('./mocks/browser');

    return worker.start({
        onUnhandledRequest(request, print) {
            if (request.url.includes('/api')) {
                print.error();
                return;
            }

            return;
        },
    });
}

enableMocking().then(() => {
    createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
});
