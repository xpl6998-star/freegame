import { useState } from 'react';

export function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
      setFeedback('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">反馈建议</h1>
        <div className="bg-white rounded-xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h2 className="text-xl font-semibold text-slate-700 mb-2">感谢您的反馈！</h2>
              <p className="text-slate-500">我们已收到您的建议，会认真考虑并改进。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  您的问题或建议
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="请详细描述您的问题或建议..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  您的邮箱（选填，便于我们回复）
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
              >
                提交反馈
              </button>
            </form>
          )}
          <div className="mt-8 p-4 bg-slate-50 rounded-lg">
            <h3 className="font-medium text-slate-700 mb-2">其他联系方式</h3>
            <p className="text-slate-500 text-sm">
              邮箱：contact@wgogogo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
