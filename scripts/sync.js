#!/usr/bin/env node
// SessionStart hook for Gemini CLI. Installs or refreshes the methodology
// skill inside this extension from the AuditFellow pack, at most once a day.
// Prints JSON only (Gemini CLI requirement); never blocks the session.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const SKILL = path.join(ROOT, 'skills', 'auditfellow');
const STATE = path.join(os.homedir(), '.auditfellow', 'license.json');
const STAMP = path.join(ROOT, '.synced-at');
const KEY = (process.env.AUDITFELLOW_KEY || '').trim();

function out(context, message) {
  const o = { hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: context } };
  if (message) o.systemMessage = message;
  process.stdout.write(JSON.stringify(o) + '\n');
}
function run(args) { execFileSync('npx', ['-y', 'auditfellow@latest', ...args], { stdio: 'ignore', timeout: 50000 }); }

try {
  let state = null; try { state = JSON.parse(fs.readFileSync(STATE, 'utf8')); } catch {}
  const installed = fs.existsSync(path.join(SKILL, 'SKILL.md'));
  if (!state || !state.key) {
    if (KEY) {
      run(['init', '--key', KEY, '--target', 'claude', '--dir', SKILL]);
      fs.writeFileSync(STAMP, new Date().toISOString());
      out('AuditFellow: methodology installed (skill "auditfellow"). Use it for any internal audit deliverable or question.', 'AuditFellow: methodology installed.');
    } else {
      out('AuditFellow: no key on this machine yet. When the person asks for an audit deliverable, activate the "auditfellow-setup" skill, which asks for their key (af_live_...) and installs the methodology. Keys: https://auditfellow.app (seven days free).');
    }
    process.exit(0);
  }
  const fresh = installed && fs.existsSync(STAMP) && (Date.now() - fs.statSync(STAMP).mtimeMs) < 24 * 3600e3;
  if (!fresh) { run(['update', '--dir', SKILL]); fs.writeFileSync(STAMP, new Date().toISOString()); }
  out('AuditFellow: methodology loaded (skill "auditfellow"). Use it for any internal audit deliverable or question.');
} catch (e) {
  out('AuditFellow: could not refresh the methodology (' + (e.message || e) + '). The last good copy stays in use if there is one.');
}
