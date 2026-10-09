const https = require('https');
const fs = require('fs');

async function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

(async () => {
  try {
    const narottamHtml = await get('https://narottamvisuals.in/');
    fs.writeFileSync('scripts/narottam.html', narottamHtml);
    console.log('--- NAROTTAM HTML (len:', narottamHtml.length, ') ---');
    const nImg = narottamHtml.match(/src=["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi) || [];
    console.log('Narottam images:', nImg);

    // Let's also fetch narottam JS bundles
    const nScripts = narottamHtml.match(/src=["'](\/assets\/[^"']+\.js)["']/gi) || [];
    console.log('Narottam scripts:', nScripts);

    const prashantHtml = await get('https://prashantkits.vercel.app/');
    fs.writeFileSync('scripts/prashant.html', prashantHtml);
    console.log('--- PRASHANT HTML (len:', prashantHtml.length, ') ---');
    const pImg = prashantHtml.match(/src=["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi) || [];
    console.log('Prashant images:', pImg);

    const adityaHtml = await get('https://adityakumarray.vercel.app/');
    fs.writeFileSync('scripts/aditya.html', adityaHtml);
    console.log('--- ADITYA HTML (len:', adityaHtml.length, ') ---');
    const aImg = adityaHtml.match(/src=["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi) || [];
    console.log('Aditya images:', aImg);
    const aScripts = adityaHtml.match(/src=["'](\/[^"']+\.js)["']/gi) || [];
    console.log('Aditya scripts:', aScripts);

  } catch(e) {
    console.error(e);
  }
})();
