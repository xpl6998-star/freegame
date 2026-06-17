import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGames, getLocalizedGame } from '../api/gamesZh';
import type { Platform, Category, SortBy } from '../api/types';
import { FilterBar } from '../components/FilterBar';
import { GameGrid } from '../components/GameGrid';
import { useLanguage } from '../hooks/useLanguage';
import type { LocalizedGame } from '../api/gamesZh';

export function HomePage() {
  const { t, isZh } = useLanguage();
  const [platform, setPlatform] = useState<Platform>('all');
  const [category, setCategory] = useState<Category>('all');
  const [sortBy, setSortBy] = useState<SortBy>('relevance');
  const [search, setSearch] = useState('');

  const { data: games, isLoading, error, refetch } = useQuery({
    queryKey: ['games', platform, category, sortBy],
    queryFn: () =>
      fetchGames({
        platform: platform === 'all' ? undefined : platform,
        category: category === 'all' ? undefined : category,
        'sort-by': sortBy,
      }),
  });

  const localizedGames = useMemo(() => {
    if (!games) return [];
    return games.map(game => getLocalizedGame(game));
  }, [games]);

  const filteredGames = useMemo(() => {
    if (!localizedGames) return [];
    if (!search.trim()) return localizedGames;
    const lowerSearch = search.toLowerCase();
    return localizedGames.filter((game) =>
      game.title.toLowerCase().includes(lowerSearch)
    );
  }, [localizedGames, search]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            冲冲冲免费游戏
          </h1>
          <p className="text-slate-500">{t('home.subtitle')}</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('home.search')}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <FilterBar
          platform={platform}
          category={category}
          sortBy={sortBy}
          onPlatformChange={setPlatform}
          onCategoryChange={setCategory}
          onSortByChange={setSortBy}
        />

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-slate-500">{t('home.loading')}</div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="text-red-500">{t('home.error')}</div>
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {t('home.retry')}
            </button>
          </div>
        )}

        {!isLoading && !error && filteredGames.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            {t('home.noResults')}
          </div>
        )}

        {!isLoading && !error && filteredGames.length > 0 && (
          <GameGrid games={filteredGames as any} />
        )}
      </div>
    </div>
  );
}
