export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    // Dummy APK URL
    const apkUrl = `https://example.com/generated-apks/${encodeURIComponent(text)}.apk`;

    res.status(200).json({ apk_url: apkUrl });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
