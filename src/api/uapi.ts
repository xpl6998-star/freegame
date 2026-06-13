import type { SteamServer, EpicFreeGame, SteamUser } from './types';

const BASE_URL = 'https://uapis.cn/api/v1';
const API_KEY = 'uapi-sflbfifcoDfqkECh5--xw7MaA7CjKFeeZxit3OMH';

const headers = {
  'X-API-Key': API_KEY,
  'Content-Type': 'application/json',
};

export async function fetchSteamServers(params: {
  appid: string;
  name?: string;
  limit?: number;
}): Promise<SteamServer> {
  const searchParams = new URLSearchParams();
  searchParams.append('appid', params.appid);
  if (params.name) searchParams.append('name', params.name);
  if (params.limit) searchParams.append('limit', String(params.limit));

  const url = `${BASE_URL}/game/steam/servers?${searchParams.toString()}`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch Steam servers');
  }

  return response.json();
}

export async function fetchEpicFreeGames(): Promise<EpicFreeGame[]> {
  const response = await fetch(`${BASE_URL}/game/epic-free`, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch Epic free games');
  }

  const data = await response.json();
  return data.data || [];
}

export async function fetchSteamUser(params: {
  steamid?: string;
  id?: string;
  id3?: string;
}): Promise<SteamUser> {
  const searchParams = new URLSearchParams();
  if (params.steamid) searchParams.append('steamid', params.steamid);
  if (params.id) searchParams.append('id', params.id);
  if (params.id3) searchParams.append('id3', params.id3);

  const url = `${BASE_URL}/game/steam/summary?${searchParams.toString()}`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch Steam user');
  }

  return response.json();
}
