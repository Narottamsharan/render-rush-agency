const https = require('https');
const fs = require('fs');
const path = require('path');

const teamDir = path.join(__dirname, '..', 'public', 'team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${dest}`);
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  try {
    // 1. Narottam Sharan
    await downloadFile(
      'https://i.ibb.co/KcrLNsSd/ae07a33e-d64d-4f1c-8aa0-d859278450e9.png',
      path.join(teamDir, 'narottam-sharan.png')
    );

    // 2. Aditya Kumar Ray
    await downloadFile(
      'https://adityakumarray.vercel.app/assets/aditya-portfolio-portrait-3H91jfPO.jpeg',
      path.join(teamDir, 'aditya-kumar-ray.jpg')
    );

    // 3. Prashant Singh
    await downloadFile(
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-22%20163742-Fnc5hQZAZq9FqV3k3hg04zFift7bP5.png',
      path.join(teamDir, 'prashant-singh.png')
    );

    console.log('All team photos successfully downloaded!');
  } catch (err) {
    console.error('Error downloading team photos:', err);
  }
})();
