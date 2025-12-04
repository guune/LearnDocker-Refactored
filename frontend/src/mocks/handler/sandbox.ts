import { delay, http, HttpResponse } from 'msw';
import { mockDindState } from '../state/MockDindState';
import { COMMAND_OUTPUTS } from '../data/commandData';

export const sandboxHandlers = [
  http.post('/api/sandbox/start', () => {
    const SESSION_DURATION = 60 * 60 * 1000; // 1시간 (3600초)
    const mockEndDate = Date.now() + SESSION_DURATION;

    return HttpResponse.json({
      endDate: mockEndDate
    },
      {
        status: 201,
        headers: {
          'Set-Cookie': 'sid=mock-session-id-12345; Path=/; HttpOnly; Max-Age=3600',
        }
      });
  }),

  http.delete('/api/sandbox/release', () => {
    mockDindState.reset();
    return new HttpResponse(null, { status: 200 })
  }),

  http.get("/api/sandbox/elements", async () => {
    await delay(500);
    return HttpResponse.json(mockDindState.getCurrentState());
  }),

  http.get('/api/sandbox/hostStatus', () => {
    return HttpResponse.json('READY');
  }),

  http.post("/api/sandbox/command", () => {
    const completedQuiz = mockDindState.getCompletedQuizNumber();
    const output = COMMAND_OUTPUTS[completedQuiz] || "Success\r\n";

    mockDindState.executeCommand();

    return HttpResponse.text(output)
  }),
]
