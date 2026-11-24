# Decision Ledger

Closed proposals, newest first. Append-only: never edit or delete a row — add a correction row that references it.

Open proposals are not listed here. Find them with:

```bash
grep -l "^\*\*Status:\*\* OPEN" SharedMemory/whiteboard/P-*.md
```

| ID | Date | Title | Decision | Decided by | Notes |
|---|---|---|---|---|---|
| D-0003 | 2026-11-24 | P-0002 — Phase 3 deterministic TypeScript generator | APPROVED WITH CONDITIONS | Shadi (user) | User selected “Approve with conditions”; six conditions recorded in the Decision section. |
| D-0002 | 2026-11-24 | P-0001 — Data hygiene and template sensitivity notes | APPROVED | Shadi (user) | User selected “Approve P-0001 only”; P-0002 remains OPEN. |
| D-0001 | 2026-11-24 | Create `SharedMemory/whiteboard` and the approval gate | APPROVED | Shadi (user) | Requested at project setup: agents must brief, request, or debate here until the user and the main agent accept. |
