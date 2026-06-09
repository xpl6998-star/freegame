import type { Game, GameFilters } from './types';

const BASE_URL = 'https://www.freetogame.com/api';

export async function fetchGames(filters?: GameFilters): Promise<Game[]> {
  const params = new URLSearchParams();

  if (filters?.platform && filters.platform !== 'all') {
    params.append('platform', filters.platform);
  }
  if (filters?.category && filters.category !== 'all') {
    params.append('category', filters.category);
  }
  if (filters?.['sort-by']) {
    params.append('sort-by', filters['sort-by']);
  }

  const queryString = params.toString();
  const url = queryString ? `${BASE_URL}/games?${queryString}` : `${BASE_URL}/games`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  return response.json();
}

export async function fetchGameById(id: number): Promise<Game> {
  const response = await fetch(`${BASE_URL}/game?id=${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch game');
  }

  return response.json();
}