/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const promiseRaceComponent = (element) => {
  element.innerHTML = 'Loading...';
  const renderValue = (value) => { 
    element.innerHTML = value; 
  }
  Promise.race([
    slowPromise(),
    slowPromise(),
    mediumPromise(),
    mediumPromise(),
    fastPromise(),
    fastPromise(),
  ]).then(renderValue);
}

const slowPromise =() => new Promise ( resolve =>{
  setTimeout(() => {
    resolve('Slow Promise');
  }, 3001);
}); 
const mediumPromise =() => new Promise ( resolve =>{
  setTimeout(() => {
    resolve('medium Promise');
  }, 3002);
}); 
const fastPromise =() => new Promise ( resolve =>{
  setTimeout(() => {
    resolve('Fast Promise');
  }, 3000);
}); 

