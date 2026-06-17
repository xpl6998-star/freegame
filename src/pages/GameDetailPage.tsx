import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchGameById, getLocalizedGame } from '../api/gamesZh';
import { useFavoritesStore } from '../stores/favorites';
import { useLanguage } from '../hooks/useLanguage';
import { useMemo } from 'react';

export function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, isZh } = useLanguage();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const { data: game, isLoading, error } = useQuery({
    queryKey: ['game', id],
    queryFn: () => fetchGameById(Number(id)),
    enabled: !!id,
  });

  const localizedGame = useMemo(() => {
    if (!game) return null;
    return getLocalizedGame(game);
  }, [game]);

  if (!id) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-500">Invalid game ID</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-500">{t('home.loading')}</div>
      </div>
    );
  }

  if (error || !localizedGame) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-red-500">{t('home.error')}</div>
      </div>
    );
  }

  const isFav = isFavorite(localizedGame.id);

  const handleFavorite = () => {
    if (isFav) {
      removeFavorite(localizedGame.id);
    } else {
      addFavorite(localizedGame.id);
    }
  };

  const displayGenre = isZh ? localizedGame.genre_zh : localizedGame.genre;
  const displayPlatform = isZh ? localizedGame.platform_zh : localizedGame.platform;
  const displayDescription = isZh ? localizedGame.description_zh : localizedGame.short_description;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors mb-6"
        >
          <span>←</span>
          <span>{t('game.back')}</span>
        </Link>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <div className="relative aspect-video">
            <img
              src={localizedGame.thumbnail}
              alt={localizedGame.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  {localizedGame.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700">
                    {displayGenre}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-slate-100 text-slate-600">
                    {displayPlatform}
                  </span>
                </div>
              </div>

              <button
                onClick={handleFavorite}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isFav
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isFav ? t('game.removeFavorite') : t('game.addFavorite')}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  {t('game.developer')}
                </div>
                <div className="font-medium text-slate-800">{localizedGame.developer}</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  {t('game.publisher')}
                </div>
                <div className="font-medium text-slate-800">{localizedGame.publisher}</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  {t('game.releaseDate')}
                </div>
                <div className="font-medium text-slate-800">{localizedGame.release_date}</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  {t('game.platform')}
                </div>
                <div className="font-medium text-slate-800">{displayPlatform}</div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                {t('game.description')}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {displayDescription}
              </p>
            </div>

            {localizedGame.game_url && (
              <a
                href={localizedGame.game_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
              >
                {t('game.officialSite')} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
