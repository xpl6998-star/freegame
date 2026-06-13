import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSteamUser } from '../api/uapi';
import { useLanguage } from '../hooks/useLanguage';

export function SteamUserPage() {
  const { t } = useLanguage();
  const [searchType, setSearchType] = useState<'steamid' | 'id' | 'id3'>('id');
  const [searchValue, setSearchValue] = useState('');

  const { data: user, isLoading, error, refetch } = useQuery({
    queryKey: ['steam-user', searchType, searchValue],
    queryFn: () =>
      fetchSteamUser({
        steamid: searchType === 'steamid' ? searchValue : undefined,
        id: searchType === 'id' ? searchValue : undefined,
        id3: searchType === 'id3' ? searchValue : undefined,
      }),
    enabled: false,
  });

  const handleSearch = () => {
    if (searchValue.trim()) {
      refetch();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2579756571711911" crossOrigin="anonymous" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            {t('steamUser.title')}
          </h1>
          <p className="text-slate-500">{t('steamUser.subtitle')}</p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
          <p className="mb-2">{t('steamUser.desc')}</p>
          <p className="font-medium mt-3">{t('steamUser.supportedFormats')}</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>steamid: 64位 SteamID（如 76561197960287930）</li>
            <li>id: 自定义 URL 名称（如 gabelogannewell）</li>
            <li>id3: Steam ID3 格式（如 STEAM_0:0:22202）</li>
          </ul>
          <p className="mt-2 text-indigo-600">{t('steamUser.keyNote')}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value as any)}
              className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="id">{t('steamUser.vanityUrl')}</option>
              <option value="steamid">{t('steamUser.steamId64')}</option>
              <option value="id3">{t('steamUser.steamId3')}</option>
            </select>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={
                searchType === 'id'
                  ? t('steamUser.vanityUrlPlaceholder')
                  : searchType === 'steamid'
                  ? t('steamUser.steamId64Placeholder')
                  : t('steamUser.steamId3Placeholder')
              }
              className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {t('steamUser.search')}
            </button>
          </div>
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

        {!isLoading && !error && user && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-6">
              <img
                src={user.avatarfull}
                alt={user.personaname}
                className="w-32 h-32 rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {user.personaname}
                </h2>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-medium">{t('steamUser.steamId')}:</span>{' '}
                    {user.steamid}
                  </p>
                  <p>
                    <span className="font-medium">{t('steamUser.steamId3')}:</span>{' '}
                    {user.steamid3}
                  </p>
                </div>
                <a
                  href={user.profileurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {t('steamUser.viewProfile')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
