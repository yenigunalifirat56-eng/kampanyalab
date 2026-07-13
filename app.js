
// v4.7.2 Rehberler modal acil temizlik
(function removeOldGuidesPanels() {
  document.body?.classList?.remove('guides-modal-open', 'guides-menu-open');
  document.querySelectorAll?.('.guides-modal, .guides-modal-panel, .guides-modal-backdrop, .guides-modal-head, .guides-modal-grid, .nav-modal-trigger, .nav-dropdown, .nav-dropdown-menu').forEach(item => item.remove());
})();

// Sayfa yenilendiğinde tarayıcının eski kaydırma konumunu hatırlamasını engeller.
// Kullanıcı sayfanın neresinde olursa olsun yenilemede en üstten başlar.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
  setTimeout(() => window.scrollTo(0, 0), 0);
});

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


function getOptionalInputValue(id) {
  return (document.getElementById(id)?.value || '').trim();
}

function getPlannerInputValues() {
  return {
    budgetRaw: document.getElementById('budget')?.value || '',
    goal: document.getElementById('goal')?.value || '',
    sector: document.getElementById('sector')?.value || '',
    audience: document.getElementById('audience')?.value || '',
    durationRaw: document.getElementById('duration')?.value || '',
    clientName: getOptionalInputValue('clientName'),
    preparedBy: getOptionalInputValue('preparedBy'),
    campaignPeriod: getOptionalInputValue('campaignPeriod'),
    serviceFeeRaw: getOptionalInputValue('serviceFee'),
    vatRateRaw: getOptionalInputValue('vatRate'),
    proposalNote: getOptionalInputValue('proposalNote')
  };
}

function hasCompletePlannerInputs() {
  const values = getPlannerInputValues();
  return Boolean(values.budgetRaw && values.goal && values.sector && values.audience && values.durationRaw);
}

function validatePlannerInputs() {
  const values = getPlannerInputValues();
  if (!values.budgetRaw || !values.goal || !values.sector || !values.audience || !values.durationRaw) {
    setFormStatus('Lütfen bütçe, kampanya amacı, sektör, hedef kitle ve süre alanlarının hepsini doldur.');
    return null;
  }

  const budget = sanitizeBudgetInput();
  const duration = Number(values.durationRaw);

  if (!basePlans[values.goal]) {
    setFormStatus('Lütfen geçerli bir kampanya amacı seç.');
    return null;
  }

  const serviceFee = Math.max(0, Number(values.serviceFeeRaw || 0));
  const vatRate = Math.max(0, Number(values.vatRateRaw || 0));

  return {
    budget,
    goal: values.goal,
    sector: values.sector,
    audience: values.audience,
    duration,
    agency: {
      clientName: values.clientName,
      preparedBy: values.preparedBy,
      campaignPeriod: values.campaignPeriod,
      serviceFee: Number.isFinite(serviceFee) ? serviceFee : 0,
      vatRate: Number.isFinite(vatRate) ? vatRate : 0,
      proposalNote: values.proposalNote
    }
  };
}

function clearPlanOutput() {
  lastPlanData = null;
  const resultTitle = document.getElementById('resultTitle');
  const planSummary = document.getElementById('planSummary');
  const table = document.getElementById('allocationTable');
  const stats = document.getElementById('stats');
  const resultOverview = document.getElementById('resultOverview');
  const campaignScore = document.getElementById('campaignScore');
  const adCopySuggestions = document.getElementById('adCopySuggestions');
  const channelVisual = document.getElementById('channelVisual');
  const insights = document.getElementById('insights');
  const optimizationCards = document.getElementById('optimizationCards');
  const channelPlaybook = document.getElementById('channelPlaybook');
  const weeklyPlan = document.getElementById('weeklyPlan');
  const strategyReport = document.getElementById('strategyReport');
  const chartCanvas = document.getElementById('budgetChart');

  if (resultTitle) resultTitle.textContent = 'Plan sonucunuz burada görünecek';
  if (planSummary) planSummary.innerHTML = '<p class="notice">Bütçe, kampanya amacı, sektör, hedef kitle ve süre seçildikten sonra medya planı burada oluşur.</p>';
  if (table) table.innerHTML = '<tr><td colspan="7">Henüz plan oluşturulmadı.</td></tr>';
  if (resultOverview) resultOverview.innerHTML = '<p>Plan oluşturduktan sonra burada kısa strateji özeti, tahmini skorlar ve uygulanacak ilk adımlar görünecek.</p>';
  if (campaignScore) { campaignScore.classList.add('empty'); campaignScore.innerHTML = '<p>Kampanya skoru plan oluşturulduktan sonra burada görünecek.</p>'; }
  if (adCopySuggestions) { adCopySuggestions.classList.add('empty'); adCopySuggestions.innerHTML = '<p>Reklam metni önerileri plan oluşturulduktan sonra burada görünecek.</p>'; }
  if (channelVisual) channelVisual.innerHTML = '<p>Kanal dağılımı plan oluşturunca burada görsel olarak listelenecek.</p>';
  if (stats) stats.innerHTML = '';
  if (insights) insights.innerHTML = '';
  if (optimizationCards) optimizationCards.innerHTML = '';
  if (channelPlaybook) channelPlaybook.innerHTML = '';
  if (weeklyPlan) weeklyPlan.innerHTML = '';
  if (strategyReport) strategyReport.innerHTML = '<p>Plan oluşturduktan sonra strateji raporu burada görünecek.</p>';
  if (chart) {
    chart.destroy();
    chart = null;
  }
  if (chartCanvas) chartCanvas.style.display = '';
}

function createPlan() {
  const values = validatePlannerInputs();
  if (!values) {
    clearPlanOutput();
    return;
  }

  const { budget, goal, sector, audience, duration, agency } = values;

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

  renderResults({ budget, goal, sector, audience, duration, agency, rows, totalImpressions, totalClicks, avgCpm, avgCpc, ctr, dailyBudget });
}


function getCampaignScoreData(data) {
  let score = 62;
  const strengths = [];
  const risks = [];

  if (data.budget >= 10000) {
    score += 8;
    strengths.push('Bütçe test yapmak için daha yönetilebilir seviyede.');
  } else {
    score -= 8;
    risks.push('Bütçe düşük olduğu için kanal sayısı sınırlı tutulmalı.');
  }

  if (data.duration >= 15) {
    score += 8;
    strengths.push('Kampanya süresi öğrenme ve optimizasyon için uygun.');
  } else {
    score -= 7;
    risks.push('Süre kısa olduğu için ilk günlerde net kreatif ve teklif gerekir.');
  }

  if (data.rows.length <= 5) {
    score += 6;
    strengths.push('Kanal sayısı bütçeyi aşırı bölmeyecek seviyede.');
  } else {
    score -= 5;
    risks.push('Kanal sayısı fazla olursa bütçe küçük parçalara dağılabilir.');
  }

  if (data.rows.some(row => row.channel.toLowerCase().includes('remarketing'))) {
    score += 7;
    strengths.push('Remarketing payı, ilgilenen kullanıcıları tekrar yakalamaya yardımcı olur.');
  } else if (['sales', 'traffic', 'launch'].includes(data.goal)) {
    score -= 6;
    risks.push('Remarketing desteği eklemek dönüşüm hedefinde faydalı olabilir.');
  }

  if (data.dailyBudget >= 500) {
    score += 5;
    strengths.push('Günlük bütçe anlamlı sinyal toplamak için daha uygun.');
  } else {
    score -= 4;
    risks.push('Günlük bütçe düşükse sonuçları yorumlamak daha uzun sürebilir.');
  }

  if (['restaurant', 'beauty', 'localService'].includes(data.sector) && data.goal === 'local') {
    score += 5;
    strengths.push('Yerel işletme hedefi ile sektör seçimi uyumlu.');
  }

  if (data.goal === 'sales' && data.budget < 15000) {
    risks.push('Satış hedefi için bütçe düşükse önce küçük test ve remarketing daha mantıklı olabilir.');
  }

  score = Math.max(35, Math.min(96, Math.round(score)));

  const label = score >= 82 ? 'Güçlü başlangıç planı' : score >= 68 ? 'Dengeli test planı' : 'Dikkatli test edilmeli';
  const note = score >= 82
    ? 'Plan genel olarak iyi görünüyor. İlk veriler geldikten sonra kazanan kanal ve kreatiflere bütçe kaydırılmalı.'
    : score >= 68
      ? 'Plan başlangıç için kullanılabilir. Ancak ilk hafta kanal ve kreatif performansı yakından takip edilmeli.'
      : 'Plan çalışabilir ama bütçe, süre veya kanal dağılımı açısından dikkatli ilerlemek gerekir.';

  return {
    score,
    label,
    note,
    strengths: strengths.slice(0, 3),
    risks: risks.slice(0, 3)
  };
}

function getAdCopySuggestions(data) {
  const sector = sectorLabels[data.sector] || 'markan';
  const goal = goalLabels[data.goal] || 'kampanya';
  const client = data.agency?.clientName || sector;
  const primaryChannel = data.rows[0]?.channel || 'ana kanal';

  const ctaByGoal = {
    awareness: 'Markayı keşfet',
    sales: 'Şimdi incele',
    traffic: 'Detayları gör',
    social: 'Hemen takip et',
    launch: 'Yeni ürünü keşfet',
    local: 'Yol tarifi al'
  };

  const hookBySector = {
    ecommerce: 'Online alışverişte ihtiyacına uygun seçenekleri keşfet.',
    restaurant: 'Yakınındaki lezzetleri keşfet ve kampanyayı kaçırma.',
    fashion: 'Yeni sezon ürünlerini ve öne çıkan fırsatları incele.',
    education: 'Hedeflerine uygun eğitim programını bugün incele.',
    technology: 'Yeni nesil çözümü keşfet ve detayları gör.',
    beauty: 'Randevunu planla, kendine iyi bakmaya bugün başla.',
    event: 'Etkinlik detaylarını incele ve yerini ayırt.',
    localService: 'Yakınındaki güvenilir hizmet seçeneğini keşfet.'
  };

  const cta = ctaByGoal[data.goal] || 'Detayları gör';
  const hook = hookBySector[data.sector] || `${sector} için hazırlanan kampanyayı incele.`;

  return {
    instagramTitle: `${client} için ${goal.toLowerCase()} kampanyası`,
    instagramText: `${hook} ${data.duration} günlük kampanya döneminde fırsatları ve detayları görmek için hemen incele.`,
    googleHeadlines: [
      `${sector} Reklam Kampanyası`,
      `${client} Fırsatlarını İncele`,
      `${cta} | KampanyaLab Planı`
    ],
    googleDescription: `${sector} odağında hazırlanan kampanya planını incele. Bütçe, hedef ve kanal dağılımına göre ilk adımı at.`,
    cta,
    videoIdea: `${primaryChannel} için 10-15 saniyelik kısa video: ilk 3 saniyede problemi göster, ortada çözümü anlat, son karede “${cta}” çağrısı kullan.`,
    remarketingText: `Daha önce ilgilenen kullanıcılara kısa hatırlatma: “${client} kampanyasını incelemeyi unutma. Detaylar için tekrar göz at.”`
  };
}

function renderCampaignScore(data) {
  const target = document.getElementById('campaignScore');
  if (!target) return;
  const scoreData = getCampaignScoreData(data);

  const strengths = scoreData.strengths.length
    ? scoreData.strengths.map(item => `<li>${item}</li>`).join('')
    : '<li>Plan başlangıç için temel medya dağılımı sunuyor.</li>';

  const risks = scoreData.risks.length
    ? scoreData.risks.map(item => `<li>${item}</li>`).join('')
    : '<li>İlk veriler geldikten sonra düşük performanslı kanallar azaltılmalı.</li>';

  target.classList.remove('empty');
  target.innerHTML = `
    <div class="score-ring" style="--score:${scoreData.score}">
      <strong>${scoreData.score}</strong>
      <span>/100</span>
    </div>
    <div class="score-content">
      <span>Kampanya Skoru</span>
      <h4>${scoreData.label}</h4>
      <p>${scoreData.note}</p>
      <div class="score-lists">
        <div>
          <strong>Güçlü yönler</strong>
          <ul>${strengths}</ul>
        </div>
        <div>
          <strong>Dikkat edilmesi gerekenler</strong>
          <ul>${risks}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderAdCopySuggestions(data) {
  const target = document.getElementById('adCopySuggestions');
  if (!target) return;
  const copy = getAdCopySuggestions(data);

  target.classList.remove('empty');
  target.innerHTML = `
    <div class="copy-head">
      <div>
        <span>Reklam metni önerileri</span>
        <h4>Başlangıç kreatif taslakları</h4>
      </div>
      <p>Bu metinler kesin sonuç vaadi değildir; ilk reklam taslağı ve kreatif fikir üretimi için kullanılabilir.</p>
    </div>
    <div class="copy-grid">
      <div class="copy-card">
        <span>Instagram / Meta</span>
        <strong>${copy.instagramTitle}</strong>
        <p>${copy.instagramText}</p>
        <em>CTA: ${copy.cta}</em>
      </div>
      <div class="copy-card">
        <span>Google Ads başlıkları</span>
        <strong>${copy.googleHeadlines[0]}</strong>
        <p>${copy.googleHeadlines[1]}<br>${copy.googleHeadlines[2]}</p>
        <em>${copy.googleDescription}</em>
      </div>
      <div class="copy-card">
        <span>Reels / TikTok fikri</span>
        <strong>Kısa video akışı</strong>
        <p>${copy.videoIdea}</p>
      </div>
      <div class="copy-card">
        <span>Remarketing</span>
        <strong>Hatırlatma mesajı</strong>
        <p>${copy.remarketingText}</p>
      </div>
    </div>
  `;
}

function renderResults(data) {
  lastPlanData = data;
  const clientLabel = data.agency?.clientName ? ` · ${data.agency.clientName}` : '';
  document.getElementById('resultTitle').textContent = `${goalLabels[data.goal]} kampanyası planı${clientLabel}`;

  renderPlanSummary(data);
  renderResultOverview(data);
  renderCampaignScore(data);
  renderAdCopySuggestions(data);
  renderChannelVisual(data);
  renderAgencyPreview(data);

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


function renderAgencyPreview(data) {
  const planSummary = document.getElementById('planSummary');
  if (!planSummary || !data.agency) return;

  const agency = data.agency;
  const hasAgencyInfo = agency.clientName || agency.preparedBy || agency.campaignPeriod || agency.serviceFee || agency.proposalNote;
  if (!hasAgencyInfo) return;

  const vatAmount = agency.serviceFee && agency.vatRate ? agency.serviceFee * agency.vatRate / 100 : 0;
  const totalOffer = agency.serviceFee ? agency.serviceFee + vatAmount : 0;

  const agencyHtml = `
    <div class="agency-preview-card">
      <span>Ajans / müşteri modu aktif</span>
      <strong>${agency.clientName || 'Müşteri adı belirtilmedi'}</strong>
      <p>${agency.preparedBy ? 'Hazırlayan: ' + agency.preparedBy : 'PDF raporda hazırlayan alanı boş bırakıldı.'}</p>
      ${agency.campaignPeriod ? `<p>Kampanya dönemi: ${agency.campaignPeriod}</p>` : ''}
      ${agency.serviceFee ? `<p>Hizmet bedeli: ${formatter.format(agency.serviceFee)}${agency.vatRate ? ' + KDV · Toplam: ' + formatter.format(totalOffer) : ''}</p>` : ''}
    </div>
  `;

  planSummary.insertAdjacentHTML('beforeend', agencyHtml);
}

function renderResultOverview(data) {
  const tier = budgetTier(data.budget);
  const primary = data.rows[0];
  const secondary = data.rows[1];
  const riskLevel = data.budget < 10000 || data.duration <= 7 ? 'Dikkatli test' : data.budget >= 50000 ? 'Geniş test alanı' : 'Dengeli test';
  const focusText = data.goal === 'sales'
    ? 'Satış niyeti yüksek kanallar ve yeniden hedefleme birlikte kullanılmalı.'
    : data.goal === 'awareness'
      ? 'Erişim ve görünürlük odaklı kanallar kreatif testlerle desteklenmeli.'
      : data.goal === 'local'
        ? 'Yakın çevre hedefleme, harita/arama niyeti ve sosyal görünürlük birlikte çalışmalı.'
        : 'İlk amaç hızlı veri toplamak ve iyi çalışan kanalları büyütmek olmalı.';

  document.getElementById('resultOverview').innerHTML = `
    <div class="overview-card primary-overview">
      <span class="overview-icon">🎯</span>
      <div>
        <span>Plan odağı</span>
        <strong>${goalLabels[data.goal]} · ${sectorLabels[data.sector]}</strong>
        <p>${focusText}</p>
      </div>
    </div>
    <div class="overview-card">
      <span class="overview-icon">📌</span>
      <div>
        <span>Ana kanal</span>
        <strong>${primary.channel} / %${primary.percent}</strong>
        <p>${secondary ? secondary.channel + ' ikinci destek kanalı olarak önerildi.' : 'Bütçe tek ana kanalda daha net test edilebilir.'}</p>
      </div>
    </div>
    <div class="overview-card">
      <span class="overview-icon">⚙️</span>
      <div>
        <span>Uygulama modu</span>
        <strong>${riskLevel}</strong>
        <p>${tier.description}</p>
      </div>
    </div>
  `;
}

function renderChannelVisual(data) {
  document.getElementById('channelVisual').innerHTML = `
    <div class="channel-visual-head">
      <span>Kanal dağılımı</span>
      <strong>${formatter.format(data.budget)}</strong>
    </div>
    <div class="channel-bars">
      ${data.rows.map(row => `
        <div class="channel-bar-row">
          <div class="channel-bar-meta">
            <strong>${row.channel}</strong>
            <span>%${row.percent} · ${formatter.format(row.budget)}</span>
          </div>
          <div class="channel-bar-track"><i style="width:${Math.max(row.percent, 4)}%"></i></div>
        </div>
      `).join('')}
    </div>
  `;
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












// v4.7.1 Rehberler kalıntı temizliği: eski modal/dropdown sistemi devre dışı.
document.getElementById('guidesModal')?.remove();
document.body.classList.remove('guides-modal-open', 'guides-menu-open');
document.querySelectorAll('.nav-modal-trigger, .nav-dropdown, .nav-dropdown-menu').forEach(item => item.remove());


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
  document.getElementById(id).addEventListener('input', () => {
    if (!hasCompletePlannerInputs()) {
      clearPlanOutput();
      setFormStatus('Alanları doldurduktan sonra “Medya Planı Oluştur” butonuna bas.');
    } else {
      setFormStatus('Seçimler hazır. Planı yenilemek için “Medya Planı Oluştur” butonuna bas.');
    }
  });
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
  const primaryChannel = data.rows[0]?.channel || '-';
  const reportText = cleanPdfText(document.getElementById('strategyReport').innerText);
  const weeklyText = cleanPdfText(document.getElementById('weeklyPlan').innerText);
  const tier = budgetTier(data.budget);
  const fileGoal = goalLabels[data.goal] || 'Kampanya';
  const fileSector = sectorLabels[data.sector] || 'Sektör';
  const safeTotalImpressions = data.totalImpressions > 0 ? numberFormatter.format(Math.round(data.totalImpressions)) : 'Ölçülmez';
  const safeTotalClicks = data.totalClicks > 0 ? numberFormatter.format(Math.round(data.totalClicks)) : 'Ölçülmez';
  const agency = data.agency || {};
  const clientName = agency.clientName || 'Belirtilmedi';
  const preparedBy = agency.preparedBy || 'KampanyaLab';
  const campaignPeriod = agency.campaignPeriod || `${data.duration} günlük kampanya dönemi`;
  const proposalNote = agency.proposalNote || 'Bu rapor başlangıç medya planı ve tahmini performans simülasyonu olarak hazırlanmıştır.';
  const serviceFee = Number(agency.serviceFee || 0);
  const vatRate = Number(agency.vatRate || 0);
  const vatAmount = serviceFee > 0 && vatRate > 0 ? serviceFee * vatRate / 100 : 0;
  const totalOffer = serviceFee + vatAmount;
  const hasOffer = serviceFee > 0;

  const metricBox = (label, value, note) => ({
    table: {
      widths: ['*'],
      body: [[{
        stack: [
          { text: label, fontSize: 8, color: '#64748b', bold: true, margin: [0, 0, 0, 4] },
          { text: value, fontSize: 15, color: '#0f172a', bold: true },
          note ? { text: note, fontSize: 7.5, color: '#64748b', margin: [0, 5, 0, 0] } : { text: ' ', fontSize: 1 }
        ],
        fillColor: '#f8fafc',
        margin: [10, 9, 10, 9]
      }]]
    },
    layout: {
      hLineColor() { return '#e2e8f0'; },
      vLineColor() { return '#e2e8f0'; },
      paddingLeft() { return 0; },
      paddingRight() { return 0; },
      paddingTop() { return 0; },
      paddingBottom() { return 0; }
    }
  });

  const sectionTitle = title => ({
    text: title,
    fontSize: 14,
    bold: true,
    color: '#1e3a8a',
    margin: [0, 18, 0, 8]
  });

  const recommendationText = data.goal === 'sales'
    ? 'Satış odaklı kampanyalarda arama niyeti ve remarketing birlikte takip edilmeli. İlk veriler geldikçe düşük dönüşüm getiren kanal payları azaltılmalı.'
    : data.goal === 'awareness'
      ? 'Bilinirlik kampanyalarında erişim maliyeti, video izlenme oranı ve frekans birlikte yorumlanmalı. Aynı kreatif uzun süre tek başına kullanılmamalı.'
      : data.goal === 'local'
        ? 'Yerel kampanyalarda yakın çevre hedefleme, harita/arama görünürlüğü ve sosyal medya içerikleri birlikte planlanmalı.'
        : 'İlk aşamada amaç veri toplamak, sonrasında iyi çalışan kanal ve kreatifleri büyütmek olmalı.';

  const riskText = data.budget < 10000
    ? 'Bütçe düşük olduğu için kanal sayısı sınırlı tutulmalı. Çok fazla kanala bölmek öğrenme verisini zayıflatabilir.'
    : data.duration <= 7
      ? 'Süre kısa olduğu için algoritmaların öğrenme dönemi sınırlı kalabilir. İlk günden net teklif ve güçlü kreatif gerekir.'
      : 'Ana risk; kreatif kalite, hedefleme doğruluğu, rekabet ve web sitesi/landing page performansıdır.';

  const channelTableRows = data.rows.map(row => ([
    { text: row.channel, bold: true, color: '#0f172a' },
    row.role || '-',
    { text: `%${row.percent}`, alignment: 'center', bold: true },
    { text: formatter.format(row.budget), alignment: 'right' },
    { text: row.impressions > 0 ? numberFormatter.format(Math.round(row.impressions)) : 'Ölçülmez', alignment: 'right' },
    { text: row.clicks > 0 ? numberFormatter.format(Math.round(row.clicks)) : 'Ölçülmez', alignment: 'right' }
  ]));

  const distributionRows = data.rows.map(row => ([
    { text: row.channel, bold: true },
    {
      stack: [
        {
          canvas: [
            { type: 'rect', x: 0, y: 2, w: 150, h: 8, r: 4, color: '#e2e8f0' },
            { type: 'rect', x: 0, y: 2, w: Math.max(6, row.percent * 1.5), h: 8, r: 4, color: '#2563eb' }
          ]
        }
      ]
    },
    { text: `%${row.percent}`, bold: true, alignment: 'right' },
    { text: formatter.format(row.budget), alignment: 'right' }
  ]));

  return {
    pageSize: 'A4',
    pageMargins: [36, 42, 36, 46],
    info: {
      title: `${clientName !== 'Belirtilmedi' ? clientName + ' · ' : ''}KampanyaLab ${fileGoal} Medya Planı`,
      author: 'KampanyaLab',
      subject: 'Tahmini medya planlama raporu'
    },
    footer(currentPage, pageCount) {
      return {
        columns: [
          { text: 'KampanyaLab · Tahmini medya planlama raporu', margin: [36, 0, 0, 0], color: '#64748b', fontSize: 8 },
          { text: `${currentPage} / ${pageCount}`, alignment: 'right', margin: [0, 0, 36, 0], color: '#64748b', fontSize: 8 }
        ]
      };
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
          body: [[{
            stack: [
              { text: 'KampanyaLab', color: '#bfdbfe', fontSize: 10, bold: true, margin: [0, 0, 0, 6] },
              { text: `${clientName !== 'Belirtilmedi' ? clientName : fileGoal} Medya Planı`, color: '#ffffff', fontSize: 24, bold: true, margin: [0, 0, 0, 5] },
              { text: `${fileSector} sektörü · ${data.audience} yaş hedefi · ${campaignPeriod}`, color: '#dbeafe', fontSize: 10 },
              { text: `Hazırlayan: ${preparedBy} · Oluşturma tarihi: ${generatedAt}`, color: '#bfdbfe', fontSize: 8, margin: [0, 10, 0, 0] }
            ],
            fillColor: '#1e3a8a',
            margin: [18, 16, 18, 16]
          }]]
        },
        layout: 'noBorders',
        margin: [0, 0, 0, 12]
      },
      {
        table: {
          widths: ['*', '*'],
          body: [
            [
              { text: 'Müşteri / Marka', bold: true, color: '#64748b' },
              { text: clientName, bold: true, color: '#0f172a' }
            ],
            [
              { text: 'Hazırlayan', bold: true, color: '#64748b' },
              { text: preparedBy, color: '#0f172a' }
            ],
            [
              { text: 'Kampanya dönemi', bold: true, color: '#64748b' },
              { text: campaignPeriod, color: '#0f172a' }
            ],
            [
              { text: 'Teklif notu', bold: true, color: '#64748b' },
              { text: proposalNote, color: '#0f172a' }
            ]
          ]
        },
        layout: {
          fillColor(rowIndex) { return rowIndex % 2 === 0 ? '#f8fafc' : null; },
          hLineColor() { return '#e2e8f0'; },
          vLineColor() { return '#e2e8f0'; }
        },
        margin: [0, 0, 0, 12]
      },
      ...(hasOffer ? [{
        table: {
          widths: ['*', '*', '*'],
          body: [[
            { stack: [{ text: 'Reklam bütçesi', color: '#64748b', fontSize: 8, bold: true }, { text: formatter.format(data.budget), bold: true, fontSize: 14 }], fillColor: '#f8fafc', margin: [10, 8, 10, 8] },
            { stack: [{ text: 'Hizmet bedeli', color: '#64748b', fontSize: 8, bold: true }, { text: formatter.format(serviceFee), bold: true, fontSize: 14 }], fillColor: '#f8fafc', margin: [10, 8, 10, 8] },
            { stack: [{ text: vatRate ? `Toplam teklif · KDV %${vatRate}` : 'Toplam teklif', color: '#64748b', fontSize: 8, bold: true }, { text: formatter.format(totalOffer), bold: true, fontSize: 14, color: '#1e3a8a' }], fillColor: '#eff6ff', margin: [10, 8, 10, 8] }
          ]]
        },
        layout: 'noBorders',
        margin: [0, 0, 0, 12]
      }] : []),
      {
        columns: [
          metricBox('Toplam bütçe', formatter.format(data.budget), tier.label),
          metricBox('Günlük bütçe', formatter.format(data.dailyBudget), `${data.duration} güne bölündü`),
          metricBox('Ana kanal', primaryChannel, `İlk 3: ${topChannels}`)
        ],
        columnGap: 10,
        margin: [0, 0, 0, 8]
      },
      {
        columns: [
          metricBox('Tahmini gösterim', safeTotalImpressions, 'CPM varsayımlarına göre'),
          metricBox('Tahmini tıklama', safeTotalClicks, 'CPC varsayımlarına göre'),
          metricBox('Tahmini CTR', data.ctr ? `%${data.ctr.toFixed(2)}` : '-', 'Yaklaşık oran')
        ],
        columnGap: 10,
        margin: [0, 0, 0, 8]
      },
      sectionTitle('Kanal Dağılımı'),
      {
        table: {
          widths: [110, '*', 40, 70],
          body: [
            [
              { text: 'Kanal', bold: true, color: '#ffffff' },
              { text: 'Pay', bold: true, color: '#ffffff' },
              { text: 'Oran', bold: true, color: '#ffffff', alignment: 'right' },
              { text: 'Bütçe', bold: true, color: '#ffffff', alignment: 'right' }
            ],
            ...distributionRows
          ]
        },
        layout: {
          fillColor(rowIndex) { return rowIndex === 0 ? '#1e40af' : (rowIndex % 2 === 0 ? '#f8fafc' : null); },
          hLineColor() { return '#e2e8f0'; },
          vLineColor() { return '#e2e8f0'; }
        }
      },
      sectionTitle('Detaylı Performans Tablosu'),
      {
        table: {
          headerRows: 1,
          widths: [82, '*', 34, 58, 60, 52],
          body: [
            [
              { text: 'Kanal', bold: true, color: '#ffffff' },
              { text: 'Rol', bold: true, color: '#ffffff' },
              { text: 'Oran', bold: true, color: '#ffffff', alignment: 'center' },
              { text: 'Bütçe', bold: true, color: '#ffffff', alignment: 'right' },
              { text: 'Gösterim', bold: true, color: '#ffffff', alignment: 'right' },
              { text: 'Tıklama', bold: true, color: '#ffffff', alignment: 'right' }
            ],
            ...channelTableRows
          ]
        },
        layout: {
          fillColor(rowIndex) { return rowIndex === 0 ? '#0f172a' : (rowIndex % 2 === 0 ? '#f8fafc' : null); },
          hLineColor() { return '#e2e8f0'; },
          vLineColor() { return '#e2e8f0'; }
        }
      },
      sectionTitle('Plan Yorumu'),
      {
        table: {
          widths: ['*', '*'],
          body: [[
            {
              stack: [
                { text: 'Önerilen yaklaşım', bold: true, color: '#1e3a8a', margin: [0, 0, 0, 5] },
                { text: recommendationText }
              ],
              fillColor: '#eff6ff',
              margin: [12, 10, 12, 10]
            },
            {
              stack: [
                { text: 'Dikkat edilmesi gereken risk', bold: true, color: '#9a3412', margin: [0, 0, 0, 5] },
                { text: riskText }
              ],
              fillColor: '#fff7ed',
              margin: [12, 10, 12, 10]
            }
          ]]
        },
        layout: 'noBorders'
      },
      sectionTitle('Strateji Raporu'),
      { text: reportText, margin: [0, 0, 0, 4] },
      sectionTitle('Haftalık Uygulama Planı'),
      { text: weeklyText, margin: [0, 0, 0, 4] },
      sectionTitle('Sonraki 3 Adım'),
      {
        ol: [
          'İlk 3-5 gün kampanyayı izleyip CTR, CPC ve kaliteli trafik sinyallerini kontrol et.',
          'Düşük performanslı kanal veya kreatiflerin bütçesini azaltıp iyi çalışanlara pay aktar.',
          'Kampanya sonunda öğrenimleri not alıp sonraki dönemde bütçe dağılımını yeniden hesapla.'
        ]
      },
      {
        text: 'Uyarı: KampanyaLab tahmini medya planlama simülasyonudur. Bu rapor kesin reklam performansı, gelir veya satış garantisi vermez. Gerçek sonuçlar kreatif kalite, hedefleme, rekabet, sezon ve web sitesi deneyimine göre değişebilir.',
        fontSize: 8,
        color: '#64748b',
        margin: [0, 14, 0, 0]
      }
    ]
  };
}

function downloadPdfReport() {
  if (!lastPlanData) {
    alert('PDF indirmek için önce medya planı oluşturmalısın.');
    return;
  }

  if (typeof pdfMake === 'undefined') {
    alert('PDF kütüphanesi yüklenemedi. Yazdır seçeneğiyle PDF olarak kaydedebilirsin.');
    window.print();
    return;
  }

  const fileNameGoal = goalLabels[lastPlanData.goal].toLowerCase().replace(/\s+/g, '-');
  const fileNameClient = (lastPlanData.agency?.clientName || '')
    .toLowerCase()
    .replace(/[ğ]/g, 'g').replace(/[ü]/g, 'u').replace(/[ş]/g, 's').replace(/[ı]/g, 'i').replace(/[ö]/g, 'o').replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const docDefinition = buildPdfDocumentDefinition(lastPlanData);
  pdfMake.createPdf(docDefinition).download(`kampanyalab-${fileNameClient ? fileNameClient + '-' : ''}${fileNameGoal}-medya-plani.pdf`);
}

document.getElementById('downloadPdf')?.addEventListener('click', downloadPdfReport);
document.getElementById('downloadPdfReport')?.addEventListener('click', downloadPdfReport);



// v2.0.1 AI planlayıcı yakında modu
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

function setAiComingSoonMode() {
  if (aiPrompt) {
    aiPrompt.value = '';
    aiPrompt.disabled = true;
  }
  if (generateAiPlanButton) {
    generateAiPlanButton.disabled = true;
    generateAiPlanButton.textContent = 'Yakında Aktif Olacak';
  }
  if (clearAiPlanButton) clearAiPlanButton.disabled = true;
  renderAiResult('AI destekli kampanya planlayıcı yakında aktif edilecektir. Şimdilik hazır şablonlar, medya planı motoru ve PDF rapor sistemini kullanabilirsin.', true);
  setAiStatus('AI planlayıcı şu anda yakında modunda. OpenAI API ücretli kullanım gerektirdiği için taslak oluşturma geçici olarak kapalıdır.', 'info');
}

aiPlannerForm?.addEventListener('submit', event => {
  event.preventDefault();
  setAiComingSoonMode();
});

clearAiPlanButton?.addEventListener('click', setAiComingSoonMode);

copyAiPlanButton?.addEventListener('click', async () => {
  const text = aiResult?.innerText || '';
  if (!text || aiResult?.classList.contains('empty')) {
    setAiStatus('AI planlayıcı yakında modunda olduğu için kopyalanacak taslak yok.', 'info');
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

setAiComingSoonMode();

function resetPlannerDefaults() {
  ['budget', 'goal', 'sector', 'audience', 'duration'].forEach(id => {
    const element = document.getElementById(id);
    if (element) element.value = '';
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
  setAiComingSoonMode();
  setFormStatus('');
}

window.addEventListener('pageshow', () => {
  resetPlannerDefaults();
  clearPlanOutput();
});


// v2.1 beta geri bildirim alanı
const feedbackChoices = document.querySelectorAll('[data-feedback]');
const feedbackText = document.getElementById('feedbackText');
const feedbackStatus = document.getElementById('feedbackStatus');
const copyFeedbackButton = document.getElementById('copyFeedback');
const clearFeedbackButton = document.getElementById('clearFeedback');
let selectedFeedback = '';

function setFeedbackStatus(message, type = '') {
  if (!feedbackStatus) return;
  feedbackStatus.textContent = message || '';
  feedbackStatus.className = `form-status ${type}`.trim();
}

feedbackChoices.forEach(button => {
  button.addEventListener('click', () => {
    selectedFeedback = button.dataset.feedback || '';
    feedbackChoices.forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    setFeedbackStatus('Seçim kaydedildi. Not ekleyip geri bildirim metnini kopyalayabilirsin.', 'info');
  });
});

copyFeedbackButton?.addEventListener('click', async () => {
  const note = (feedbackText?.value || '').trim();
  const feedbackMessage = [
    'KampanyaLab Beta Geri Bildirimi',
    `Değerlendirme: ${selectedFeedback || 'Seçilmedi'}`,
    `Not: ${note || 'Ek not yok'}`,
    `Sayfa: ${window.location.href}`
  ].join('\n');

  try {
    await navigator.clipboard.writeText(feedbackMessage);
    copyFeedbackButton.textContent = 'Kopyalandı';
    setFeedbackStatus('Geri bildirim metni kopyalandı. İstediğin kanaldan paylaşabilirsin.', 'ok');
    setTimeout(() => copyFeedbackButton.textContent = 'Geri Bildirimi Kopyala', 1600);
  } catch {
    setFeedbackStatus('Kopyalama başarısız oldu. Metni manuel seçip kopyalayabilirsin.', 'error');
  }
});

clearFeedbackButton?.addEventListener('click', () => {
  selectedFeedback = '';
  feedbackChoices.forEach(item => item.classList.remove('is-active'));
  if (feedbackText) feedbackText.value = '';
  setFeedbackStatus('');
});
