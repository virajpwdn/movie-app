const _config = {
    BASE_URI: process.env.EXPO_PUBLIC_MOVIE_BASE_URI || '',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY || ''
}

export const config = Object.freeze(_config);