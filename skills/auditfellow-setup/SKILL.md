---
name: auditfellow-setup
description: Installs the AuditFellow methodology on this machine with the person's key. Use when an internal audit deliverable is requested and the "auditfellow" skill is not installed yet, or when the person wants to activate, update or remove their AuditFellow key.
---

# AuditFellow setup

The methodology is delivered as the `auditfellow` skill inside this extension. It is installed with the person's AuditFellow key (starts with `af_live_`). Keys live on the Organization page at https://auditfellow.app, seven days free.

## Install

1. Ask for the key if it was not given. Never guess it.
2. Run, replacing the key and keeping the quotes:

```
npx -y auditfellow@latest init --key af_live_XXXX --target claude --dir "<this extension's folder>/skills/auditfellow"
```

The extension folder is the directory that contains this skill's parent `skills` directory. The command checks the key, binds it to this machine, downloads the pack and writes `skills/auditfellow/SKILL.md` plus a `knowledge/` folder next to it.

3. Tell the person to start a new session (or run `/skills reload` if available) so the new skill is picked up, then answer their request with it.

## Update, status, remove

```
npx -y auditfellow@latest update --dir "<extension folder>/skills/auditfellow"
npx -y auditfellow@latest status
npx -y auditfellow@latest remove
```

The key is checked once a day; if it was reset or revoked the person sees why and what to do.
