import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-auto">
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
  );
}
