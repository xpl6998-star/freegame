import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      {/* 右侧浮动按钮 */}
      <div className="fixed right-4 bottom-8 flex flex-col gap-3 z-50">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center hover:shadow-xl hover:-translate-y-0.5"
          title="返回顶部"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        <button
          onClick={refreshPage}
          className="w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center hover:shadow-xl hover:-translate-y-0.5"
          title="刷新页面"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* 底部 Footer */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">冲冲冲免费游戏</h3>
              <p className="text-sm text-slate-400">探索最佳免费游戏，发现最新最热的游戏资源。</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">关于</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">关于我们</Link></li>
                <li><Link to="/feedback" className="hover:text-white transition-colors">反馈建议</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">法律</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-white transition-colors">使用条款</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">联系方式</h4>
              <ul className="space-y-2 text-sm">
                <li>邮箱：contact@wgogogo.com</li>
                <li>网站：game.wgogogo.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
            <p>© 2025 冲冲冲免费游戏. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
