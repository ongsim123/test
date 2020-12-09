function main() {
    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result');
    const move = document.getElementById('move').value.toUpperCase();
    let firstArr = [['R', 'R', 'W'], ['G', 'C', 'W'], ['G', 'B', 'B']];

    let ret = firstArr; // 첫 시작 초기상태 세팅
    let str = ''; //큐브 각 동작마다 출력할 문자열
    userInput.innerHTML = `CUBE> ${move}`; // CUBE MOVE 출력 단
    for (let i = 0; i < move.length; i++) { // MOVE 배열 루프
        if (move[i] === 'Q') { // Quit
            str += `-${move[i]}-<p>Bye~</p>`;
            result.innerHTML = str; // break하면 for문 마지막 str에 추가 안되기 때문에 추가
            break;
        }
        else if (move[i + 1] === "'") { // 뒤에 ' 붙어있는 경우
            if (move[i] === "R") { //R'
                let new1 = ret[0].splice(2);
                let new2 = ret[1].splice(2);
                let new3 = ret[2].splice(2);
                let newArr = [new1, new2, new3];

                let R2spc = newArr.splice(2);
                let R2 = newArr;
                let newR2 = (R2spc.join('') + R2.join('')).split('');

                ret[0].push(newR2[0]);
                ret[1].push(newR2[1]);
                ret[2].push(newR2[2]);

                let answer = `${ret[0].join('')}<br>${ret[1].join('')}<br>${ret[2].join('')}`;
                str += `-${move[i]+move[i+1]}-<p>${answer}</p>`;
            }
            else if (move[i] === "L") { //L'
                let new1 = ret[0].splice(2);
                let new2 = ret[1].splice(2);
                let new3 = ret[2].splice(2);
                let newArr = [new1, new2, new3];

                let R2spc = newArr.splice(2);
                let R2 = newArr;
                let newR2 = (R2spc.join('') + R2.join('')).split('');

                ret[0].push(newR2[0]);
                ret[1].push(newR2[1]);
                ret[2].push(newR2[2]);

                let answer = `${ret[0].join('')}<br>${ret[1].join('')}<br>${ret[2].join('')}`;
                str += `-${move[i]+move[i+1]}-<p>${answer}</p>`;
            }
            else if (move[i] === "U") { //U'
                let U2spc = ret[0].splice(2).join('');
                let U2 = ret[0].join('');
                ret[0] = (U2spc + U2).split('');
                ret[1] = ret[1];
                ret[2] = ret[2];
                let answer = `${U2spc + U2}<br>${ret[1].join('')}<br>${ret[2].join('')}`;
                str += `-${move[i]+move[i+1]}-<p>${answer}</p>`;
            }
            else if (move[i] === "B") { //B'
                let B2spc = ret[2].splice(1).join('');
                let B2 = ret[2].join('');
                ret[0] = ret[0];
                ret[1] = ret[1];
                ret[2] = (B2spc + B2).split('');
                let answer = `${ret[0].join('')}<br>${ret[1].join('')}<br>${B2spc + B2}`;
                str += `-${move[i]+move[i+1]}-<p>${answer}</p>`;
            }
            i++;
        }
        else if (move[i] === "R" || move[i] === "L" || move[i] === "U" || move[i] === "B") { // 뒤에 ' 안붙어있는 경우
            if (move[i] === "R") { //R
                let new1 = ret[0].splice(2);
                let new2 = ret[1].splice(2);
                let new3 = ret[2].splice(2);
                let newArr = [new1, new2, new3];

                let Rspc = newArr.splice(1);
                let R = newArr;
                let newR = (Rspc.join('') + R.join('')).split('');

                ret[0].push(newR[0]);
                ret[1].push(newR[1]);
                ret[2].push(newR[2]);

                let answer = `${ret[0].join('')}<br>${ret[1].join('')}<br>${ret[2].join('')}`;
                str += `-${move[i]}-<p>${answer}</p>`;
            }
            else if (move[i] === "L") { //L
                let new1 = ret[0].splice(0, 1);
                let new2 = ret[1].splice(0, 1);
                let new3 = ret[2].splice(0, 1);
                let newArr = [new1, new2, new3];

                let Lspc = newArr.splice(2);
                let L = newArr;
                let newL = (Lspc.join('') + L.join('')).split('');

                ret[0].unshift(newL[0]);
                ret[1].unshift(newL[1]);
                ret[2].unshift(newL[2]);

                let answer = `${ret[0].join('')}<br>${ret[1].join('')}<br>${ret[2].join('')}`;
                str += `-${move[i]}-<p>${answer}</p>`;
            }
            else if (move[i] === "U") { //U

                let Uspc = ret[0].splice(1).join('');
                let U = ret[0].join('');
                ret[0] = (Uspc + U).split('');
                ret[1] = ret[1];
                ret[2] = ret[2];
                let answer = `${Uspc + U}<br>${ret[1].join('')}<br>${ret[2].join('')}`;
                str += `-${move[i]}-<p>${answer}</p>`;
            }
            else if (move[i] === "B") { //B

                let Bspc = ret[2].splice(2).join('');
                let B = ret[2].join('');
                ret[0] = ret[0];
                ret[1] = ret[1];
                ret[2] = (Bspc + B).split('');
                let answer = `${ret[0].join('')}<br>${ret[1].join('')}<br>${Bspc + B}`;
                str += `-${move[i]}-<p>${answer}</p>`;
            }
        }
        else { // 입력 오류
            alert('입력 오류. 재입력 바랍니다.');
            userInput.innerHTML = `CUBE> 입력 오류!`;
            break;
        }
        result.innerHTML = str;
    }
}
main();
