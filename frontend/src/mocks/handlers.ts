import { http, HttpResponse } from 'msw';

export const handlers = [
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
];
