import type { SteamServer, EpicFreeGame, SteamUser } from './types';

const BASE_URL = 'https://uapis.cn/api/v1';
const API_KEY = import.meta.env.VITE_UAPI_KEY || '';

if (!API_KEY) {
  console.warn('VITE_UAPI_KEY is not set. API calls may fail.');
}

const headers = {
  'X-API-Key': API_KEY,
  'Content-Type': 'application/json',
};

function sanitizeString(input: string): string {
  return input.replace(/[<>'"&]/g, '');
}

function validateAppid(appid: string): boolean {
  return /^\d{1,20}$/.test(appid);
}

export async function fetchSteamServers(params: {
  appid: string;
  name?: string;
  limit?: number;
}): Promise<SteamServer> {
  const sanitizedAppid = sanitizeString(params.appid);
  if (!validateAppid(sanitizedAppid)) {
    throw new Error('Invalid AppID format');
  }

  const searchParams = new URLSearchParams();
  searchParams.append('appid', sanitizedAppid);
  if (params.name) {
    searchParams.append('name', sanitizeString(params.name));
  }
  if (params.limit) {
    const safeLimit = Math.min(Math.max(1, params.limit), 100);
    searchParams.append('limit', String(safeLimit));
  }

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
  if (params.steamid) {
    searchParams.append('steamid', sanitizeString(params.steamid));
  }
  if (params.id) {
    searchParams.append('id', sanitizeString(params.id));
  }
  if (params.id3) {
    searchParams.append('id3', sanitizeString(params.id3));
  }

  const url = `${BASE_URL}/game/steam/summary?${searchParams.toString()}`;

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error('Failed to fetch Steam user');
  }

  return response.json();
}
