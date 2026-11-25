# Decision Ledger

Closed proposals, newest first. Append-only: never edit or delete a row — add a correction row that references it.

Open proposals are not listed here. Find them with:

```bash
grep -l "^\*\*Status:\*\* OPEN" SharedMemory/whiteboard/P-*.md
```

| ID | Date | Title | Decision | Decided by | Notes |
|---|---|---|---|---|---|
| D-0006 | 2026-11-25 | P-0004 — Phase 2 task taxonomy and weights | APPROVED | Shadi (user) | User said “ok gemini replayed rea then let us go a head” after the six-point revision. Scope: P4.1 only. |
| D-0005 | 2026-11-25 | P3.4/P3.5 review and dataset lock | APPROVED / LOCKED | Shadi (user) | User said “go a head” after the P3.4 packet; dataset locked at SHA-256 `0ba9c2d26ed4ba4647945227ff6727b6579d12ac2d59ca0d3ef7a8f41c8e644b` via PR #11. |
| D-0004 | 2026-11-24 | P3.2 Batch A data population pilot | APPROVED | Shadi (user) | User said “all good do the merge and then proceed” after PRs #1/#5/#6 merged. |
| D-0003 | 2026-11-24 | P-0002 — Phase 3 deterministic TypeScript generator | APPROVED WITH CONDITIONS | Shadi (user) | User selected “Approve with conditions”; six conditions recorded in the Decision section. |
| D-0002 | 2026-11-24 | P-0001 — Data hygiene and template sensitivity notes | APPROVED | Shadi (user) | User selected “Approve P-0001 only”; P-0002 remains OPEN. |
| D-0001 | 2026-11-24 | Create `SharedMemory/whiteboard` and the approval gate | APPROVED | Shadi (user) | Requested at project setup: agents must brief, request, or debate here until the user and the main agent accept. |
