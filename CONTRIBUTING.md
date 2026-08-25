# Contributing to Gallardo BioTools / Guía de contribución

Thank you for your interest in contributing to Gallardo BioTools educational tools.  
Gracias por tu interés en contribuir a las herramientas educativas de Gallardo BioTools.

---

## 📋 Table of Contents / Índice

1. [Types of contributions](#types-of-contributions)
2. [Before you start](#before-you-start)
3. [File & naming conventions](#file--naming-conventions)
4. [Tool structure guidelines](#tool-structure-guidelines)
5. [Submitting your contribution](#submitting-your-contribution)
6. [Content standards](#content-standards)
7. [Contact](#contact)

---

## Types of contributions

We accept the following types of contributions:

- **New interactive tools** — browser-based HTML/CSS/JS educational tools
- **Translations** — adding an English or Spanish version of an existing tool
- **Bug fixes** — correcting errors in existing tools (content or code)
- **Content updates** — updating scientific information to reflect current evidence
- **Accessibility improvements** — making tools more accessible (WCAG 2.1 AA)
- **Documentation** — improving README, tool descriptions, or usage guides

---

## Before you start

1. **Check existing tools** to avoid duplicating content already covered.
2. **Open an Issue** on GitHub describing your proposed tool or fix before starting work. This lets us give feedback early and avoid wasted effort.
3. **Scientific accuracy is required.** All biological and medical content must be accurate and consistent with current evidence. Include references where appropriate.
4. For significant new tools, **contact the PI directly** (hugo.gallardobl@uanl.edu.mx) to discuss scope and alignment with the lab's educational goals.

---

## File & naming conventions

### Folder placement
Place your tool in the appropriate existing folder, or propose a new one:

| Content type | Folder |
|---|---|
| Cell biology tools | `citopolis/` |
| Molecular biology | `biomol/` |
| Lab simulations | `biolab/` |
| Nanomedicine | `nanomision/` |
| Standalone tools | `tools/` |
| Images & icons | `assets/img/` or `assets/icons/` |

### File naming
- Use **lowercase** and **hyphens** (no underscores, no spaces): `my-tool.html`
- Bilingual tools: use `tool-name.html` (ES) and `tool-name_en.html` (EN)
- No version numbers in file names (`_v2`, `_final`, etc.)

### Commit messages
Write clear, descriptive commit messages in English or Spanish:
```
Add: biomol/sintesis-proteica.html — protein synthesis interactive
Fix: citopolis/p53.html — corrected pathway diagram labels
Update: nanomision/index.html — updated drug delivery section
```

---

## Tool structure guidelines

Each tool should be a **single self-contained HTML file** unless assets are shared across multiple tools. Follow these principles:

### Required elements
- `<title>` — descriptive, includes topic and "Gallardo BioTools"
- `<meta name="description">` — one-sentence summary
- `<meta name="author" content="Hugo Leonid Gallardo-Blanco">` (or contributing author)
- A visible **back/home link** to `../index.html` (the hub)
- A **level indicator** visible to the user (e.g., "Undergraduate level")

### Visual consistency
- Use the shared CSS variables where possible:
  ```css
  --ink: #0b2545;
  --accent: #2a6f97;
  --bg: #f5f7fa;
  --card: #ffffff;
  --muted: #556070;
  ```
- Font: Arial, Helvetica, sans-serif
- Rounded cards (`border-radius: 12px`) and subtle shadows

### Accessibility
- All interactive elements must be keyboard-navigable
- Images must have descriptive `alt` text
- Color alone must not be the only way to convey information
- Minimum contrast ratio: 4.5:1 for normal text

### Performance
- Prefer vanilla JavaScript — no external frameworks required
- External libraries (if needed) must be loaded from a CDN with a fallback
- Images should be optimized (< 200 KB when possible)

---

## Submitting your contribution

1. **Fork** the repository
2. **Create a branch** with a descriptive name:
   ```bash
   git checkout -b add/biomol-sintesis-proteica
   ```
3. **Make your changes** following the conventions above
4. **Test locally** — open the HTML file in Chrome, Firefox, and Safari
5. **Submit a Pull Request** with:
   - A clear title describing what the tool does
   - The target educational level(s)
   - Whether it is available in EN, ES, or both
   - A brief description of the content covered
   - Screenshots or a screen recording (optional but encouraged)

---

## Content standards

All educational content must meet these standards:

- **Scientific accuracy** — content must reflect current scientific consensus
- **Appropriate level** — complexity and language suited to the stated target level
- **No plagiarism** — original content only; properly cite any adapted material
- **Bilingual preferred** — tools in both EN and ES are strongly encouraged
- **No commercial content** — tools must be free of advertising or commercial promotion

For tools covering cancer mechanisms, nanomedicine, or clinical content, the PI will review scientific accuracy before merging.

---

## Contact

**Dr. Hugo Leonid Gallardo-Blanco**  
hugo.gallardobl@uanl.edu.mx  
[Web Biosketch](https://gallardo-lab.github.io/) · [ORCID](https://orcid.org/0000-0002-7816-4967)

For questions about contributing, open a GitHub Issue at github.com/gallardo-lab/gallardo-biotools or send an email with subject line: `Gallardo BioTools — Contribution inquiry`.
