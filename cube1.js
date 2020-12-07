function main() {
    const result = document.getElementById('result');
    const word = document.getElementById('word').value;
    const num = document.getElementById('num').value;
    const direction = document.getElementById('direction').value.toUpperCase(); // L과 R로 통일

    let wordArr = word.split('');
    let absNum = Math.abs(num);

    if (num < -100 || num >= 100) {
        alert('정수값을 -100이상 100미만으로 입력해주세요.');
    }

    if ((direction === 'L' && num == absNum) || (direction === 'R' && num != absNum)) {
        let left = wordArr.splice(absNum % wordArr.length);
        result.innerHTML = `> ${word} ${num} ${direction}<br>
            ${left.join('') + wordArr.join('')}`;
    } else {
        let right = wordArr.splice(wordArr.length - (absNum % wordArr.length));
        result.innerHTML = `> ${word} ${num} ${direction}<br>
            ${right.join('') + wordArr.join('')}`;
    }
}
main();
