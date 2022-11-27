# parcel-bundler

```shell
npm init -y
npm install -D parcel-bundler
```

## parcel bundler 환경에서 favicon 적용
1. static 디렉토리 생성
2. static 디렉토리에 favicon 파일 저장
3. parcel-plugin-static-files-copy 개발 의존성 설치
```shell
npm install -D parcel-plugin-static-files-copy
```
4. package.json 파일 다음과 같이 수정
```json
{
  "name": "parcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5",
    "parcel-plugin-static-files-copy": "^2.6.0",
    "sass": "^1.55.0"
  },
  "staticFiles": {
    "staticPath": "static"
  }
}
```
