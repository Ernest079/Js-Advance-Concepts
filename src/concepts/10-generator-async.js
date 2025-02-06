import {heroes} from '../data/hero';
/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const generatorAsyncComponent = async (element) => {

  console.log('generatorAsyncComponent ');
  const heroGenerator  = getHeroGenerator();
  let isFinish = false;
  do {
    const {value, done} = await heroGenerator.next();
    isFinish = done;
    console.log({value, done});
    element.innerHTML = value;
  } while (!isFinish);

}

async function* getHeroGenerator(){
  for(const hero of heroes){
    await sleep();
    yield hero.name;
  }
  return 'Finish';
}

const sleep = () => {
  return new Promise ((resolve) =>{
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}