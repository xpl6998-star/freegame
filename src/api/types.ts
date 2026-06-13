export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  free_to_game: string;
}

export type Platform = 'all' | 'windows' | 'browser';
export type Category = 'all' | 'mmorpg' | 'shooter' | 'pvp' | 'mmofps' | 'survival' | 'mmo' | 'racing' | 'sports' | 'social';
export type SortBy = 'relevance' | 'popularity' | 'release-date' | 'alphabetical';

export interface GameFilters {
  platform?: Platform;
  category?: Category;
  'sort-by'?: SortBy;
}

export interface SteamServer {
  appid: string;
  count: number;
  servers: SteamServerItem[];
}

export interface SteamServerItem {
  name: string;
  ip: string;
  port: number;
  players: number;
  max_players: number;
  map: string;
  online: boolean;
}

export interface EpicFreeGame {
  id: string;
  title: string;
  cover: string;
  description: string;
  seller: string;
  is_free_now: boolean;
  free_start: string;
  free_end: string;
  link: string;
  original_price: number;
  original_price_desc: string;
}

export interface SteamUser {
  steamid: string;
  steamid3: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  personastate: number;
}