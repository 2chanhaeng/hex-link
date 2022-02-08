"use strict";

// 3~63이 랜덤으로 나오는 함수
function rand64(){
    return Math.floor(Math.random() * 61) + 3;
}

// 0, 4, 8, 16, 32 가 아닌 수가 나올 때까지 반복
function getNew(){
    let result = 0
    while(result == 0 || result == 4 || result == 8 || result == 16 || result == 32){
        result = rand64();
    }
    return result;
}

const lenHexes = 19;
const idList = [...Array(lenHexes).keys()].map(i => String.fromCharCode(i + 97));
let hexes = idList.reduce((acc,curr) => (acc[curr] = getNew(), acc), {});




// 입력된 리스트에 포함된 수를 인덱스로 가지는 hexes의 요소에 getNew()를 적용하여 새로운 값을 대입
function changeHex(list, obj){
    for (let i in list){
        let id = list[i];
        obj[id] = getNew();
    }
}

// changeHex(idList, hexes)

// 
function writeHexes(obj){
    // 오브젝트에서 key를 뽑아 해당 key를 id로 가지는 요소의 center 클래스에 p 요소에 값을 대입해서 기존 내용에 추가
    for (let id in obj){
        let hexCenter = document.querySelector(`#${id} .center`)

        

        let p = document.createElement("p")
        p.textContent = obj[id];

        hexCenter.appendChild(p);
    }
}

function displayPipes(obj){
    for (let id in obj){
        let hexCenter = document.querySelector(`#${id} .center`)
        if(obj[id] & 1){
            hexCenter.querySelector('.z').style.display = 'block';
        }
        if(obj[id] & 2){
            hexCenter.querySelector('.y').style.display = 'block';
        }
        if(obj[id] & 4){
            hexCenter.querySelector('.x').style.display = 'block';
        }
        if(obj[id] & 8){
            hexCenter.querySelector('.w').style.display = 'block';
        }
        if(obj[id] & 16){
            hexCenter.querySelector('.v').style.display = 'block';
        }
        if(obj[id] & 32){
            hexCenter.querySelector('.u').style.display = 'block';
        }
    }
}

writeHexes(hexes)
displayPipes(hexes)
