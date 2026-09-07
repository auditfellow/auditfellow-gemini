# AuditFellow

For any internal audit deliverable or question (findings, observations, risks, controls, testing procedures, workpapers, meeting notes, audit memos, GenAI audits, data strategy or AI usage documents), use the `auditfellow` MCP tools BEFORE answering: call `auditfellow_start` first, then `auditfellow_task` for the task it names, and `auditfellow_knowledge` when a knowledge file applies. They carry this organization's methodology; the answer must follow it.

If the tools are not available, the server is not signed in yet: tell the person to run `/mcp auth auditfellow` and sign in with the email of their AuditFellow account (https://auditfellow.app, free trial, no card). Never ask for a key in the chat.

If a local `auditfellow` skill is installed (a terminal setup with a key), it is the same methodology; prefer the MCP tools when both exist, because they carry the team's latest rules.
