import { useState } from 'react';
import type { LocalizedGame } from '../api/gamesZh';
import { useFavoritesStore } from '../stores/favorites';
import { useLanguage } from '../hooks/useLanguage';
import { DownloadModal } from './DownloadModal';

interface GameCardProps {
  game: LocalizedGame;
}

export function GameCard({ game }: GameCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const { isZh } = useLanguage();
  const isFav = isFavorite(game.id);
  const [showModal, setShowModal] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(game.id);
    } else {
      addFavorite(game.id);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const isBrowserGame = game.platform.toLowerCase().includes('browser') ||
                          game.platform_zh.includes('网页');

    if (isBrowserGame) {
      e.preventDefault();
      window.open(game.game_url, '_blank', 'noopener,noreferrer');
    } else {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const displayDescription = isZh ? game.description_zh : game.short_description;
  const displayGenre = isZh ? game.genre_zh : game.genre;
  const displayPlatform = isZh ? game.platform_zh : game.platform;

  return (
    <>
      <article className="game-card bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
        <div
          className="group block cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={game.thumbnail}
              alt={`${game.title} - 免费游戏下载`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <button
              onClick={handleFavorite}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-md"
              aria-label={isFav ? '取消收藏' : '添加收藏'}
            >
              <span className="text-lg" aria-hidden="true">
                {isFav ? '❤️' : '🤍'}
              </span>
            </button>
          </div>

          <div className="p-4">
            <h2 className="font-semibold text-slate-800 mb-1 truncate">
              {game.title}
            </h2>
            <p className="text-sm text-slate-500 line-clamp-2 mb-3">
              {displayDescription}
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
        </div>
      </article>

      <DownloadModal
        game={game}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
