// console.log("chapter04");

// 1. 변수
let age = 27; // 선언 초기화
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = "2025.05.17"; // 초기화 필수

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $,_ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 2name; x

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let tootalSalesCount = salesCount- refundCount;