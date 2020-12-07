/*1단계: 단어 밀어내기 구현하기
입력: 사용자로부터 단어 하나, 정수 숫자 하나( -100 <= N < 100) , L 또는 R을 입력받는다. L 또는 R은 대소문자 모두 입력 가능하다.
> apple 3 L 
leapp

> banana 6 R
banana

> carrot -1 r
arrotc

> cat -4 R
atc
*/
function main() {
    const result = document.getElementById('result');
    const word = document.getElementById('word').value;
    const num = document.getElementById('num').value;
    const direction = document.getElementById('direction').value.toUpperCase(); // L과 R로 통일

    let wordArr = word.split('');
    let absNum = Math.abs(num);

    if ((direction === 'L' && num === absNum) || (direction === 'R' && num !== absNum)) 
    {
        let leftSpc = wordArr.splice(absNum % wordArr.length); 
        result.innerHTML = `${leftSpc.join('') + wordArr.join('')}`;
    } 
    else if ((direction === 'L' && num !== absNum) || (direction === 'R' && num === absNum)) 
    {
        let rightSpc = wordArr.splice(wordArr.length - (absNum % wordArr.length));
        result.innerHTML = `${rightSpc.join('') + wordArr.join('')}`;
    }
}
main();
