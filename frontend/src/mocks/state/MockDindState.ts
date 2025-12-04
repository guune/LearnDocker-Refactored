import { VISUALIZATION_SEQUENCE, StateSnapshot } from "../data/visualizationSequence";
import { Visualization } from "../../types/visualization";

class MockDindState {
  #completedQuizNumber = 0; // 시각화용 (명령어 실행시 증가)
  #level = 1; // 접근 제어용 (submit 성공사 증가)
  #currentWorkingQuiz = 1; //Quiz 페이지 진입시 설정
  #hasExecutedCommand = false; // 현재 퀴즈에서 명령어 실행 여부

  getCurrentState(): StateSnapshot {
    return VISUALIZATION_SEQUENCE[this.#completedQuizNumber]!;
  }

  getVisualizationData(): Visualization {
    return this.getCurrentState();
  }

  // Quiz 페이지 진입시 호출
  setCurrentWorkingQuiz(quizId: number): void {
    this.#currentWorkingQuiz = quizId;
    this.#hasExecutedCommand = false;
  }

  // 명령어 실행시 호출
  executeCommand(): void {
    // 이미 완료한 퀴즈는 명령어 실행 불가
    if (this.#currentWorkingQuiz <= this.#completedQuizNumber) {
      return;
    }

    // 현재 퀴즈에서 이미 명령어 실행했으면 막기
    if (this.#hasExecutedCommand) {
      return;
    }

    // 첫 명령어 실행시만 상태 변경
    if (this.#currentWorkingQuiz === this.#completedQuizNumber + 1) {
      this.#completedQuizNumber++;
      this.#hasExecutedCommand = true;
      return;
    }

    return;
  }

  submitQuiz(quizNumber: number): void {

    if (this.#level === quizNumber) {
      this.#level = quizNumber + 1;
    }
  }

  canAccessQuiz(quizNumber: number): boolean {
    return quizNumber <= this.#level;
  }

  getCompletedQuizNumber(): number {
    return this.#completedQuizNumber;
  }

  reset(): void {
    this.#completedQuizNumber = 0;
    this.#currentWorkingQuiz = 1;
    this.#hasExecutedCommand = false;
    this.#level = 1;
  }
}

export const mockDindState = new MockDindState();
