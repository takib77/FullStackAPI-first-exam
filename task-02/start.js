/**
 * 1. Töltsd be a json állományok kezelését végző modult az azonos mappából és 
 * emeld ki egy változóba az get metódusát.
 */
const { get } = require('./reader')

/*
 * 2. A teszteléshez vedd ki a komment blokkból az alábbi kódot.
 */
const getter = async (id) => {
    console.log(await get(id));
}

getter(9);

// Az eredeti teszkóddal TypeErrort kaptam.

//     (async () => {
//     console.log(await get(9));
// })();