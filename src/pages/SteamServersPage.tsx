import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSteamServers } from '../api/uapi';
import { useLanguage } from '../hooks/useLanguage';

export function SteamServersPage() {
  const { t } = useLanguage();
  const [appid, setAppid] = useState('');
  const [name, setName] = useState('');
  const [limit, setLimit] = useState(20);

  const { data: serverData, isLoading, error, refetch } = useQuery({
    queryKey: ['steam-servers', appid, name, limit],
    queryFn: () =>
      fetchSteamServers({
        appid,
        name: name || undefined,
        limit,
      }),
    enabled: false,
  });

  const handleSearch = () => {
    if (appid.trim()) {
      refetch();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2579756571711911" crossOrigin="anonymous" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            {t('steamServers.title')}
          </h1>
          <p className="text-slate-500">{t('steamServers.subtitle')}</p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
          <p className="mb-2">{t('steamServers.desc')}</p>
          <p className="font-medium">{t('steamServers.commonAppids')}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-indigo-100 px-2 py-1 rounded">SCUM: 513710</span>
            <span className="bg-indigo-100 px-2 py-1 rounded">ARK: 346110</span>
            <span className="bg-indigo-100 px-2 py-1 rounded">Rust: 252490</span>
            <span className="bg-indigo-100 px-2 py-1 rounded">CS2: 730</span>
          </div>
          <p className="mt-2 text-indigo-600">{t('steamServers.hint')}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('steamServers.appid')} *
              </label>
              <input
                type="text"
                value={appid}
                onChange={(e) => setAppid(e.target.value)}
                placeholder={t('steamServers.appidPlaceholder')}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('steamServers.name')}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('steamServers.namePlaceholder')}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('steamServers.limit')}
              </label>
              <select
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleSearch}
            disabled={!appid.trim()}
            className="mt-4 w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {t('steamServers.search')}
          </button>
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

        {!isLoading && !error && serverData && serverData.servers && serverData.servers.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            {t('home.noResults')}
          </div>
        )}

        {!isLoading && !error && serverData && serverData.servers && serverData.servers.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 text-sm text-slate-600">
              {t('steamServers.table.total')}: {serverData.count}
            </div>
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                    {t('steamServers.table.name')}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                    {t('steamServers.table.address')}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                    {t('steamServers.table.players')}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                    {t('steamServers.table.map')}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                    {t('steamServers.table.status')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {serverData.servers.map((server, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {server.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {server.ip}:{server.port}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {server.players}/{server.max_players}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {server.map}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          server.online
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {server.online ? t('steamServers.online') : t('steamServers.offline')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
