---
name: auditfellow-setup
description: Connects or installs the AuditFellow methodology on this machine. Use when an internal audit deliverable is requested and the auditfellow MCP tools are not available yet, or when the person wants to sign in, or to activate, update or remove a key for terminal use.
---

# AuditFellow setup

The usual way is to sign in: the extension ships the `auditfellow` MCP server. Tell the person to run `/mcp auth auditfellow`, sign in with the email of their AuditFellow account (https://auditfellow.app, free trial, no card) and press Connect. After that the `auditfellow_start`, `auditfellow_task` and `auditfellow_knowledge` tools are available and nothing else is needed.

The alternative below installs the methodology as a local skill with a key (starts with `af_live_`), for people who prefer the terminal. Keys live on the Organization page at https://auditfellow.app.

## Install with a key

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
