function addData(){
    let data=[
        {"USER":"Edgar Jones","LOCATION":"Hyderabad","DEPARTMENT":"Product Engg","ROLE":"Full-stack Developer","EMP NO":"TZ002341","STATUS":"Active","JOIN DT":"12/03/2023"},
        {"USER":"Edgar Jones","LOCATION":"Hyderabad","DEPARTMENT":"Product Engg","ROLE":"Full-stack Developer","EMP NO":"TZ002341","STATUS":"Active","JOIN DT":"12/03/2023"},
        {"USER":"Edgar Jones","LOCATION":"Hyderabad","DEPARTMENT":"Product Engg","ROLE":"Full-stack Developer","EMP NO":"TZ002341","STATUS":"Active","JOIN DT":"12/03/2023"},
        {"USER":"Edgar Jones","LOCATION":"Hyderabad","DEPARTMENT":"Product Engg","ROLE":"Full-stack Developer","EMP NO":"TZ002341","STATUS":"Active","JOIN DT":"12/03/2023"}
    ];
    
}


function checkAll(){
    var header=document.getElementsByClassName('parent-checkbox');
    var body=document.getElementsByClassName('body-checkbox');
    for(var i=0;i<body.length;i++){
        body[i].checked=header[0].checked;
    }
}

function updateButtonColor(){
    var header=document.getElementsByClassName('parent-checkbox');
    var button=document.getElementsByClassName('delete-btn');
    var body=document.getElementsByClassName('body-checkbox');
    var check=false;
    var check2;
    for(var i=0;i<body.length;i++){
        if(body[i].checked){
            check=true;
        }
    }
    if(check){
        button[0].style.backgroundColor="#F56363";
        button[0].style.cursor="pointer";
    }
    else{
        button[0].style.backgroundColor="#F89191";
        button[0].style.cursor="default";
    }
    for(var i=0;i<body.length;i++){
        if(body[i].checked){
            check2=true;
            continue;
        }
        else{
            check2=false;
            header[0].checked=false;
            break;
        }
    }
    if(check2){
        header[0].checked=true;
    }
}