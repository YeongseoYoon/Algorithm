function solution(date1, date2) {
    if(new Date(date1) < new Date(date2) ){
        return 1;
    }else {
        return 0;
    }

}