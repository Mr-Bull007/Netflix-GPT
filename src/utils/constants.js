export const BACKGROUND_IMG = import.meta.env.VITE_BACKGROUND_IMG;
export const LOGO_IMG = import.meta.env.VITE_LOGO_IMG;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_BEARER_TOKEN,
  },
};

export const IMG_CDN_URL = import.meta.env.VITE_IMG_CDN_URL;

export const SUPPORTED_LANGUAGES = [
  { id: "en", name: "English" },
  { id: "hindi", name: "Hindi" },
  { id: "spanish", name: "Spanish" },
];
