export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">关于我们</h1>
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">网站介绍</h2>
            <p className="text-slate-600 leading-relaxed">
              冲冲冲免费游戏致力于为玩家提供最新、最全面的免费游戏资源。我们聚合来自全球的优秀免费游戏，
              让玩家能够轻松发现和体验各种精彩的游戏内容。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">我们的使命</h2>
            <p className="text-slate-600 leading-relaxed">
              让每一位玩家都能轻松找到高质量的免费游戏，享受游戏带来的乐趣。我们相信好的游戏不应该有门槛。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">联系方式</h2>
            <p className="text-slate-600 leading-relaxed">
              邮箱：contact@wgogogo.com<br />
              网站：game.wgogogo.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
