function solution(score) {
  	const avg = score.map(v=>(v[0]+v[1])/2);
    const arr = [...avg].sort((a,b)=>b-a);
  	
    return avg.map(v => arr.indexOf(v) + 1);
}