# Template

typescript, react, webpack 으로 이루어진 템플릿 레포

- 특징
  - `src` 하위 폴더에 `.ts`, `.tsx` 파일 위치해야함
  - `public/index.html`를 삭제하면 안됨
  - `public` 폴더의 파일을 `import` 시

    ```tsx
    // public을 prefix로 경로를 짜야함
    import forest from "public/imgs/forest.jpg";
    ```

- 설치

  ```bash
  npm install
  ```

  혹은

  ```bash
  yarn install
  ```
