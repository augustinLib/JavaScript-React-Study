# TypeScript

## TypeScript란?
- JavaScript에 Type이라는 개념을 적용함 (Typed JavaScript)
- Type을 추가하여 JavaScript를 확장시킴
- 에러를 잡거나 문제를 고치는 시간을 단축시켜줄 수 있음
- 어떠한 JS 실행 환경에서도 실행 가능함
- TypeScript로 작성한 코드는 JavaScript로 compile됨
  - 그러나, 전통적인 compiled language랑은 차이가 많기에, Transpile이라는 용어를 사용

## TypeScript 설치
```shell
# 전역 설치
npm i typescript -g
```
`-g` : npm의 global 옵션 : 이를 통해 프로젝트 폴더 내부에만 설치하는 것이 아닌, 디바이스에 전역적으로 설치하게 됨

```shell
# 해당 프로젝트에만 설치
npm init -y
npm install typescript
```



## TypeScript -> JavaScript 변환
```shell
# 전역 설치일 경우 
tsc test.ts #typescript 파일명

# 프로젝트에만 설치한 경우
tsc --init # tsconfig.json 파일 생성
# 세 명령어 중 하나 선택하여 실행
./node_modules/typescirpt/bin/tsc test.ts #typescript 파일명
./node_modules/.bin/tsc test.ts #typescript 파일명
npx tsc test.ts #typescript 파일명
```
`tsc` 명령어 뒤에 TypeScript 파일을 입력하면, 해당 TypeScript 파일을 JavaScript로 변환한다.  

### 프로젝트 폴더 안의 모든 TypeScript를 변환
```shell
# 전역 설치일 경우
tsc --init # tsconfig.json 파일 생성
tsc # tsconfig.json 파일이 있는 경로에서 실행
tsc -w # 파일이 수정될때마다 자동으로 변환

# 프로젝트에만 설치한 경우
npx tsc --init # tsconfig.json 파일 생성
# 세 명령어 중 하나 선택하여 실행
./node_modules/typescirpt/bin/tsc
./node_modules/.bin/tsc
npx tsc
npx tsc -w # 파일이 수정될때마다 자동으로 변환

# 추가
# npm으로 생성된 package.json의 script 부분을 "build": "tsc" 로 바꾸면 다음과 같이 실행 가능
npm run build
# npm으로 생성된 package.json의 script 부분을 "build:watch": "tsc" 로 바꾸면 다음과 같이 실행 가능
npm run build:watch #-> npx tsc -w
```



