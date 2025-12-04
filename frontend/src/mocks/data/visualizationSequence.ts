import { Container, Image } from "../../types/visualization";

export type MockImage = Omit<Image, "color">;
export type MockContainer = Omit<Container, "color">;

export type StateSnapshot = {
  images: MockImage[];
  containers: MockContainer[];
}

export const VISUALIZATION_SEQUENCE: StateSnapshot[] = [
  // Quiz 0: 초기 상태
  {
    images: [],
    containers: [],
  },
  // Quiz 1 완료: hello-world 이미지 추가됨
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
    ],
    containers: [],
  },
  // Quiz 2 완료: 이미지 그대로 (목록 확인만)
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
    ],
    containers: [],
  },
  // Quiz 3 완료: hello-world 이미지 삭제됨
  {
    images: [],
    containers: [],
  },
  // Quiz 4 완료: hello-world 이미지 다시 추가 + 컨테이너 생성
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
    ],
    containers: [
      {
        id: 'container_001',
        name: 'hopeful_turing',
        image: 'learndocker.io/hello-world',
        status: 'created',
      },
    ],
  },
  // Quiz 5 완료: 컨테이너 실행 후 종료
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
    ],
    containers: [
      {
        id: 'container_001',
        name: 'hopeful_turing',
        image: 'learndocker.io/hello-world',
        status: 'exited',
      },
    ],
  },
  // Quiz 6 완료: joke 이미지 + 실행중인 컨테이너
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
      { id: 'sha256:xyz789ghi012', name: 'learndocker.io/joke' },
    ],
    containers: [
      {
        id: 'container_001',
        name: 'hopeful_turing',
        image: 'learndocker.io/hello-world',
        status: 'exited',
      },
      {
        id: 'container_002',
        name: 'laughing_edison',
        image: 'learndocker.io/joke',
        status: 'running',
      },
    ],
  },
  // Quiz 7 완료: 상태 그대로 (로그 확인만)
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
      { id: 'sha256:xyz789ghi012', name: 'learndocker.io/joke' },
    ],
    containers: [
      {
        id: 'container_001',
        name: 'hopeful_turing',
        image: 'learndocker.io/hello-world',
        status: 'exited',
      },
      {
        id: 'container_002',
        name: 'laughing_edison',
        image: 'learndocker.io/joke',
        status: 'running',
      },
    ],
  },
  // Quiz 8 완료: 상태 그대로 (목록 확인만)
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
      { id: 'sha256:xyz789ghi012', name: 'learndocker.io/joke' },
    ],
    containers: [
      {
        id: 'container_001',
        name: 'hopeful_turing',
        image: 'learndocker.io/hello-world',
        status: 'exited',
      },
      {
        id: 'container_002',
        name: 'laughing_edison',
        image: 'learndocker.io/joke',
        status: 'running',
      },
    ],
  },
  // Quiz 9 완료: 모든 컨테이너 중지
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
      { id: 'sha256:xyz789ghi012', name: 'learndocker.io/joke' },
    ],
    containers: [
      {
        id: 'container_001',
        name: 'hopeful_turing',
        image: 'learndocker.io/hello-world',
        status: 'exited',
      },
      {
        id: 'container_002',
        name: 'laughing_edison',
        image: 'learndocker.io/joke',
        status: 'exited',
      },
    ],
  },
  // Quiz 10 완료: 모든 컨테이너 삭제
  {
    images: [
      { id: 'sha256:abc123def456', name: 'learndocker.io/hello-world' },
      { id: 'sha256:xyz789ghi012', name: 'learndocker.io/joke' },
    ],
    containers: [],
  },
] as const;
