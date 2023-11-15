
var list = [];


function dssv(){
    var mssv = document.forms["pointTable"]["mssv"].value;
    var ten = document.forms["pointTable"]["ten"].value;
    var diem = document.forms["pointTable"]["diem"].value;

    /**doi tuong */
    var sv = {
        /*thuoc tinh*/
        mssv: mssv,
        ten: ten,
        diem: diem,

        /*phuong thuc*/
        XepLoai: function(){
            if(diem >= 8.5)
                return "Gioi";
            else if(diem >= 6.5)
                return "Kha";
            else
                return "Trung binh";
        }
    }

    list[list.length] = sv;

    clear(); //xóa bảng input sau khi nhập
    showResult();
}

function showResult(){
    var kq = "";
    list.forEach(sv => {
        kq += 
        `<div id="infoStudent">
                <div class="info-1">${sv.mssv}</div>
                <div class="info-2">${sv.ten}</div>
                <div class="info-3">${sv.diem}</div>
                <div class="info-4">${sv.XepLoai()}</div>
                <div class="info-5"> <button class="removeStudent" onclick="removeSV(${sv.mssv})">Remove</button> </div> 
        </div>`
    });
    document.getElementById("result").innerHTML = kq;
}


function clear(){
    document.forms["pointTable"]["mssv"].value = "";
    document.forms["pointTable"]["ten"].value = "";
    document.forms["pointTable"]["diem"].value = "";
}

function removeSV(MSSV){
    for(let i = 0; i < list.length; i++){
        if(list[i].mssv == MSSV){
            list.splice(i, 1);
        }
    }
    showResult(); //sau khi xóa hiển thị lại danh sách
}