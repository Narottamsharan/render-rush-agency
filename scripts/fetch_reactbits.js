const https = require('https');
const fs = require('fs');

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

(async () => {
  try {
    const darkVeilJs = await fetchRaw('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Backgrounds/DarkVeil/DarkVeil.jsx');
    fs.writeFileSync('scripts/DarkVeil.raw.jsx', darkVeilJs);
    console.log('Saved DarkVeil.raw.jsx (len:', darkVeilJs.length, ')');

    const darkVeilCss = await fetchRaw('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Backgrounds/DarkVeil/DarkVeil.css');
    fs.writeFileSync('scripts/DarkVeil.raw.css', darkVeilCss);
    console.log('Saved DarkVeil.raw.css (len:', darkVeilCss.length, ')');

    // Also check Silk and Aurora if needed
    const silkJs = await fetchRaw('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Backgrounds/Silk/Silk.jsx');
    fs.writeFileSync('scripts/Silk.raw.jsx', silkJs);
    console.log('Saved Silk.raw.jsx (len:', silkJs.length, ')');

    const auroraJs = await fetchRaw('https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Backgrounds/Aurora/Aurora.jsx');
    fs.writeFileSync('scripts/Aurora.raw.jsx', auroraJs);
    console.log('Saved Aurora.raw.jsx (len:', auroraJs.length, ')');

  } catch (e) {
    console.error(e);
  }
})();
