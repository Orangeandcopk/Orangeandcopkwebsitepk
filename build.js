// build.js — runs at Vercel build time to generate config.js from env vars
const fs = require('fs');

const supabaseUrl     = process.env.SUPABASE_URL      || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const launchDate      = process.env.LAUNCH_DATE       || '2025-09-01T00:00:00Z';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[build.js] WARNING: SUPABASE_URL or SUPABASE_ANON_KEY env var is missing!');
}

const content = `window.__APP_CONFIG = {
  supabaseUrl:     "${supabaseUrl}",
  supabaseAnonKey: "${supabaseAnonKey}",
  launchDate:      "${launchDate}"
};
`;

fs.writeFileSync('./config.js', content, 'utf8');
console.log('[build.js] config.js generated successfully.');
