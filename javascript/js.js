
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

    document.getElementById("result").innerHTML = showResult();
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
        </div>`
    });
    return kq;  
}

