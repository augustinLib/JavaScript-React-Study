# nvm

nvm : node version manager
## nvm 살펴보기

```bash
nvm install # 설치하고자 하는 node.js 버전
```
12.14.1 버전을 설치하고자 하면
```bash
nvm install 12.14.1
```

설치된 버전 확인
```bash
nvm ls
```

사용하고자 하는 버전 선택
```bash
nvm use 12.14.1 # 사용하고자 하는 node.js 버전
```
nvm use를 통해 버전 변경도 가능함

필요없는 버전 지우기
```bash
nvm uninstall 12.14.1 # 삭제하고자 하는 node.js 버전
```