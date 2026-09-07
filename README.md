# AuditFellow for Gemini CLI

Your internal audit team's methodology, loaded before the model writes. Findings, risks, controls, testing procedures, workpapers, meeting notes and audit memos come back in your team's format, checked, with N/A wherever your organization never supplied a value.

## Install

```
gemini extensions install https://github.com/auditfellow/auditfellow-gemini
```

Then, inside Gemini CLI, sign in once:

```
/mcp auth auditfellow
```

A browser window opens; sign in with the email of your AuditFellow account (a code by email or Google) and press Connect. That is all: no key to paste. Accounts and the free trial live at https://auditfellow.app.

## What it does

- Connects Gemini CLI to the AuditFellow MCP server. Before writing an audit deliverable, the model loads your organization's methodology and the team rules your reviewers have set.
- Corrections become team rules: an admin or coordinator can tell the model to save a rule for the whole team.
- Your requests and the answers stay in your chat.

## Prefer a key in the terminal?

`npx -y auditfellow@latest init --key <your key> --target claude --dir "<extension folder>/skills/auditfellow"` installs the same methodology as a local skill. Keys are on the Organization page at https://auditfellow.app.

## Commands

```
gemini extensions update auditfellow
gemini extensions uninstall auditfellow
```

License: the extension code is MIT; the methodology it loads belongs to your organization and needs an AuditFellow account.

Support: info@auditfellow.app or info@auditfellow.com.
