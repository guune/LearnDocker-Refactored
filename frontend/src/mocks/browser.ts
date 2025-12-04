import { setupWorker } from 'msw/browser';
import { sandboxHandlers } from './handler/sandbox';
import { quizHandlers } from './handler/quiz';

export const worker = setupWorker(...sandboxHandlers, ...quizHandlers);
