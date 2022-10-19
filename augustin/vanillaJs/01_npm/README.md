# npm

npm : Node Package Manager

## npm으로 프로젝트 시작
```bash
npm init -y
```
실행 시 package.json 파일이 생성됨을 확인할 수 있다.
```json
{
  "name": "npm_test",   // 프로젝트 이름
  "version": "1.0.0",   // 프로젝트 버전
  "description": "",    // 프로젝트 설명
  "main": "index.js",  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },        // 프로젝트 내부에서 사용할 수 있는 명령들
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

<br>

## npm으로 패키지 설치

```bash
npm install "설치하고자 하는 패키지" --save-dev   #or
npm i "설치하고자 하는 패키지" -D  #or
npm install "설치하고자 하는 패키지" -D  
```

생성된 node_modules 디렉토리를 확인해보면, 설치한 패키지가 있는 것을 확인할 수 있다.

또한, 이 후에 package.json을 확인해보면 변경점이 있다.
```json
{
  "name": "01_npm",
  "version": "1.0.0",
  "description": "npm : Node Package Manager",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5" // 설치한 package 내역
  }
}
```
npm install -D로 패키지를 설치하면, 해당 내역이 package.json에 기록됨
이렇게 내역이 남게 되면, 패키지를 지우게 되더라도 추후
```bash
npm install
```
명령어를 통해 package.json 파일에 기록된 패키지를 한번에 설치할 수 있다.


```bash
npm install "설치하고자 하는 패키지"
```
다음과 같이 -D를 제외한 npm install 명령어를 사용하면 package.json파일은 다음과 같이 변한다.

```json
{
  "name": "01_npm",
  "version": "1.0.0",
  "description": "npm : Node Package Manager",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  },
  "dependencies": {
    "lodash": "^4.17.21"    // 변경점
  }
}
```

### npm install -D와 npm install의 차이점
```bash
npm install "설치하고자 하는 패키지" --save-dev   #or
npm i "설치하고자 하는 패키지" -D  #or
npm install "설치하고자 하는 패키지" -D  
```
npm install -D의 경우, 개발용 의존성 패키지 설치로, <br>
**특정 패키지가 개발할때만 필요하고, 웹페이지에서는 필요없을 때 사용**

npm install의 경우, 일반 의존성 패키지 설치로, <br>
**특정 패키지가 웹브라우저에서 동작할 때 사용**


<br>

### package-lock.json
설치하고자 하는 패키지들이 사용하는 패키지에 대한 정보



