function solution(str_list, ex) {
    return str_list.map((item) => {return item.includes(ex) ? '':item   }).join('')
}