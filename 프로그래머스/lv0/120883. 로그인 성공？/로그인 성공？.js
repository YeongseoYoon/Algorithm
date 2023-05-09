function solution(id_pw, db) {
    db.forEach(function(info) {
        if (info[0] === id_pw[0] && info[1] === id_pw[1]) {
            result =  "login";
        }else if(info[0] === id_pw[0] && info[1] !== id_pw[1]) {
            result =  "wrong pw";
        }else if(info[0] !== id_pw[0] && info[1] !== id_pw[1]) {
            result =  "fail";
        }
    });
               
    return result;
}