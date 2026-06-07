/* Giscus 评论加载器
 * 配置只需在这里改一处，所有文章页共用。
 * 两个 ID 从 https://giscus.app 配置后获得（详见下方步骤）。
 */
(function () {
  // ====== 在这里填你的 Giscus 配置 ======
  var config = {
    repo: 'SlainTroyard/SlainTroyard.github.io', // 你的仓库
    repoId: 'R_kgDOIQXbWA',                       // data-repo-id（已自动填好）
    category: 'Announcements',                    // Discussion 分类名（建议用 Announcements）
    categoryId: 'DIC_kwDOIQXbWM4C-r7Q'           // data-category-id
  };
  // =====================================

  var container = document.getElementById('giscus-container');
  if (!container || container.dataset.loaded) return;
  if (config.repoId.indexOf('PASTE') === 0 || config.categoryId.indexOf('PASTE') === 0) {
    container.innerHTML = '<p style="text-align:center;color:#999;padding:20px">评论功能待配置：请在 /js/giscus.js 填入 repoId 与 categoryId。</p>';
    return;
  }
  container.dataset.loaded = '1';

  var s = document.createElement('script');
  s.src = 'https://giscus.app/client.js';
  s.async = true;
  s.crossOrigin = 'anonymous';
  var attrs = {
    'data-repo': config.repo,
    'data-repo-id': config.repoId,
    'data-category': config.category,
    'data-category-id': config.categoryId,
    'data-mapping': 'pathname',
    'data-strict': '0',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '0',
    'data-input-position': 'bottom',
    'data-theme': 'preferred_color_scheme',
    'data-lang': 'zh-CN'
  };
  for (var k in attrs) s.setAttribute(k, attrs[k]);
  container.appendChild(s);
})();
