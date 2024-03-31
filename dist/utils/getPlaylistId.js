"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Extracts the playlist ID from a YouTube playlist URL.
 *
 * This function extract the playlist ID from a YouTube playlist URL.
 * It searches for the pattern "list=", If found, it returns the ID.
 *
 * @param {string} url The YouTube playlist URL.
 * @returns {string | null} The playlist ID if found, otherwise null.
 */
function getPlaylistIdFromLink(url) {
    const playlistRegex = /list=([\w-]+)|^([\w-]+)$/;
    const match = playlistRegex.test(url);
    if (match) {
        return url
            .match(playlistRegex)[0]
            .split('list=')
            .filter((e) => e)[0];
    }
    return null;
}
exports.default = getPlaylistIdFromLink;
