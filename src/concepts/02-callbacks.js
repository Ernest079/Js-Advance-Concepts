import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} elment 
 */
export const callbacksComponent = (element) => {

  console.log('callbacksComponent');
  const id = '5d86371f1efebc31def272e2';
  findHero(id, (error, hero) => {
    // element.innerHTML = hero?.name || 'Hero not found';
    if(error){
      element.innerHTML = error;
      return;
    }

    element.innerHTML = hero.name;
  });

}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {
  const hero = heroes.find(hero => hero.id === id);
  if(!hero){
    callback(`Hero ${id} not found`);
    return;
  }
  callback(null, hero);
}