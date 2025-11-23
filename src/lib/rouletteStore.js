import { writable } from 'svelte/store';

// Define el límite máximo de películas
export const MAX_MOVIES = 10;

export const roulette = writable(/** @type {Movie[]} */([]));

/**
 * @typedef {Object} Movie
 * @property {string|number} id
 * @property {string} [title]
 * @property {Object} [meta]
 */

/**
 * Agregar película
 * @param {Movie} movie
 */
export function addMovie(movie) {
    roulette.update(movies => {
        // 1. Verificar si la película ya está
        if (movies.some(m => m.id === movie.id)) return movies;
        
        // 2. Verificar límite (seguridad adicional)
        if (movies.length >= MAX_MOVIES) return movies;

        return [...movies, movie];
    });
}

/**
 * Eliminar película
 * @param {string|number} movieId
 */
export function removeMovie(movieId) {
    roulette.update(movies =>
        movies.filter(movie => movie.id !== movieId)
    );
}

// Vaciar ruleta
export function clearRoulette() {
    roulette.set([]);
}