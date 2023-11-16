
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

    let index = list.findIndex((c)=>c.mssv == sv.mssv); //nếu tìm thấy sẽ trả về vị trí của sv trong mảng.
    if(index >= 0)
        list.splice(index, 1, sv);
    else
        list[list.length] = sv;

    

    clear(); //xóa bảng input sau khi nhập
    showResult();
}

function showResult(){
    var kq = ` <table>
                <tr>
                <td class="info">Code student</td>
                <td class="info">Name</td>
                <td class="info">Mark</td>
                <td class="info bottom">Classification</td>
                </tr>`;
    list.forEach(sv => {
        kq += 
                `<tr>
                <td class="info">${sv.mssv}</td>
                <td class="info">${sv.ten}</td>
                <td class="info">${sv.diem}</td>
                <td class="info bottom">${sv.XepLoai()}</td>
                <td><button onclick="editSV(${sv.mssv})">Edit</button></td>
                <td><button onclick="removeSV(${sv.mssv})">Remove</button></td>
                </tr>`        
    });
    kq += ` </table>`;

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


function editSV(MSSV){
    for(let i = 0; i < list.length; i++){
        if(list[i].mssv == MSSV){
            document.forms["pointTable"]["mssv"].value = list[i].mssv;
            document.forms["pointTable"]["ten"].value = list[i].ten;
            document.forms["pointTable"]["diem"].value = list[i].diem;
        }
    }
}