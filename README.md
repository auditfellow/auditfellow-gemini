# AuditFellow for Gemini CLI

Your internal audit team's methodology, loaded as a skill the model reads before it writes: findings, risks, controls, workpapers, GenAI audits, data strategy and AI usage documents, in your team's format.

## Install

```
gemini extensions install https://github.com/dlascano911/auditfellow-gemini
```

The install asks for your AuditFellow key (starts with `af_live_`). Keys live on the Organization page at https://auditfellow.app, seven days free. You can also skip it and give the key later: the first time you ask for an audit deliverable, the `auditfellow-setup` skill asks for it.

## What it does

- On session start, refreshes the `auditfellow` skill from your organization's pack, at most once a day. Day to day work makes no network calls.
- The key binds to this machine. Reset it from the Organization page if you move computers.
- Nothing you ask the model, and nothing it answers, is sent to AuditFellow.

## Commands

```
gemini extensions update auditfellow
gemini extensions uninstall auditfellow
npx -y auditfellow@latest status
```

License: the extension code is MIT; the methodology it downloads belongs to your organization and needs a valid key.

Support: info@auditfellow.app or info@auditfellow.com. Keys and billing live at https://auditfellow.app.
