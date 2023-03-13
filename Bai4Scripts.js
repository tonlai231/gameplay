var may=["phai-bao.jpg","phai-keo.jpg","phai-bua.jpg"]
i = Math.floor(Math.random()*3);//random 0,1,2
function chonBao(){
    document.getElementById('may-choi').src=may[i];
    document.getElementById('nguoi-choi').src='trai-bao.jpg';
    switch(i){
        case 0:
            document.getElementById('ket-qua').innerText='Hòa';
            break;
        case 1:
            document.getElementById('ket-qua').innerText='Bạn thua rồi'
            break;
        case 2:
            document.getElementById('ket-qua').innerText='Bạn thắng rồi '
            break;
    }
}
function chonKeo(){
    document.getElementById('may-choi').src=may[i];
    document.getElementById('nguoi-choi').src='trai-keo.jpg';
    switch(i){
        case 0:
            document.getElementById('ket-qua').innerText='Bạn thắng rồi';
            break;
        case 1:
            document.getElementById('ket-qua').innerText='Bạn hòa rồi'
            break;
        case 2:
            document.getElementById('ket-qua').innerText='Bạn thua rồi '
            break;
    }
}
function chonBua(){
    document.getElementById('may-choi').src=may[i];
    document.getElementById('nguoi-choi').src='trai-bua.jpg';
    switch(i){
        case 0:
            document.getElementById('ket-qua').innerText='Bạn thua rồi';
            break;
        case 1:
            document.getElementById('ket-qua').innerText='Bạn thắng rồi'
            break;
        case 2:
            document.getElementById('ket-qua').innerText='Bạn hòa rồi '
            break;
    }
}