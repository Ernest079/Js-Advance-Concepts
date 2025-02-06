import { heroes } from '../data/hero';
 
/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const asyncComponent = (element) => {
  const id = '5d86371f9f80b591f499df32';
  console.log('INicio');
  findHero(id).then(console.log)
    .catch(error => element.innerHTML = error);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async(id) => {
  const hero = heroes.find(hero => hero.id === id);
  if(!hero){
    throw new Error('Hero not found');
  }
  return hero.name;
}