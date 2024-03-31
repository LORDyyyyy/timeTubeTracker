/**
 * Extracts the playlist ID from a YouTube playlist URL.
 *
 * This function extract the playlist ID from a YouTube playlist URL.
 * It searches for the pattern "list=", If found, it returns the ID.
 *
 * @param {string} url The YouTube playlist URL.
 * @returns {string | null} The playlist ID if found, otherwise null.
 */
function getPlaylistIdFromLink(url: string): string | null {
  const playlistRegex = /list=([\w-]+)|^([\w-]+)$/;
  const match = playlistRegex.test(url);

  if (match) {
    return (url as string)
      .match(playlistRegex)[0]
      .split('list=')
      .filter((e: string) => e)[0];
  }

  return null;
}

export default getPlaylistIdFromLink;
