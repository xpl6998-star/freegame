import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

export function Navbar() {
  const { t, toggleLanguage, isZh } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/favicon.png" alt="logo" className="w-10 h-10 object-contain rounded-lg" />
            <span className="font-bold text-xl text-slate-800">
              冲冲冲免费游戏
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/epic-free"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {t('nav.epicFree')}
            </Link>
            <Link
              to="/steam-servers"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {t('nav.steamServers')}
            </Link>
            <Link
              to="/steam-user"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {t('nav.steamUser')}
            </Link>
            <Link
              to="/favorites"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {t('nav.favorites')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-medium hover:bg-indigo-200 transition-colors"
            >
              {isZh ? 'EN' : '中'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}