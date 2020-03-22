
// testApi()
var params = getParams()
var hasDoor = false;
if (params.door === "vsnb") {
    hasDoor = true;
}
if (!hasDoor) {
    // checkValid(params, function (nickName) {
    //     openWindow(nickName)
    // })
    setTimeout(function () {
        $("#nickName").val(localStorage["vs_meeting_nickname"])
        $("#nickNameModal").modal({ backdrop: 'static', keyboard: false })
    }, 500)
} else {
    setTimeout(function () {
        $("#nickName").val(localStorage["vs_meeting_nickname"])
        $("#nickNameModal").modal({ backdrop: 'static', keyboard: false })
    }, 500)
}

function login(clientType) {
    var nickName = $("#nickName").val()
    var eventId = $("#eventId").val()
    var guestNo = $("#guestNo").val()
    if (nickName && eventId && guestNo) {
        // let reg = /^1(3[0-9]|4[5,7]|5[0-9]|6[2,5,6,7]|7[0-9]|8[0-9]|9[1,8,9])\d{8}$/;
        let reg = /^1([3-9][0-9])\d{8}$/;
        if (!reg.test(guestNo)) {
            notify_warning(current_language.tip, current_language.guestNoMustBePhoneNo)
            return
        }
        checkIM(guestNo, function () {
            // var userId = randomRange(1, 1000000)
            params.nickName = nickName,
                params.eventId = eventId,
                params.tenantId = vsTestTenantId,
                params.clientType = clientType,
                params.userId = guestNo + "vsnb" + randomRange(100000, 999999),
                params.guestNo = guestNo

            localStorage["vs_meeting_nickname"] = nickName
            openWindow()
        })
    } else if (!eventId) {
        notify_warning(current_language.tip, current_language.meetingNoNotNull)
    } else if (!guestNo) {
        notify_warning(current_language.tip, current_language.guestNoNotNull)
    } else {
        notify_warning(current_language.tip, current_language.nickNameNotNull)
    }
}

function addEvent() {
    var tenant_id = vsTestTenantId.toString();
    var event_id = randomString(6)
    var data = {
        "tenant_id": tenant_id,
        "event_id": event_id,
        "start_time": 0,
        "end_time": 0,
        "viewer": false,
        "record": false
    }
    var url = baseVrcUrl + "/rms/v1/room?tenant_id=" + tenant_id;
    var header = {
        headers: { 'Authorization': baseToken }
    }
    instanceHttp.post(url, data, header).then(function (response) {
        $("#eventText").text(current_language.meetingNo + ": " + response.data.event_id)
    })
}

function openWindow(name) {
    var has_showModalDialog = !!window.showModalDialog;//定义一个全局变量判定是否有原生showModalDialog方法
    if (!has_showModalDialog && !!(window.opener)) {
        window.onbeforeunload = function () {
            window.opener.hasOpenWindow = false;		//弹窗关闭时告诉opener：它子窗口已经关闭
        }
    }
    //定义window.showModalDialog如果它不存在
    if (window.showModalDialog == undefined) {
        window.showModalDialog = function (url, mixedVar, features) {
            if (window.hasOpenWindow) {
                //                    alert(current_language.hasOpenWindow);//避免多次点击会弹出多个窗口
                window.myNewWindow.focus();
            }
            window.hasOpenWindow = true;
            if (mixedVar) var mixedVar = mixedVar;
            //因window.showmodaldialog 与 window.open 参数不一样，所以封装的时候用正则去格式化一下参数
            if (features) var features = features.replace(/(dialog)|(px)/ig, "").replace(/;/g, ',').replace(/\:/g, "=");
            //window.open("Sample.htm",null,"height=200,width=400,status=yes,toolbar=no,menubar=no");
            //window.showModalDialog("modal.htm",obj,"dialogWidth=200px;dialogHeight=100px");
            var left = (window.screen.width - parseInt(features.match(/width[\s]*=[\s]*([\d]+)/i)[1])) / 2;
            var top = (window.screen.height - parseInt(features.match(/height[\s]*=[\s]*([\d]+)/i)[1])) / 2;
            window.myNewWindow = window.open(url, "_blank", features);
        }
    }


    var tenantId = params["tenantId"];
    var eventId = params["eventId"];
    var clientType = params["clientType"];
    var userId = params["userId"];
    var guestNo = params["guestNo"];
    var lang = params["lang"]

    var nickName = name ? name : params.nickName

    // setTimeout(function () {
    //     releaseRoom(params)
    // }, 5000)
    var queryString = "?tenantId=" + tenantId + "&eventId=" + eventId + "&clientType=" + clientType + "&userId=" + userId + "&nickName=" + nickName + "&guestNo=" + guestNo
    if (lang) {
        queryString = queryString + "&lang=" + lang
    }
    if (hasDoor) {
        queryString = queryString + "&door=vsnb";
    }
    // window.showModalDialog(baseWebUrl +"/vsrtc-meeting/meeting.html"+queryString, "hotel", "dialogWidth:" + window.screen.availWidth + "px;dialogHeight:" + (window.screen.availHeight) + "px;help:no;resizable:no;center:yes;scroll:yes;status:no;");
    window.showModalDialog(baseWebUrl + web_url_prefix + "/meeting.html" + queryString, "hotel", "dialogWidth:" + window.screen.availWidth + "px;dialogHeight:" + (window.screen.availHeight) + "px;help:no;resizable:no;center:yes;scroll:yes;status:no;");
}

function getToken() {
    var url = baseVrcUrl + "/rms/v1/authentication"
    var data = { "tenant_id": vsTestTenantId, "apikey": "o9d9fjewlsdhioiqwjioeeijlkjwlr9c" }
    instanceHttp.post(url, data).then(function (response) {
        console.log("token", response)
    })
}

function checkIM(guestNo, callback) {
    var url = `https://console.tim.qq.com/v4/im_open_login_svc/account_check?sdkappid=${tx_chat_room_i}&identifier=administrator&usersig=${tx_chat_room_u}&random=99999999&contenttype=json`
    var data = {
        "CheckItem": [{
            "UserID": "a" + guestNo
        }]
    }
    instanceHttp.post(url, data).then(function (res) {
        let accountStatus = res.ResultItem[0].AccountStatus
        if (accountStatus && accountStatus == "Imported") {
            if (callback) {
                callback()
            }
        } else {
            notify_warning(current_language.tip, "对不起，您不是受邀嘉宾")
        }
    })
}

function testApi() {
    var url = baseVrcUrl + "/rms/v1/room/update/25"
    var data = { "event_id": "25", "tenant_id": "28", "start_time": 1560919560, "end_time": 1560941160, "inadvance": "200" }
    let config = {
        headers: { 'Authorization': baseToken }
    }
    instanceHttp.put(url, data, config).then(function (response) {
        console.log("token", response)
    })
}

