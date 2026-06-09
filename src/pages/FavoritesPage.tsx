import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '../api/games';
import { useFavoritesStore } from '../stores/favorites';
import { GameGrid } from '../components/GameGrid';
import { useLanguage } from '../hooks/useLanguage';
import { useGameTranslation } from '../hooks/useGameTranslation';

export function FavoritesPage() {
  const { t, isZh } = useLanguage();
  const { favorites } = useFavoritesStore();

  const { data: allGames, isLoading } = useQuery({
    queryKey: ['games', 'all'],
    queryFn: () => fetchGames(),
  });

  const { translatedGames } = useGameTranslation(allGames || [], isZh);

  const favoriteGames = translatedGames?.filter((game) =>
    favorites.includes(game.id)
  ) || [];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          {t('favorites.title')}
        </h1>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-slate-500">{t('home.loading')}</div>
          </div>
        )}

        {!isLoading && favorites.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎮</div>
            <div className="text-xl text-slate-600 mb-2">
              {t('favorites.empty')}
            </div>
            <div className="text-slate-400">{t('favorites.emptyHint')}</div>
          </div>
        )}

        {!isLoading && favoriteGames.length > 0 && (
          <GameGrid games={favoriteGames} />
        )}
      </div>
    </div>
  );
}