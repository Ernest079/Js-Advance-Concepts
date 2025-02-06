/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const generatorFunctionComponent = (element) => {

  console.log('generatorFunctionComponent');
  const myGenerator = generatorFunction();
  const genId = idGenerator();
  const button = document.createElement('button');
  button.innerText = 'Next';
  element.append(button);
  const renderButton = () => {
    const {value} = genId.next();
    button.innerText = `Next ${value}`;
  }
  button.addEventListener('click', renderButton);
}

function* idGenerator(){
  let id = 0;
  while(true){
    yield ++id;
  }
}

function* generatorFunction() {

  yield 'Primero';
  yield 'Segundo';
  yield 'Tercero';
  yield 'Cuarto';
  return 'YA no hay valores';
}