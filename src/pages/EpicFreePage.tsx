import { useQuery } from '@tanstack/react-query';
import { fetchEpicFreeGames } from '../api/uapi';
import { useLanguage } from '../hooks/useLanguage';

export function EpicFreePage() {
  const { t } = useLanguage();

  const { data: games, isLoading, error, refetch } = useQuery({
    queryKey: ['epic-free'],
    queryFn: fetchEpicFreeGames,
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2579756571711911" crossOrigin="anonymous" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            {t('epicFree.title')}
          </h1>
          <p className="text-slate-500">{t('epicFree.subtitle')}</p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
          <p>{t('epicFree.desc')}</p>
        </div>

        {isLoading && (
          <div className="text-center py-20 text-slate-500">
            {t('home.loading')}
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="text-red-500 mb-4">{t('home.error')}</div>
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              {t('home.retry')}
            </button>
          </div>
        )}

        {!isLoading && !error && games && games.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            {t('home.noResults')}
          </div>
        )}

        {!isLoading && !error && games && games.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <img
                  src={game.cover}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">
                    {game.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-indigo-600 font-medium">
                      {game.is_free_now ? t('epicFree.free') : t('epicFree.upcoming')}
                    </span>
                    <span className="text-slate-400">{game.original_price_desc}</span>
                  </div>
                  <div className="mt-4 text-xs text-slate-400">
                    {t('epicFree.validPeriod')}: {game.free_start} - {game.free_end}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
