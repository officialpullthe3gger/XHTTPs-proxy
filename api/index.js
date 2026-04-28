export default async function handler(req, res) {
  try {
    const target = "https://xray.novix.fyi";
    const url = target + req.url;

    const response = await fetch(url, {
      method: req.method,
      headers: req.headers,
    });

    const text = await response.text();

    res.status(response.status);
    res.send(text);
  } catch (err) {
    res.status(500).send("ERROR: " + err.message);
  }
}
