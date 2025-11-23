import { writable } from 'svelte/store';

/**
 * @typedef {Object} Movie
 * @property {number|string} id
 * @property {string} [title]
 * @property {string} [year]
 */

// Define el límite máximo de películas en la ruleta
const MAX_MOVIES = 10;

// Inicializa el store con un array vacío para guardar los objetos de película
/** @type {import('svelte/store').Writable<Movie[]>} */
const rouletteIds = writable([]);

// Función para añadir una película a la ruleta
/**
 * Añade una película a la ruleta
 * @param {Movie} movie
 * @returns {boolean} success
 */
function addMovie(movie) {
    let success = false; // Variable para rastrear si la adición fue exitosa
    rouletteIds.update(ids => {
        // 1. Verificar si la película ya está
        if (ids.some(m => m.id === movie.id)) {
            // console.log("Movie already in roulette.");
            success = false; // No se agregó (ya estaba)
            return ids; // No hace cambios
        }

        // 2. Verificar el límite
        if (ids.length >= MAX_MOVIES) {
            // console.log("Limite de peliculas alcanzado.");
            success = false; // No se agregó (límite alcanzado)
            return ids;
        }

        // 3. Agregar la película si pasa las validaciones
        success = true; // Se agregó correctamente
        return /** @type {Movie[]} */([...ids, movie]);
    });
    
    // Devuelve el estado (true/false) para que el componente lo use para mostrar el modal.
    return success; 
}

// Función para remover una película por ID
/**
 * @param {Movie['id']} movieId
 */
function removeMovie(movieId) {
    rouletteIds.update(ids => ids.filter(movie => movie.id !== movieId));
}

// Función para vaciar la ruleta
function clearRoulette() {
    rouletteIds.set([]);
}

export const roulette = {
    subscribe: rouletteIds.subscribe,
    addMovie,
    removeMovie,
    clearRoulette,
    MAX_MOVIES // Exporta el límite
};