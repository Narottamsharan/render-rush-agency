const fs = require('fs');

const a = fs.readFileSync('scripts/aditya_bundle.js', 'utf8');

// Search for work / experience / clients / collaboration in Aditya
console.log('--- ADITYA WORK & COLLABORATION SEARCH ---');

const terms = ['experience', 'client', 'brand', 'collab', 'review', 'feedback', 'project'];
terms.forEach(t => {
  let idx = 0;
  let count = 0;
  while ((idx = a.toLowerCase().indexOf(t, idx)) !== -1 && count < 3) {
    console.log(`[Term: ${t}] -> `, a.substring(Math.max(0, idx - 40), Math.min(a.length, idx + 160)));
    idx += t.length + 50;
    count++;
  }
});

// Check if there are named creators or testimonials in Aditya's sections
const secIdx = a.indexOf('testimonials');
if (secIdx !== -1) {
  console.log('\n--- ADITYA TESTIMONIAL SECTION ---');
  console.log(a.substring(secIdx - 50, secIdx + 600));
} else {
  console.log('\nAditya has no testimonials section in DOM.');
}
