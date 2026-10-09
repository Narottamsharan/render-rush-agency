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
    console.log('Fetching Narottam JS bundle...');
    const narottamJs = await get('https://narottamvisuals.in/assets/index-B5ylIt-8.js');
    fs.writeFileSync('scripts/narottam_bundle.js', narottamJs);
    console.log('Saved Narottam JS bundle (len:', narottamJs.length, ')');

    console.log('Fetching Aditya JS bundle...');
    const adityaJs = await get('https://adityakumarray.vercel.app/assets/index-CJCO2aDP.js');
    fs.writeFileSync('scripts/aditya_bundle.js', adityaJs);
    console.log('Saved Aditya JS bundle (len:', adityaJs.length, ')');

    // Analyze Narottam assets
    console.log('\n--- NAROTTAM ASSETS & TEXT ---');
    const nImgMatches = narottamJs.match(/["'](\/assets\/[^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi) || [];
    console.log('Narottam internal image assets:', Array.from(new Set(nImgMatches)));

    // Look for testimonial, nadavi loans, client, photo in Narottam
    const nNadavi = narottamJs.indexOf('Nadavi');
    if (nNadavi !== -1) {
      console.log('Narottam Nadavi context:', narottamJs.substring(Math.max(0, nNadavi - 200), Math.min(narottamJs.length, nNadavi + 400)));
    }

    // Look for Narottam profile image or avatar
    const nProfile = narottamJs.match(/(?:profile|avatar|photo|about|hero)[^"']*?\.(?:png|jpg|jpeg|webp|svg)/gi) || [];
    console.log('Narottam profile image candidates:', nProfile);

    // Analyze Aditya assets
    console.log('\n--- ADITYA ASSETS & TEXT ---');
    const aImgMatches = adityaJs.match(/["'](\/assets\/[^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi) || [];
    console.log('Aditya internal image assets:', Array.from(new Set(aImgMatches)));

    // Search for testimonials in Aditya
    const aTestimonialIdx = adityaJs.toLowerCase().indexOf('testimonial');
    if (aTestimonialIdx !== -1) {
      console.log('Aditya Testimonials context:', adityaJs.substring(Math.max(0, aTestimonialIdx - 100), Math.min(adityaJs.length, aTestimonialIdx + 500)));
    } else {
      console.log('No direct "testimonial" found in Aditya JS. Checking "client", "review", "feedback"...');
    }

    // Search for experience, companies, brands in Aditya
    const aCompanyMatches = adityaJs.match(/company:["']([^"']+)["']/g) || [];
    console.log('Aditya company matches:', aCompanyMatches);

    const aClientMatches = adityaJs.match(/client:["']([^"']+)["']/g) || [];
    console.log('Aditya client matches:', aClientMatches);

    // Analyze Prashant testimonials
    console.log('\n--- PRASHANT HTML TESTIMONIALS ---');
    const prashantHtml = fs.readFileSync('scripts/prashant.html', 'utf8');
    const pTestimonialIdx = prashantHtml.indexOf('Spreadly');
    console.log('Prashant Spreadly context:', prashantHtml.substring(Math.max(0, pTestimonialIdx - 200), Math.min(prashantHtml.length, pTestimonialIdx + 400)));

  } catch (e) {
    console.error(e);
  }
})();
