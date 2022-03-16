$(function(){
    document.querySelector("#file").addEventListener("change",function () {
        var file = document.querySelector("#file").files[0];
        var formdata = new FormData();
        formdata.append("file",file);
        var xhr = new XMLHttpRequest();
        xhr.open("post","http://ailab.oys68.cn/api/file/photo");
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200){
                const res = $.parseJSON(xhr.responseText)
                document.querySelector("#callback").innerText = res.data;
            }
            const res = $.parseJSON(xhr.responseText)
            console.log(res);

        }
        xhr.upload.onprogress = function (event) {
            if(event.lengthComputable){
                var percent = event.loaded/event.total *100;
                document.querySelector("#progress .progress-item").style.width = percent+"%";
            }
        }
        xhr.send(formdata);
        var responseData = xhr.response;
        var responseBody = xhr.responseText;
        console.log(responseBody);
    });
})