import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const promiseComponent = (element) => {

  const renderHero = (hero1, hero2) => {
    element.innerHTML = `
      <h3>${hero1.name}</h3>  
      <h3>${hero2.name}</h3>  
    `;
  }  

  const renderError = (error) => {
    element.innerHTML = `${error}`;
  }
  const id1 = '5d86371f233c9f2425f16916';
  const id2 = '5d86371fd55e2e2a30fe1ccb';

  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2])=>{
      renderHero(hero1, hero2);
    }).catch(renderError);
  // let hero1;
  // findHero(id1)
  //   .then(hero => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   }).then(hero2 => {
  //     renderHero(hero1, hero2);
  //   }).catch(renderError);
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
