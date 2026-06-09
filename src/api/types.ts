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