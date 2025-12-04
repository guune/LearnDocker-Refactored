export const DOCKER_PULL_LOG = [
  'Using default tag: latest',
  'latest: Pulling from hello-world',
  '014022f747a3: Pulling fs layer',
  '014022f747a3: Download complete',
  '014022f747a3: Pull complete',
  `Digest: sha256:0c0c1e37ddf8fddf2eac159fc5776f2d1504205f3bee48ab5c934cb67aca06a8`,
  'Status: Downloaded newer image for learndocker.io/hello-world:latest',
  'learndocker.io/hello-world:latest'
].join('\r\n');

export const COMMAND_OUTPUTS: Record<number, string> = {
  0: DOCKER_PULL_LOG,
};
