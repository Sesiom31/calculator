const solveOperation = (operacion)=>{    
  if(operacion.includes('(')){
    let apertura = operacion.match(/\(/g) ? operacion.match(/\(/g).length : 0
    let cierre = operacion.match(/\)/g) ?  operacion.match(/\)/g).length : 0
    while (cierre < apertura){
      operacion += ')'
      cierre++
    }
  }
  // reemplazando ( por *(
  operacion = operacion.replace(/(\d)\(/g, `$1*(`);
  operacion = operacion.replace(/\)(\d)/g,`)*$1` ) ;
  operacion = operacion.replace(/\b0+(\d+)/g, `$1`);

  const newSolve= new Function(`return ${operacion}`);

  return newSolve()  
}

console.log(typeof solveOperation('45'))
console.log(5*(3+5)*4)