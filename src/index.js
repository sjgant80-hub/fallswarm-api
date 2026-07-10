// fallswarm-api · Express HTTP wrapper around fallswarm-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'fallswarm', version: '1.0.0' }));

app.post('/openDB', async (req, res) => {
  try {
    const { openDB } = await import('@ai-native-solutions/fallswarm-sdk');
    const out = typeof openDB === 'function' ? await openDB(req.body) : { error: 'openDB not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/getOrCreateIdentity', async (req, res) => {
  try {
    const { getOrCreateIdentity } = await import('@ai-native-solutions/fallswarm-sdk');
    const out = typeof getOrCreateIdentity === 'function' ? await getOrCreateIdentity(req.body) : { error: 'getOrCreateIdentity not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/signMessage', async (req, res) => {
  try {
    const { signMessage } = await import('@ai-native-solutions/fallswarm-sdk');
    const out = typeof signMessage === 'function' ? await signMessage(req.body) : { error: 'signMessage not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/saveRecord', async (req, res) => {
  try {
    const { saveRecord } = await import('@ai-native-solutions/fallswarm-sdk');
    const out = typeof saveRecord === 'function' ? await saveRecord(req.body) : { error: 'saveRecord not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/listRecords', async (req, res) => {
  try {
    const { listRecords } = await import('@ai-native-solutions/fallswarm-sdk');
    const out = typeof listRecords === 'function' ? await listRecords(req.body) : { error: 'listRecords not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/deleteRecord', async (req, res) => {
  try {
    const { deleteRecord } = await import('@ai-native-solutions/fallswarm-sdk');
    const out = typeof deleteRecord === 'function' ? await deleteRecord(req.body) : { error: 'deleteRecord not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('fallswarm-api listening on :' + PORT));
