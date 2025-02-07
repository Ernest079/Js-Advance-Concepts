import { heroes } from '../data/hero';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
  const id = '5d86371f2343e37870b91ef1';
  const heroIDs = heroes.map(hero => hero.id);

  for await (const hero of getHeroesAsync(heroIDs)) {
    element.innerHTML += `${hero.name} <br>`;
  }
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}