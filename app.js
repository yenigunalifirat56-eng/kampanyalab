const OPENAI_API_URL = 'https://api.openai.com/v1/responses';
const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1-mini';

const blockedTerms = [
  'alkol', 'bira', 'şarap', 'vodka', 'viski', 'sigara', 'tütün', 'nikotin', 'vape', 'elektronik sigara',
  'bahis', 'kumar', 'casino', 'kumarhane', 'silah', 'tabanca', 'tüfek', 'bıçak', 'uyuşturucu', 'thc', 'esrar', 'porno', 'adult'
];

function extractOutputText(data) {
  if (typeof data.output_text === 'string' && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const parts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === 'output_text' && content.text) parts.push(content.text);
      if (content.type === 'text' && content.text) parts.push(content.text);
    }
  }
  return parts.join('\n').trim();
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Sadece POST isteği desteklenir.' });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'OPENAI_API_KEY Vercel Environment Variables içinde bulunamadı.' });
    return;
  }

  try {
    const prompt = String(req.body?.prompt || '').trim();

    if (prompt.length < 20) {
      res.status(400).json({ error: 'Brief en az 20 karakter olmalı.' });
      return;
    }

    if (prompt.length > 1200) {
      res.status(400).json({ error: 'Brief en fazla 1200 karakter olabilir.' });
      return;
    }

    const lowerPrompt = prompt.toLocaleLowerCase('tr-TR');
    if (blockedTerms.some(term => lowerPrompt.includes(term))) {
      res.status(400).json({
        error: 'KampanyaLab bu kategori için reklam planı oluşturmaz. Lütfen güvenli ve genel bir işletme/ürün senaryosu gir.'
      });
      return;
    }

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        instructions: `Sen KampanyaLab için çalışan Türkçe bir medya planlama asistanısın.
Yanıtlarını Türkiye pazarı, TL bütçe mantığı ve küçük/orta ölçekli işletmeler için anlaşılır şekilde yaz.
Kesin satış, gelir veya performans garantisi verme.
Kullanıcı kişisel veri, şifre, ödeme bilgisi yazarsa bunları işlememesini söyle.
Alkol, nikotin/tütün/vape, kumar/bahis, silah, uyuşturucu, yetişkin içerik veya zararlı/yaş sınırlı ürünler için reklam planı oluşturma.
Yanıtı kısa ama uygulanabilir tut. Başlıkları şu sırayla kullan:
1) Kısa özet
2) Önerilen hedef ve hedef kitle
3) Kanal önerileri
4) Reklam metni fikirleri
5) İçerik fikirleri
6) Haftalık uygulama planı
7) Risk ve optimizasyon notları
8) Uyarı`,
        input: `Kullanıcı briefi:\n${prompt}`,
        max_output_tokens: 1200
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const message = data?.error?.message || 'OpenAI API isteği başarısız oldu.';
      res.status(response.status).json({ error: message });
      return;
    }

    const plan = extractOutputText(data);
    if (!plan) {
      res.status(502).json({ error: 'AI yanıtı boş döndü.' });
      return;
    }

    res.status(200).json({ plan });
  } catch (error) {
    res.status(500).json({ error: error.message || 'AI planı oluşturulamadı.' });
  }
};
