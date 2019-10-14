const API_KEY = "ws67xdhznddznch6fs29cxpp";
const DEFAULT_LINK = "https://api.sportradar.us";
const SOURCE = "soccer-t3";
const REGION = "eu";
const LANG_CODE = "en";

module.exports = {
    api: {
        tournaments: `${DEFAULT_LINK}/${SOURCE}/${REGION}/${LANG_CODE}/tournaments.json?api_key=${API_KEY}`,
        tournamentById: (id) => `${DEFAULT_LINK}/${SOURCE}/${REGION}/${LANG_CODE}/tournaments/${id}/standings.json?api_key=${API_KEY}`
    }
}