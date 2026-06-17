import { useEffect, useState } from 'react';
import type { LocalizedGame } from '../api/gamesZh';

interface DownloadModalProps {
  game: LocalizedGame;
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ game, isOpen, onClose }: DownloadModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !game) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(game.game_url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGame = () => {
    window.open(game.game_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="relative aspect-video bg-slate-100">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{game.title}</h3>
          <p className="text-sm text-slate-500 mb-4">免费下载 · {game.platform_zh}</p>

          <div className="space-y-3 mb-6">
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-xs text-slate-500 mb-1">开发商</div>
              <div className="font-medium text-slate-700">{game.developer}</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-xs text-slate-500 mb-1">发行商</div>
              <div className="font-medium text-slate-700">{game.publisher}</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleOpenGame}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              前往官网下载
            </button>
            <button
              onClick={handleCopyLink}
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-600">链接已复制</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  复制下载链接
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
