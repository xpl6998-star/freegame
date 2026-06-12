export function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">使用条款</h1>
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">1. 服务说明</h2>
            <p className="text-slate-600 leading-relaxed">
              冲冲冲免费游戏是一个免费游戏资源聚合平台。我们提供游戏信息展示和跳转链接服务，
              所有游戏资源均来自第三方网站，我们不对游戏内容负责。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">2. 免责声明</h2>
            <p className="text-slate-600 leading-relaxed">
              我们不对游戏内容的合法性、安全性负责。用户在访问第三方游戏网站时，
              应自行判断并承担相应风险。所有游戏版权归其各自所有者所有。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">3. 用户责任</h2>
            <p className="text-slate-600 leading-relaxed">
              用户应遵守当地法律法规使用本服务。对于任何违法使用导致的后果，
              用户自行承担责任。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">4. 服务变更</h2>
            <p className="text-slate-600 leading-relaxed">
              我们保留随时修改或中断服务的权利，恕不另行通知。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">5. 联系我们</h2>
            <p className="text-slate-600 leading-relaxed">
              如有问题，请联系：contact@wgogogo.com
            </p>
          </section>
          <p className="text-sm text-slate-400 pt-4">
            最后更新：2025年1月
          </p>
        </div>
      </div>
    </div>
  );
}
