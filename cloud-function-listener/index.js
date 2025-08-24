const functions = require('@google-cloud/functions-framework');
const { execSync } = require('child_process');

functions.http('webhook', (req, res) => {
  const payload = req.body;
  console.log('🔔 GitHub Webhook Received:', payload);

  // Example: Fetch and log the pushed file
  if (payload.head_commit && payload.repository) {
    const repo = payload.repository.full_name;
    const commit = payload.head_commit.id;
    console.log(`🔗 Repo: ${repo}, Commit: ${commit}`);

    // Optional: Trigger next action (Vertex AI / IPFS)
  }

  res.status(200).send('Webhook acknowledged');
});
