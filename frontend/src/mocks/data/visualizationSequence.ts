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
] as const;
