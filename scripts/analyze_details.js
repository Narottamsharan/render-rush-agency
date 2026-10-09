const fs = require('fs');

const n = fs.readFileSync('scripts/narottam_bundle.js', 'utf8');

// Print full ui array
const uiIdx = n.indexOf('ui=[{id:"test-1"');
if (uiIdx !== -1) {
  console.log('--- NAROTTAM TESTIMONIALS ---');
  console.log(n.substring(uiIdx, uiIdx + 1200));
}

// Search for any .jpg, .jpeg, .png, .webp
const imgMatches = n.match(/https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp|svg)/gi) || [];
console.log('\n--- NAROTTAM EXTERNAL IMAGES ---');
console.log(Array.from(new Set(imgMatches)));

// Search for about section image or alt text
const aboutIdx = n.indexOf('Narottam Sharan - Creative Video Editor');
if (aboutIdx !== -1) {
  console.log('\n--- NAROTTAM ABOUT IMAGE CONTEXT ---');
  console.log(n.substring(Math.max(0, aboutIdx - 300), Math.min(n.length, aboutIdx + 300)));
} else {
  const altIdx = n.indexOf('alt:');
  console.log('Looking for alt attributes...');
  const alts = n.match(/alt:["'][^"']+["']/g) || [];
  console.log('Alt attributes in Narottam:', Array.from(new Set(alts)));
}

// Analyze Prashant testimonials from prashant.html
const pHtml = fs.readFileSync('scripts/prashant.html', 'utf8');
const pReviewsIdx = pHtml.indexOf('Testimonial');
if (pReviewsIdx !== -1) {
  console.log('\n--- PRASHANT TESTIMONIALS ---');
  console.log(pHtml.substring(pReviewsIdx, pReviewsIdx + 2000));
}

// Also check Prashant's reviews or client feedback sections
const clientIdx = pHtml.indexOf('What Clients Say');
if (clientIdx !== -1) {
  console.log('\n--- PRASHANT WHAT CLIENTS SAY ---');
  console.log(pHtml.substring(clientIdx, clientIdx + 2000));
}
