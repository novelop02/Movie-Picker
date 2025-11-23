import { writable } from 'svelte/store';

// maximo de peliculas en ruleta
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
        if (movies.some(m => m.id === movie.id)) return movies;
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