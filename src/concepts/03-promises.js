import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const promiseComponent = (element) => {

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  }  

  const renderError = (error) => {
    element.innerHTML = `${error}`;
  }
  const id1 = '5d86371f233c9f2425f16916';
  const id2 = '5d86371fd55e2e2a30fe1ccb2';

  findHero(id1).then(renderHero).catch(renderError);
}

/**
 * 
 * @param {string} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {

  return new Promise((resolve, reject) => {
    const hero = heroes.find(hero => hero.id === id);
    if(hero){
      resolve(hero);
      return;
    }
    reject(`Hero ${id} not found`);
  });

}