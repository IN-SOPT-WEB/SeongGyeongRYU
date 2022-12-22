> ### TypeScript란?

1. TypeScript는 무엇인가?

   타입스크립트는 **자바스크립트에 타입을 부여한 언어**입니다. <br>
   자바스크립트의 확장된 언어라고 볼 수 있습니다.

2. TypeScript를 이용한 개발을 해야하는 이유

   - 타입을 지정함으로써 프로그램 실행 전에 미리 에러를 잡을 수 있다. 데이터가 어떤 types으로 지정되는지 직관적으로 알 수 있다.

   - Dynamic Typing을 허용하지 않아 하단 코드와 같이 타입이 다른 값끼리 연산하려는 경우 에러를 내준다.
     ```
        const a = 5 - '3'
     ```
   - 친절한 에러메세지와 강력한 AutoComplete

   - **무엇보다 현재 TypeScript 생태계가 점점 커지고 있고, TypeScript로 작성된 라이브러리가 많아진 지금, 주니어 개발자로 향하고 있는 내가 쓰지 않을 이유는 없어보인다.**

- TypeScript를 이용한 개발에서 중요한 것은 무엇이 있을까?
  - 에러가 신경 쓰이면 차라리 strict를 꺼두자. any는 쓰지 말자!
    $\rightarrow$ 자바스크립트는 type이 any인 TS라고 봐도 무방한데 any를 남발하게 되면 TS를 쓰는 의미가 없다.

---

출처 : https://velog.io/@teo/typescript
