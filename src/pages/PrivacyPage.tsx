export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">隐私政策</h1>
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">信息收集</h2>
            <p className="text-slate-600 leading-relaxed">
              我们收集您访问网站时自动产生的信息，包括但不限于浏览器类型、访问时间、页面访问量等。
              这些信息用于改善我们的服务质量。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">Cookie 使用</h2>
            <p className="text-slate-600 leading-relaxed">
              我们使用 Cookie 来记住您的偏好设置，如语言选择和收藏内容。您可以通过浏览器设置禁用 Cookie，
              但这可能影响网站部分功能。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">第三方服务</h2>
            <p className="text-slate-600 leading-relaxed">
              我们的网站可能包含指向第三方网站的链接。我们不对第三方网站的隐私政策负责，
              建议您查看第三方网站的隐私声明。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-slate-700 mb-3">联系我们</h2>
            <p className="text-slate-600 leading-relaxed">
              如对隐私政策有任何疑问，请联系：contact@wgogogo.com
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
