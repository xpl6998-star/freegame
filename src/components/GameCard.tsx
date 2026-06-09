import { Link } from 'react-router-dom';
import type { Game } from '../api/types';
import { useFavoritesStore } from '../stores/favorites';
import { useLanguage } from '../hooks/useLanguage';

const genreMap: Record<string, string> = {
  mmorpg: 'MMORPG',
  shooter: '射击',
  pvp: 'PvP',
  mmofps: 'MMO射击',
  survival: '生存',
  mmo: 'MMO',
  racing: '赛车',
  sports: '体育',
  social: '社交',
  moba: 'MOBA',
  fighting: '格斗',
  strategy: '策略',
  card: '卡牌',
  action: '动作',
  adventure: '冒险',
};

const platformMap: Record<string, string> = {
  windows: '电脑',
  browser: '网页',
  all: '全部',
};

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const { isZh } = useLanguage();
  const isFav = isFavorite(game.id);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(game.id);
    } else {
      addFavorite(game.id);
    }
  };

  const displayGenre = isZh
    ? (genreMap[game.genre.toLowerCase()] || game.genre)
    : game.genre;
  const displayPlatform = isZh
    ? (platformMap[game.platform.toLowerCase()] || game.platform)
    : game.platform;

  return (
    <Link
      to={`/game/${game.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-md"
        >
          <span className="text-lg">
            {isFav ? '❤️' : '🤍'}
          </span>
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-slate-800 mb-1 truncate">
          {game.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-3">
          {game.short_description}
        </p>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium rounded-md bg-indigo-100 text-indigo-700">
            {displayGenre}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600">
            {displayPlatform}
          </span>
        </div>
      </div>
    </Link>
  );
}