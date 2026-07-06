const formatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0
});

const numberFormatter = new Intl.NumberFormat('tr-TR');

const MIN_BUDGET = 1000;
const MAX_BUDGET = 5000000;

function setFormStatus(message, ok = false) {
  const status = document.getElementById('formStatus');
  if (!status) return;
  status.textContent = message || '';
  status.classList.toggle('is-ok', Boolean(ok && message));
}

function sanitizeBudgetInput() {
  const input = document.getElementById('budget');
  if (!input) return MIN_BUDGET;

  let value = Number(input.value || 0);
  input.classList.remove('is-invalid');

  if (!Number.isFinite(value) || value <= 0) {
    input.classList.add('is-invalid');
    setFormStatus('Bütçe alanına en az 1.000 TL girmelisin.');
    return MIN_BUDGET;
  }

  if (value < MIN_BUDGET) {
    input.classList.add('is-invalid');
    setFormStatus('Daha anlamlı bir plan için bütçe en az 1.000 TL olmalı.');
    return MIN_BUDGET;
  }

  if (value > MAX_BUDGET) {
    input.value = String(MAX_BUDGET);
    setFormStatus('Test sınırı olarak bütçe 5.000.000 TL ile sınırlandı. Daha yüksek bütçeler özel planlama gerektirir.');
    return MAX_BUDGET;
  }

  setFormStatus('');
  return value;
}

const goalLabels = {
  awareness: 'Bilinirlik',
  sales: 'Satış',
  traffic: 'Web site trafiği',
  social: 'Sosyal medya büyütme',
  launch: 'Ürün lansmanı',
  local: 'Yerel işletme tanıtımı'
};

const sectorLabels = {
  ecommerce: 'E-ticaret',
  restaurant: 'Kafe / restoran',
  fashion: 'Giyim / moda',
  education: 'Eğitim',
  technology: 'Teknoloji',
  beauty: 'Güzellik / kuaför',
  event: 'Etkinlik',
  localService: 'Yerel hizmet'
};

const campaignTemplates = {
  ecommerceSales: {
    budget: '50000',
    goal: 'sales',
    sector: 'ecommerce',
    audience: '18-24',
    duration: '30'
  },
  localCafe: {
    budget: '20000',
    goal: 'local',
    sector: 'restaurant',
    audience: '18-24',
    duration: '15'
  },
  productLaunch: {
    budget: '75000',
    goal: 'launch',
    sector: 'technology',
    audience: '25-34',
    duration: '30'
  },
  socialGrowth: {
    budget: '15000',
    goal: 'social',
    sector: 'fashion',
    audience: '18-24',
    duration: '30'
  },
  educationLeads: {
    budget: '35000',
    goal: 'traffic',
    sector: 'education',
    audience: '25-34',
    duration: '30'
  },
  beautyBooking: {
    budget: '18000',
    goal: 'local',
    sector: 'beauty',
    audience: '18-24',
    duration: '15'
  }
};

const basePlans = {
  awareness: {
    'Instagram Ads': 25,
    'TikTok Ads': 25,
    'YouTube Ads': 25,
    'Display Ads': 15,
    'Google Search': 10
  },
  sales: {
    'Google Search': 30,
    'Instagram Ads': 25,
    'Remarketing': 20,
    'TikTok Ads': 15,
    'YouTube Ads': 10
  },
  traffic: {
    'Google Search': 30,
    'Instagram Ads': 20,
    'Display Ads': 20,
    'YouTube Ads': 15,
    'TikTok Ads': 15
  },
  social: {
    'Instagram Ads': 35,
    'TikTok Ads': 30,
    'Influencer': 15,
    'YouTube Shorts': 10,
    'Remarketing': 10
  },
  launch: {
    'TikTok Ads': 25,
    'Instagram Ads': 25,
    'YouTube Ads': 25,
    'Influencer': 15,
    'Google Search': 10
  },
  local: {
    'Instagram Ads': 35,
    'Google Maps/Search': 30,
    'TikTok Ads': 15,
    'Açık Hava': 10,
    'Remarketing': 10
  }
};

const channelBenchmarks = {
  'Instagram Ads': { cpm: 65, cpc: 5.5, role: 'Keşif ve görsel etkileşim' },
  'TikTok Ads': { cpm: 55, cpc: 4.8, role: 'Kısa video ve hızlı erişim' },
  'YouTube Ads': { cpm: 70, cpc: 6.5, role: 'Video bilinirliği' },
  'YouTube Shorts': { cpm: 58, cpc: 5.2, role: 'Kısa video etkileşimi' },
  'Display Ads': { cpm: 45, cpc: 4.2, role: 'Geniş görünürlük' },
  'Google Search': { cpm: 90, cpc: 9.5, role: 'Yüksek satın alma niyeti' },
  'Google Maps/Search': { cpm: 80, cpc: 7.5, role: 'Yerel arama niyeti' },
  'Remarketing': { cpm: 50, cpc: 4.0, role: 'Tekrar hedefleme' },
  'Influencer': { cpm: 85, cpc: 8.5, role: 'Güven ve sosyal kanıt' },
  'Açık Hava': { cpm: 35, cpc: 0, role: 'Yerel görünürlük' }
};

const channelColors = [
  '#2563eb', '#7c3aed', '#0f9f6e', '#f59e0b', '#ef4444', '#0891b2', '#111827'
];

let chart;
let lastPlanData = null;

function clonePlan(plan) {
  return JSON.parse(JSON.stringify(plan));
}

function addChannel(plan, channel, amount) {
  plan[channel] = (plan[channel] || 0) + amount;
}

function adjustPlan(plan, sector, audience, budget, goal) {
  const adjusted = clonePlan(plan);

  if (['13-18', '18-24'].includes(audience)) {
    addChannel(adjusted, 'TikTok Ads', 6);
    addChannel(adjusted, 'Instagram Ads', 4);
  }

  if (['35-44', '45+'].includes(audience)) {
    addChannel(adjusted, 'Google Search', 5);
    addChannel(adjusted, 'YouTube Ads', 4);
  }

  if (sector === 'restaurant' || sector === 'localService' || sector === 'beauty') {
    addChannel(adjusted, 'Google Maps/Search', 7);
    addChannel(adjusted, 'Instagram Ads', 4);
  }

  if (sector === 'ecommerce') {
    addChannel(adjusted, 'Remarketing', 6);
    addChannel(adjusted, 'Google Search', 4);
  }

  if (sector === 'fashion') {
    addChannel(adjusted, 'Instagram Ads', 7);
    addChannel(adjusted, 'TikTok Ads', 4);
  }

  if (sector === 'education' || sector === 'technology') {
    addChannel(adjusted, 'Google Search', 6);
    addChannel(adjusted, 'YouTube Ads', 4);
  }

  if (budget < 10000) {
    if (goal === 'sales' || goal === 'traffic') addChannel(adjusted, 'Google Search', 5);
    addChannel(adjusted, 'Remarketing', 3);
  }

  return limitChannels(normalizePlan(adjusted), budget);
}

function channelLimitByBudget(budget) {
  if (budget < 10000) return 3;
  if (budget < 25000) return 4;
  if (budget < 75000) return 5;
  return 6;
}

function limitChannels(allocation, budget) {
  const limit = channelLimitByBudget(budget);
  if (allocation.length <= limit) return allocation;

  const kept = allocation.slice(0, limit);
  const removedPercent = allocation.slice(limit).reduce((sum, item) => sum + item.percent, 0);
  const keptTotal = kept.reduce((sum, item) => sum + item.percent, 0);

  return normalizePlan(Object.fromEntries(kept.map(item => [
    item.channel,
    item.percent + (item.percent / keptTotal) * removedPercent
  ])));
}

function normalizePlan(plan) {
  const entries = Object.entries(plan).filter(([, value]) => value > 0);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  const normalized = entries.map(([channel, value]) => ({
    channel,
    percent: value / total * 100
  }));

  let rounded = normalized.map(item => ({ ...item, percent: Math.round(item.percent) }));
  let diff = 100 - rounded.reduce((sum, item) => sum + item.percent, 0);
  rounded.sort((a, b) => b.percent - a.percent);

  let i = 0;
  while (diff !== 0 && rounded.length > 0) {
    rounded[i % rounded.length].percent += diff > 0 ? 1 : -1;
    diff += diff > 0 ? -1 : 1;
    i++;
  }

  return rounded.filter(item => item.percent > 0).sort((a, b) => b.percent - a.percent);
}

function createPlan() {
  const budget = sanitizeBudgetInput();
  const goal = document.getElementById('goal').value;
  const sector = document.getElementById('sector').value;
  const audience = document.getElementById('audience').value;
  const duration = Number(document.getElementById('duration').value);

  const allocation = adjustPlan(basePlans[goal], sector, audience, budget, goal);
  const rows = allocation.map(item => {
    const channelBudget = budget * item.percent / 100;
    const benchmark = channelBenchmarks[item.channel] || { cpm: 60, cpc: 6, role: 'Tamamlayıcı kanal' };
    const impressions = benchmark.cpm > 0 ? (channelBudget / benchmark.cpm) * 1000 : 0;
    const clicks = benchmark.cpc > 0 ? channelBudget / benchmark.cpc : 0;
    return {
      ...item,
      budget: channelBudget,
      cpm: benchmark.cpm,
      cpc: benchmark.cpc,
      role: benchmark.role,
      impressions,
      clicks
    };
  });

  const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);
  const avgCpm = totalImpressions > 0 ? budget / totalImpressions * 1000 : 0;
  const avgCpc = totalClicks > 0 ? budget / totalClicks : 0;
  const ctr = totalImpressions > 0 ? totalClicks / totalImpressions * 100 : 0;
  const dailyBudget = duration > 0 ? budget / duration : 0;

  renderResults({ budget, goal, sector, audience, duration, rows, totalImpressions, totalClicks, avgCpm, avgCpc, ctr, dailyBudget });
}

function renderResults(data) {
  lastPlanData = data;
  document.getElementById('resultTitle').textContent = `${goalLabels[data.goal]} kampanyası planı`;

  renderPlanSummary(data);

  const table = document.getElementById('allocationTable');
  table.innerHTML = data.rows.map(row => `
    <tr>
      <td><strong>${row.channel}</strong></td>
      <td>${row.role}</td>
      <td>%${row.percent}</td>
      <td>${formatter.format(row.budget)}</td>
      <td>${row.impressions > 0 ? numberFormatter.format(Math.round(row.impressions)) : 'Ölçülmez'}</td>
      <td>${row.clicks > 0 ? numberFormatter.format(Math.round(row.clicks)) : 'Ölçülmez'}</td>
      <td>${row.cpm ? row.cpm.toFixed(0) + ' TL CPM' : '-'}${row.cpc ? '<br><small>' + row.cpc.toFixed(2) + ' TL CPC</small>' : ''}</td>
    </tr>
  `).join('');

  document.getElementById('stats').innerHTML = `
    <div class="stat"><span>Tahmini gösterim</span><strong>${numberFormatter.format(Math.round(data.totalImpressions))}</strong></div>
    <div class="stat"><span>Tahmini tıklama</span><strong>${numberFormatter.format(Math.round(data.totalClicks))}</strong></div>
    <div class="stat"><span>Ortalama CPC</span><strong>${data.avgCpc ? data.avgCpc.toFixed(2) + ' TL' : '-'}</strong></div>
    <div class="stat"><span>Ortalama CPM</span><strong>${data.avgCpm ? data.avgCpm.toFixed(2) + ' TL' : '-'}</strong></div>
    <div class="stat"><span>Tahmini CTR</span><strong>${data.ctr ? '%' + data.ctr.toFixed(2) : '-'}</strong></div>
    <div class="stat"><span>Günlük bütçe</span><strong>${formatter.format(data.dailyBudget)}</strong></div>
  `;

  renderInsights(data);
  renderOptimizationCards(data);
  renderChannelPlaybook(data);
  renderWeeklyPlan(data);
  updateChart(data.rows);
  renderReport(data);
}

function renderPlanSummary(data) {
  const tier = budgetTier(data.budget);
  const summary = document.getElementById('planSummary');
  summary.innerHTML = `
    <div>
      <span>Bütçe seviyesi</span>
      <strong>${tier.label}</strong>
      <p>${tier.description}</p>
    </div>
    <div>
      <span>Kanal sayısı</span>
      <strong>${data.rows.length} ana kanal</strong>
      <p>Bütçe seviyesine göre kanal sayısı otomatik dengelendi.</p>
    </div>
    <div>
      <span>Plan odağı</span>
      <strong>${goalLabels[data.goal]}</strong>
      <p>${sectorLabels[data.sector]} ve ${data.audience} yaş hedefi dikkate alındı.</p>
    </div>
  `;
}

function budgetTier(budget) {
  if (budget < 10000) return { label: 'Düşük bütçe', description: 'Daha az kanal, daha net test odağı önerilir.' };
  if (budget < 25000) return { label: 'Başlangıç bütçesi', description: 'Ana kanallar seçilip öğrenme verisi toplanabilir.' };
  if (budget < 75000) return { label: 'Orta bütçe', description: 'Test, optimizasyon ve remarketing dengesi kurulabilir.' };
  return { label: 'Geniş bütçe', description: 'Çok kanallı kampanya ve ayrı kreatif testleri yapılabilir.' };
}

function updateChart(rows) {
  const ctx = document.getElementById('budgetChart');
  const labels = rows.map(row => row.channel);
  const values = rows.map(row => row.percent);

  if (typeof Chart === 'undefined') {
    ctx.style.display = 'none';
    return;
  }

  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: channelColors,
        borderWidth: 0,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: context => `${context.label}: %${context.raw}`
          }
        }
      },
      cutout: '62%'
    }
  });
}

function renderInsights(data) {
  const strongestChannel = data.rows[0];
  const measurableRows = data.rows.filter(row => row.clicks > 0);
  const bestCpc = measurableRows.length ? measurableRows.reduce((best, row) => row.cpc < best.cpc ? row : best, measurableRows[0]) : null;
  const budgetHealth = data.budget < 10000 ? 'Düşük bütçede kanal sayısı otomatik azaltıldı. İlk hedef hızlı öğrenme olmalı.' : data.budget < 50000 ? 'Orta bütçede test + optimizasyon dengesi kurulabilir.' : 'Bu bütçe ile erişim, dönüşüm ve remarketing aynı anda test edilebilir.';

  document.getElementById('insights').innerHTML = `
    <div class="insight-card">
      <span>En güçlü kanal</span>
      <strong>${strongestChannel.channel} / %${strongestChannel.percent}</strong>
      <p>${channelReason(strongestChannel.channel, data.goal, data.sector)}</p>
    </div>
    <div class="insight-card">
      <span>En uygun tıklama</span>
      <strong>${bestCpc ? bestCpc.channel + ' / ' + bestCpc.cpc.toFixed(2) + ' TL' : 'Ölçülmez'}</strong>
      <p>Tıklama maliyeti düşük kanallar test bütçesi için avantaj sağlayabilir.</p>
    </div>
    <div class="insight-card">
      <span>Bütçe yorumu</span>
      <strong>${formatter.format(data.dailyBudget)} / gün</strong>
      <p>${budgetHealth}</p>
    </div>
  `;
}

function renderOptimizationCards(data) {
  const risk = data.budget < 10000
    ? 'Bütçe düşük olduğu için çok fazla kanala bölmek öğrenme sürecini zayıflatabilir.'
    : data.duration <= 7
      ? 'Kısa kampanya süresinde algoritmaların öğrenme süresi sınırlı kalabilir.'
      : 'Ana risk kreatif kalitesi ve hedefleme doğruluğudur; sonuçlar kampanya içi veriye göre değişir.';

  const optimization = data.goal === 'sales'
    ? 'İlk 3-5 gün sonra düşük dönüşüm getiren kanalları azaltıp Google Search ve remarketing tarafını güçlendir.'
    : data.goal === 'awareness'
      ? 'Video izlenme oranı ve erişim maliyetine göre YouTube/TikTok/Instagram bütçesini yeniden dengele.'
      : 'Tıklama maliyeti, CTR ve kaliteli trafik sinyallerine göre bütçeyi haftalık optimize et.';

  const creative = ['13-18', '18-24'].includes(data.audience)
    ? 'Kısa video, hızlı mesaj, dikey format ve ilk 3 saniyede net fayda anlatımı kullan.'
    : 'Net teklif, güven unsuru, açıklayıcı görsel/video ve arama niyetine uygun metin kullan.';

  document.getElementById('optimizationCards').innerHTML = `
    <div class="opt-card"><span>Risk</span><p>${risk}</p></div>
    <div class="opt-card"><span>Optimizasyon</span><p>${optimization}</p></div>
    <div class="opt-card"><span>Kreatif önerisi</span><p>${creative}</p></div>
  `;
}

function renderChannelPlaybook(data) {
  document.getElementById('channelPlaybook').innerHTML = `
    <p class="mini-title">Kanal açıklamaları</p>
    <div class="playbook-grid">
      ${data.rows.map(row => `
        <div class="playbook-card">
          <strong>${row.channel}</strong>
          <span>${row.role}</span>
          <p>${channelReason(row.channel, data.goal, data.sector)}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderWeeklyPlan(data) {
  const weekCount = Math.max(Math.ceil(data.duration / 7), 1);
  const weeklyBudget = data.budget / weekCount;
  const weeks = [
    ['1. Hafta', 'Kreatif testleri, hedef kitle denemeleri ve ilk veri toplama süreci.'],
    ['2. Hafta', 'En iyi çalışan kanal, reklam metni ve görsellerin bütçesini artırma.'],
    ['3. Hafta', 'Remarketing, dönüşüm odaklı kampanyalar ve düşük verimli kanalları azaltma.'],
    ['4. Hafta', 'Performans raporu, bütçe optimizasyonu ve sonraki kampanya için öğrenimleri çıkarma.']
  ].slice(0, Math.min(4, weekCount));

  document.getElementById('weeklyPlan').innerHTML = `
    <p class="mini-title">Haftalık uygulama planı</p>
    ${weeks.map(([week, text]) => `
      <div class="weekly-item">
        <strong>${week}</strong>
        <p>${text} Ortalama haftalık bütçe: <strong>${formatter.format(weeklyBudget)}</strong>.</p>
      </div>
    `).join('')}
  `;
}

function channelReason(channel, goal, sector) {
  if (channel.includes('Google')) return 'Arama niyeti yüksek kullanıcıları yakalamak için özellikle satış, trafik ve yerel hizmetlerde güçlüdür.';
  if (channel.includes('Instagram')) return 'Görsel içerik, ürün keşfi ve yerel marka görünürlüğü için dengeli bir ana kanaldır.';
  if (channel.includes('TikTok')) return 'Genç kitle, kısa video ve hızlı erişim hedeflerinde güçlü bir test kanalıdır.';
  if (channel.includes('YouTube')) return 'Video ile bilinirlik ve açıklayıcı içerik anlatımı için uygundur.';
  if (channel.includes('Remarketing')) return 'Daha önce ilgi göstermiş kullanıcıları tekrar hedefleyerek dönüşüm ihtimalini artırır.';
  if (channel.includes('Influencer')) return 'Güven, sosyal kanıt ve hızlı ürün tanıtımı için destekleyici kanal olarak kullanılabilir.';
  if (channel.includes('Açık Hava')) return 'Yerel görünürlük, lokasyon bilinirliği ve mağaza trafiği için destekleyici rol oynar.';
  return 'Bu kanal kampanya karmasını tamamlayıcı rol oynar.';
}

function renderReport(data) {
  const topChannels = data.rows.slice(0, 3).map(row => row.channel).join(', ');
  const young = ['13-18', '18-24'].includes(data.audience);
  const report = `
    <p><strong>${formatter.format(data.budget)}</strong> bütçeli, <strong>${data.duration} günlük</strong> ${goalLabels[data.goal].toLowerCase()} kampanyası için önerilen ana medya kanalları <strong>${topChannels}</strong> olarak belirlenmiştir. Bütçe seviyesi nedeniyle plan <strong>${data.rows.length} ana kanal</strong> ile sınırlandırılmıştır.</p>

    <h4>Strateji yorumu</h4>
    <p>${goalStrategyText(data.goal)} ${sectorStrategyText(data.sector)} ${young ? 'Genç hedef kitle seçildiği için TikTok ve Instagram ağırlığı artırılmıştır.' : 'Hedef kitle daha geniş yaş aralığında olduğu için Google ve YouTube kanallarına daha fazla önem verilmiştir.'}</p>

    <h4>Tahmini performans</h4>
    <p>Bu plana göre yaklaşık <strong>${numberFormatter.format(Math.round(data.totalImpressions))}</strong> gösterim ve <strong>${numberFormatter.format(Math.round(data.totalClicks))}</strong> tıklama elde edilebilir. Ortalama CPC yaklaşık <strong>${data.avgCpc.toFixed(2)} TL</strong>, ortalama CPM ise yaklaşık <strong>${data.avgCpm.toFixed(2)} TL</strong> seviyesindedir. Tahmini CTR yaklaşık <strong>%${data.ctr.toFixed(2)}</strong> olarak hesaplanmıştır.</p>

    <h4>Kanal öncelikleri</h4>
    <ul>
      ${data.rows.map(row => `<li><strong>${row.channel}:</strong> %${row.percent} oran, yaklaşık ${formatter.format(row.budget)}. Rol: ${row.role}.</li>`).join('')}
    </ul>

    <h4>Optimizasyon notu</h4>
    <p>Kampanya yayına alındıktan sonra ilk verilerle en düşük maliyetli ve en kaliteli sonuç getiren kanallar güçlendirilmeli; düşük performanslı kanalların bütçesi azaltılmalıdır.</p>

    <p class="notice"><strong>Uyarı:</strong> Bu rapor tahmini medya planlama simülasyonudur. Gerçek sonuçlar reklam kreatifi, hedefleme, rekabet, sezon, ürün fiyatı ve web sitesi kalitesine göre değişebilir.</p>
  `;
  document.getElementById('strategyReport').innerHTML = report;
}

function goalStrategyText(goal) {
  const texts = {
    awareness: 'Bilinirlik hedefi seçildiği için erişim ve video görünürlüğü güçlü kanallara ağırlık verilmiştir.',
    sales: 'Satış hedefi seçildiği için satın alma niyeti yüksek Google Search ve tekrar hedefleme kanalları güçlendirilmiştir.',
    traffic: 'Trafik hedefi seçildiği için tıklama maliyeti dengeli kanallar ve arama ağı birlikte kullanılmıştır.',
    social: 'Sosyal medya büyütme hedefi seçildiği için etkileşim ve takipçi kazanımı güçlü platformlar öne çıkarılmıştır.',
    launch: 'Lansman hedefi seçildiği için video, sosyal medya ve influencer destekli bir görünürlük karması önerilmiştir.',
    local: 'Yerel tanıtım hedefi seçildiği için Google Maps/Search ve Instagram gibi konum bazlı güçlü kanallar öne çıkarılmıştır.'
  };
  return texts[goal] || '';
}

function sectorStrategyText(sector) {
  const texts = {
    ecommerce: 'E-ticaret sektörü için dönüşüm ve remarketing bütçesi kritik görülmüştür.',
    restaurant: 'Kafe/restoran işletmeleri için yakın çevre, görsel içerik ve harita aramaları önemlidir.',
    fashion: 'Moda/giyim tarafında görsel performans ve kısa video içerikleri daha yüksek etki yaratabilir.',
    education: 'Eğitim sektöründe arama niyeti ve açıklayıcı video içerikleri daha güçlü sonuç verebilir.',
    technology: 'Teknoloji sektöründe arama reklamları ve bilgilendirici video içerikleri öne çıkarılmıştır.',
    beauty: 'Güzellik/kuaför alanında görsel sosyal medya içerikleri ve yerel aramalar önceliklidir.',
    event: 'Etkinlik kampanyalarında hızlı erişim, sosyal medya görünürlüğü ve lokasyon hedefleme önemlidir.',
    localService: 'Yerel hizmetlerde Google Maps/Search ve yakın çevre hedeflemesi daha yüksek niyetli kullanıcı getirebilir.'
  };
  return texts[sector] || '';
}

function calculateMini(type) {
  if (type === 'cpm') {
    const cost = Number(document.getElementById('cpmCost').value);
    const impressions = Number(document.getElementById('cpmImpressions').value);
    const result = impressions > 0 ? (cost / impressions) * 1000 : 0;
    document.getElementById('cpmResult').textContent = `CPM: ${result ? result.toFixed(2) + ' TL' : '-'}`;
  }
  if (type === 'cpc') {
    const cost = Number(document.getElementById('cpcCost').value);
    const clicks = Number(document.getElementById('cpcClicks').value);
    const result = clicks > 0 ? cost / clicks : 0;
    document.getElementById('cpcResult').textContent = `CPC: ${result ? result.toFixed(2) + ' TL' : '-'}`;
  }
  if (type === 'roi') {
    const revenue = Number(document.getElementById('roiRevenue').value);
    const cost = Number(document.getElementById('roiCost').value);
    const result = cost > 0 ? ((revenue - cost) / cost) * 100 : 0;
    document.getElementById('roiResult').textContent = `ROI: ${cost ? '%' + result.toFixed(1) : '-'}`;
  }
}

function applyTemplate(templateKey) {
  const template = campaignTemplates[templateKey];
  if (!template) return;

  Object.entries(template).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.value = value;
  });


document.querySelectorAll('[data-template]').forEach(card => {
    card.classList.toggle('is-active', card.dataset.template === templateKey);
  });

  createPlan();
  document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMobileMenu() {
  navLinks?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Menüyü aç');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', Boolean(isOpen));
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  navToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMobileMenu();
});

document.addEventListener('click', event => {
  if (!document.body.classList.contains('menu-open')) return;
  const clickedInsideMenu = navLinks?.contains(event.target);
  const clickedToggle = navToggle?.contains(event.target);
  if (!clickedInsideMenu && !clickedToggle) closeMobileMenu();
});

document.querySelectorAll('[data-template]').forEach(card => {
  card.addEventListener('click', () => applyTemplate(card.dataset.template));
});

document.getElementById('plannerForm').addEventListener('submit', event => {
  event.preventDefault();
  createPlan();
});

['budget', 'goal', 'sector', 'audience', 'duration'].forEach(id => {
  document.getElementById(id).addEventListener('input', createPlan);
});

document.querySelectorAll('[data-calc]').forEach(button => {
  button.addEventListener('click', () => calculateMini(button.dataset.calc));
});

document.getElementById('copyReport').addEventListener('click', async () => {
  const text = document.getElementById('strategyReport').innerText;
  try {
    await navigator.clipboard.writeText(text);
    document.getElementById('copyReport').textContent = 'Kopyalandı';
    setTimeout(() => document.getElementById('copyReport').textContent = 'Metni Kopyala', 1500);
  } catch {
    alert('Kopyalama başarısız oldu. Metni manuel seçip kopyalayabilirsin.');
  }
});

document.getElementById('printReport').addEventListener('click', () => window.print());

function plainTextFromHtml(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.innerText.replace(/\n{3,}/g, '\n\n').trim();
}

function cleanPdfText(text) {
  return String(text || '')
    .replace(/\s+\n/g, '\n')
    .replace(/\n\s+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildPdfDocumentDefinition(data) {
  const generatedAt = new Date().toLocaleDateString('tr-TR');
  const topChannels = data.rows.slice(0, 3).map(row => row.channel).join(', ');
  const reportText = cleanPdfText(document.getElementById('strategyReport').innerText);
  const weeklyText = cleanPdfText(document.getElementById('weeklyPlan').innerText);

  const channelRows = data.rows.map(row => ([
    { text: row.channel, bold: true },
    row.role || '-',
    `%${row.percent}`,
    formatter.format(row.budget),
    row.impressions > 0 ? numberFormatter.format(Math.round(row.impressions)) : 'Ölçülmez',
    row.clicks > 0 ? numberFormatter.format(Math.round(row.clicks)) : 'Ölçülmez'
  ]));

  return {
    pageSize: 'A4',
    pageMargins: [32, 36, 32, 36],
    info: {
      title: `KampanyaLab ${goalLabels[data.goal]} Kampanyası Raporu`,
      author: 'KampanyaLab',
      subject: 'Tahmini medya planlama raporu'
    },
    footer(currentPage, pageCount) {
      return {
        columns: [
          { text: 'KampanyaLab', margin: [32, 0, 0, 0], color: '#64748b', fontSize: 8 },
          { text: `${currentPage} / ${pageCount}`, alignment: 'right', margin: [0, 0, 32, 0], color: '#64748b', fontSize: 8 }
        ]
      };
    },
    styles: {
      h1: { fontSize: 20, bold: true, color: '#0f172a', margin: [0, 0, 0, 8] },
      h2: { fontSize: 13, bold: true, color: '#1e3a8a', margin: [0, 18, 0, 8] },
      small: { fontSize: 8, color: '#64748b' },
      label: { fontSize: 8, color: '#64748b', margin: [0, 0, 0, 2] },
      metric: { fontSize: 11, bold: true, color: '#0f172a' },
      notice: { fontSize: 9, color: '#334155', margin: [0, 8, 0, 0] }
    },
    defaultStyle: {
      fontSize: 9,
      color: '#1f2937',
      lineHeight: 1.25
    },
    content: [
      {
        table: {
          widths: ['*'],
          body: [[
            {
              stack: [
                { text: 'KampanyaLab Medya Planı', color: '#bfdbfe', fontSize: 9, bold: true },
                { text: `${goalLabels[data.goal]} Kampanyası Raporu`, color: '#ffffff', fontSize: 22, bold: true, margin: [0, 6, 0, 4] },
                { text: `${sectorLabels[data.sector]} sektörü için ${data.duration} günlük tahmini medya planı.`, color: '#dbeafe', fontSize: 10 },
                { text: `Oluşturma tarihi: ${generatedAt}`, color: '#dbeafe', fontSize: 8, margin: [0, 10, 0, 0] }
              ],
              fillColor: '#1e3a8a',
              margin: [16, 14, 16, 14]
            }
          ]]
        },
        layout: 'noBorders'
      },
      {
        columns: [
          { stack: [{ text: 'Bütçe', style: 'label' }, { text: formatter.format(data.budget), style: 'metric' }] },
          { stack: [{ text: 'Süre', style: 'label' }, { text: `${data.duration} gün`, style: 'metric' }] },
          { stack: [{ text: 'Hedef kitle', style: 'label' }, { text: data.audience, style: 'metric' }] },
          { stack: [{ text: 'Ana kanallar', style: 'label' }, { text: topChannels, style: 'metric' }] }
        ],
        columnGap: 10,
        margin: [0, 14, 0, 4]
      },
      { text: 'Performans Özeti', style: 'h2' },
      {
        columns: [
          { stack: [{ text: 'Tahmini gösterim', style: 'label' }, { text: numberFormatter.format(Math.round(data.totalImpressions)), style: 'metric' }] },
          { stack: [{ text: 'Tahmini tıklama', style: 'label' }, { text: numberFormatter.format(Math.round(data.totalClicks)), style: 'metric' }] },
          { stack: [{ text: 'Ortalama CPC', style: 'label' }, { text: data.avgCpc ? data.avgCpc.toFixed(2) + ' TL' : '-', style: 'metric' }] }
        ],
        columnGap: 10
      },
      {
        columns: [
          { stack: [{ text: 'Ortalama CPM', style: 'label' }, { text: data.avgCpm ? data.avgCpm.toFixed(2) + ' TL' : '-', style: 'metric' }] },
          { stack: [{ text: 'Tahmini CTR', style: 'label' }, { text: data.ctr ? '%' + data.ctr.toFixed(2) : '-', style: 'metric' }] },
          { stack: [{ text: 'Günlük bütçe', style: 'label' }, { text: formatter.format(data.dailyBudget), style: 'metric' }] }
        ],
        columnGap: 10,
        margin: [0, 10, 0, 0]
      },
      { text: 'Kanal Dağılımı', style: 'h2' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', 32, 56, 58, 52],
          body: [
            [
              { text: 'Kanal', bold: true, color: '#ffffff' },
              { text: 'Rol', bold: true, color: '#ffffff' },
              { text: 'Oran', bold: true, color: '#ffffff' },
              { text: 'Bütçe', bold: true, color: '#ffffff' },
              { text: 'Gösterim', bold: true, color: '#ffffff' },
              { text: 'Tıklama', bold: true, color: '#ffffff' }
            ],
            ...channelRows
          ]
        },
        layout: {
          fillColor(rowIndex) { return rowIndex === 0 ? '#1e40af' : (rowIndex % 2 === 0 ? '#f8fafc' : null); },
          hLineColor() { return '#e2e8f0'; },
          vLineColor() { return '#e2e8f0'; }
        }
      },
      { text: 'Strateji Raporu', style: 'h2' },
      { text: reportText, margin: [0, 0, 0, 4] },
      { text: 'Haftalık Uygulama Planı', style: 'h2' },
      { text: weeklyText, margin: [0, 0, 0, 4] },
      {
        text: 'Uyarı: KampanyaLab tahmini medya planlama simülasyonudur. Bu rapor kesin reklam performansı, gelir veya satış garantisi vermez. Gerçek sonuçlar kreatif kalite, hedefleme, rekabet, sezon ve teklif stratejisine göre değişebilir.',
        style: 'notice'
      }
    ]
  };
}

function downloadPdfReport() {
  if (!lastPlanData) createPlan();

  if (typeof pdfMake === 'undefined') {
    alert('PDF kütüphanesi yüklenemedi. Yazdır seçeneğiyle PDF olarak kaydedebilirsin.');
    window.print();
    return;
  }

  const fileNameGoal = goalLabels[lastPlanData.goal].toLowerCase().replace(/\s+/g, '-');
  const docDefinition = buildPdfDocumentDefinition(lastPlanData);
  pdfMake.createPdf(docDefinition).download(`kampanyalab-${fileNameGoal}-medya-plani.pdf`);
}

document.getElementById('downloadPdf')?.addEventListener('click', downloadPdfReport);
document.getElementById('downloadPdfReport')?.addEventListener('click', downloadPdfReport);



// v2.0 AI destekli kampanya planlayıcı
const aiPlannerForm = document.getElementById('aiPlannerForm');
const aiPrompt = document.getElementById('aiPrompt');
const aiStatus = document.getElementById('aiStatus');
const aiResult = document.getElementById('aiResult');
const generateAiPlanButton = document.getElementById('generateAiPlan');
const clearAiPlanButton = document.getElementById('clearAiPlan');
const copyAiPlanButton = document.getElementById('copyAiPlan');

function setAiStatus(message, type = '') {
  if (!aiStatus) return;
  aiStatus.textContent = message || '';
  aiStatus.className = `form-status ${type}`.trim();
}

function renderAiResult(text, isEmpty = false) {
  if (!aiResult) return;
  aiResult.classList.toggle('empty', isEmpty);
  aiResult.textContent = text;
}

async function requestAiPlan(event) {
  event.preventDefault();
  const prompt = (aiPrompt?.value || '').trim();

  if (prompt.length < 20) {
    setAiStatus('Daha iyi sonuç için kampanya ihtiyacını en az 20 karakterle açıkla.', 'error');
    aiPrompt?.focus();
    return;
  }

  if (prompt.length > 1200) {
    setAiStatus('Brief en fazla 1200 karakter olabilir.', 'error');
    return;
  }

  try {
    generateAiPlanButton.disabled = true;
    generateAiPlanButton.textContent = 'AI taslak hazırlıyor...';
    setAiStatus('AI kampanya taslağı hazırlanıyor. Bu işlem birkaç saniye sürebilir.', 'info');
    renderAiResult('Plan hazırlanıyor...', true);

    const response = await fetch('/api/ai-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || 'AI planı oluşturulamadı.');
    }

    renderAiResult(data.plan || 'AI yanıtı boş döndü.', false);
    setAiStatus('AI kampanya taslağı hazır. Çıktıyı kontrol edip medya planı motoruyla karşılaştırabilirsin.', 'success');
  } catch (error) {
    renderAiResult('AI planı şu anda oluşturulamadı. Normal medya planı motorunu kullanmaya devam edebilirsin.', true);
    setAiStatus(error.message || 'AI planı oluşturulamadı.', 'error');
  } finally {
    generateAiPlanButton.disabled = false;
    generateAiPlanButton.textContent = 'AI ile Taslak Oluştur';
  }
}

aiPlannerForm?.addEventListener('submit', requestAiPlan);

clearAiPlanButton?.addEventListener('click', () => {
  if (aiPrompt) aiPrompt.value = '';
  renderAiResult('Henüz AI plan oluşturulmadı. Sol taraftaki kutuya kampanya ihtiyacını yazıp “AI ile Taslak Oluştur” butonuna bas.', true);
  setAiStatus('');
});

copyAiPlanButton?.addEventListener('click', async () => {
  const text = aiResult?.innerText || '';
  if (!text || aiResult?.classList.contains('empty')) {
    setAiStatus('Kopyalanacak AI planı yok.', 'error');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    copyAiPlanButton.textContent = 'Kopyalandı';
    setTimeout(() => copyAiPlanButton.textContent = 'Metni Kopyala', 1500);
  } catch {
    setAiStatus('Kopyalama başarısız oldu. Metni manuel seçip kopyalayabilirsin.', 'error');
  }
});

function resetPlannerDefaults() {
  const defaults = {
    budget: '50000',
    goal: 'sales',
    sector: 'ecommerce',
    audience: '18-24',
    duration: '30'
  };

  Object.entries(defaults).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.value = value;
  });

  document.querySelectorAll('[data-template]').forEach(card => card.classList.remove('is-active'));

  ['cpmCost', 'cpmImpressions', 'cpcCost', 'cpcClicks', 'roiRevenue', 'roiCost'].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.value = '';
  });

  ['cpmResult', 'cpcResult', 'roiResult'].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = `${id.replace('Result', '').toUpperCase()}: -`;
  });

  document.getElementById('budget')?.classList.remove('is-invalid');
  if (aiPrompt) aiPrompt.value = '';
  renderAiResult('Henüz AI plan oluşturulmadı. Sol taraftaki kutuya kampanya ihtiyacını yazıp “AI ile Taslak Oluştur” butonuna bas.', true);
  setAiStatus('');
  setFormStatus('');
}

window.addEventListener('pageshow', () => {
  resetPlannerDefaults();
  createPlan();
});
