---
section: Platform engineering
date: "2026-10-01"
title: "Writing a useful infrastructure change note"
description: "A sample article about documenting the context, validation, and recovery plan behind an infrastructure change."
author: Javier Carrillo
tags: [Terraform, Documentation]
demo: true
---

This demo shows the format of an engineering article. It describes a general approach, rather than a change made to a real system.

## Start with the reason

A small Terraform change can still leave a reviewer with important questions. Why is this needed? Which resources are affected? What would make the change unsafe to apply?

A short note alongside the code gives those questions a clear place to be answered. It also preserves context for someone reading the repository later.

## Keep the review focused

A useful change note covers four things:

- **Intent:** the problem the change addresses
- **Scope:** the resources and environments involved
- **Validation:** what was checked and what remains uncertain
- **Recovery:** how to respond if the result differs from expectations

For example, a project could use this plain-text template:

```text
Change:
Reason:
Affected resources:
Expected behavior:
Checks completed:
Open questions:
Recovery considerations:
```

## Record evidence, including uncertainty

Describe checks that actually happened. If a result is still unverified, say so explicitly.

The goal is a note that helps another engineer understand the decision, review its risks, and identify the next safe step.
