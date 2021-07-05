/**
 * 1. A fájlok kezeléséhez az fs modul promise alapú verzióját használd.
 */
const fsp = require('fs').promises
const { join } = require('path')
/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */
const jsonPath = join(__dirname, 'db', 'products.json');

/**
 * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
 * majd visszaadja a kapott tömböt.
 * @returns objektumok tömbje
 */
const getList = async () => {
    const list = await fsp.readFile(jsonPath, 'utf8')
    return JSON.parse(list)
};

/**
 * 4. A kapott tömböt json formátumra alakítja és beleírja a jsonPath útvonalon 
 * található fájlba.
 * @param {Array} list objektumok tömbje
 * @returns 
 */
const saveList = async (list = []) => {
    const newList = JSON.stringify(list, null, 4)
    await fsp.writeFile(jsonPath, newList)
};

/**
 * 5. Frissíti az id alapján kiválasztott entitást és visszaírja a .json fájlba.
 * A .json állomány írásához a saveList segédfüggvényt használd.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = async (entity = {}) => {
    const list = await getList();
    const entityIndex = list.findIndex(item => item.id === entity.id);
    list[entityIndex] = { ...list[entityIndex], ...entity };
    await saveList(list);
};

module.exports = {
    update,
    getList,
    saveList
};
