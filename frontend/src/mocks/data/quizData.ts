export const QUIZ_DATA = [
  {
    id: 1,
    title: 'Docker Image 가져오기',
    content:
      'Docker의 첫 걸음을 시작해볼까요?\n' +
      'learndocker.io에서 제공하는 hello-world 이미지를 가져와보세요.\n\n' +
      '1. docker pull 명령어를 사용하여 learndocker.io/hello-world 이미지를 다운로드하세요.\n' +
      '2. 이미지가 성공적으로 다운로드되면 자동으로 로컬 시스템에 저장됩니다.\n',
    hint: `<ul class="list-disc list-inside">
  <li>docker pull <learndocker.io/이미지명> 형식으로 명령어를 작성하세요.</li>
  <li>특정 레지스트리에서 이미지를 가져올 때는 이미지명 앞에 <레지스트리 주소/>를 붙여주세요.</li>
</ul>`,
  },
]
