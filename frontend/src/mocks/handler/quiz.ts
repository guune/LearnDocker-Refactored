import { http, HttpResponse } from "msw";
import { mockDindState } from "../state/MockDindState";
import { QUIZ_DATA } from "../data/quizData";

export const quizHandlers = [
  http.get("/api/quiz/:id", ({ params }) => {
    const quizId = Number(params.id);
    const quiz = QUIZ_DATA.find(q => q.id === quizId);

    if (!quiz) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(quiz);
  }),

  http.get("/api/quiz/:id/access", ({ params }) => {
    const quizId = Number(params.id);
    const canAccess = mockDindState.canAccessQuiz(quizId);
    return new HttpResponse(null, { status: canAccess ? 200 : 403 });
  }),

  http.get('/api/quiz/:id/submit', ({ request, params }) => {
    const quizId = Number(params.id);
    const url = new URL(request.url);
    const userAnswer = url.searchParams.get('userAnswer');

    const requiredAnswerIds = [2, 5, 7, 8];

    // 답변이 필요한 문제는 답변은 있어야함
    if (requiredAnswerIds.includes(quizId) && !userAnswer) {
      return HttpResponse.json({ quizResult: 'FAIL' });
    }

    // 그 외의 경우 (검사 대상이 아니거나, 대상인데 답변이 있는 경우) 통과
    mockDindState.completeQuiz(quizId);
    return HttpResponse.json({ quizResult: 'SUCCESS' });
  })

]
