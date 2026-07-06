module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(503).json({
    error: 'AI planlayıcı şimdilik yakında modundadır. Medya planı motoru ve hazır şablonlar kullanılabilir.'
  });
};
