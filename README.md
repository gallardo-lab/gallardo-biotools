# Gallardo BioTools — Educational Tools in Cancer Biology & Nanomedicine

> **Herramientas educativas interactivas en Biología del Cáncer y Nanomedicina**  
> Laboratory of Bioinformatics Applied to Cancer · UANL

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen)](https://gallardo-lab.github.io/gallardo-biotools/)
[![Lab Biosketch](https://img.shields.io/badge/PI-Dr.%20Hugo%20Gallardo--Blanco-navy)](https://gallardo-lab.github.io/)

---

## 🔬 About / Acerca de

**EN** — This repository hosts open, browser-based interactive tools developed by the Gallardo-Lab research group at the School of Medicine, Universidad Autónoma de Nuevo León (UANL). Tools are designed for multiple educational levels — from high school to graduate students and research collaborators — and cover molecular biology, cell biology, cancer mechanisms, and nanomedicine.

**ES** — Este repositorio aloja herramientas interactivas de acceso abierto desarrolladas por el grupo Gallardo-Lab en la Facultad de Medicina de la UANL. Están diseñadas para distintos niveles educativos — desde preparatoria hasta posgrado y colaboradores de investigación — y cubren biología molecular, biología celular, mecanismos del cáncer y nanomedicina.

**Live site / Sitio en vivo:** https://gallardo-lab.github.io/gallardo-biotools/

---

## 📁 Repository Structure / Estructura del repositorio

```
gallardo-biotools/
├── index.html                  ← Hub: index of all tools
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── manifest.json               ← PWA support
├── sw.js                       ← Service worker
├── sitemap.xml
│
├── assets/
│   ├── img/
│   │   └── hero_biolab.jpg
│   └── icons/
│       ├── icon-192.png
│       ├── icon-512.png
│       └── icon.svg
│
├── citopolis/                  ← Citopolis series (cell biology)
│   ├── index.html              ← citopolis_hub.html
│   ├── main.html               ← citopolis.html
│   ├── main_en.html            ← citopolis_en.html
│   ├── inmuno.html             ← citopolis_inmuno.html
│   ├── p53.html                ← citopolis_p53.html
│   └── parp.html               ← citopolis_parp.html
│
├── biomol/                     ← Molecular biology series
│   ├── estructura.html         ← biomol_estructura.html
│   ├── mutaciones.html         ← biomol_mutaciones.html
│   ├── replicacion.html        ← biomol_replicacion.html
│   ├── transcripcion.html      ← biomol_transcripcion.html
│   └── traduccion.html         ← biomol_traduccion.html
│
├── biolab/                     ← BioLab interactive
│   ├── index.html              ← biolab.html
│   └── index_en.html           ← biolab_en.html
│
├── nanomision/                 ← NanoMission (nanomedicine)
│   ├── index.html              ← nanomision.html
│   └── index_en.html           ← nanomision_en.html
│
└── tools/                      ← Standalone tools & games
    ├── dna-helix.html          ← DNA_Double_Helix_Interactive.html
    ├── competencia-grupal.html ← competencia_grupal.html
    ├── mapa-misiones.html      ← mapa_misiones.html
    └── oro-caballo-troya.html  ← oro_caballo_troya.html
```

> **Migration note / Nota de migración:** file names in parentheses are the original names from the previous repository. When moving files, update all internal relative links accordingly.

---

## 🧩 Tool Index / Índice de herramientas

### 🏙️ Citopolis Series — Cell Biology / Biología Celular
Interactive city-building metaphor for learning cell biology concepts.

| Tool | Level | EN | ES |
|------|-------|----|----|
| Citopolis Hub | All levels | ✅ | ✅ |
| Citopolis Main | Undergrad / Grad | ✅ | ✅ |
| Citopolis: Immunology | Undergrad / Grad | — | ✅ |
| Citopolis: p53 & Cancer | Grad | — | ✅ |
| Citopolis: PARP | Grad | — | ✅ |

### 🧬 BioMol Series — Molecular Biology / Biología Molecular
Step-by-step interactive visualizations of core molecular biology processes.

| Tool | Level | EN | ES |
|------|-------|----|----|
| Molecular Structure | High school / Undergrad | — | ✅ |
| Mutations | Undergrad | — | ✅ |
| DNA Replication | Undergrad | — | ✅ |
| Transcription | Undergrad | — | ✅ |
| Translation | Undergrad | — | ✅ |

### 🔬 BioLab — Lab Interactive
Gamified laboratory experience for biomedical sciences students.

| Tool | Level | EN | ES |
|------|-------|----|----|
| BioLab | Undergrad / Grad | ✅ | ✅ |

### 🚀 NanoMisión — Nanomedicine / Nanomedicina
Mission-based exploration of nanomedicine concepts and targeted delivery.

| Tool | Level | EN | ES |
|------|-------|----|----|
| NanoMisión | Undergrad / Grad | ✅ | ✅ |

### 🧰 Standalone Tools / Herramientas independientes

| Tool | Description | Level |
|------|-------------|-------|
| DNA Double Helix | 3D-style interactive DNA visualization | All levels |
| Group Competition | Competitive quiz platform for classroom use | All levels |
| Mission Map | Visual navigation map for educational modules | All levels |
| Gold & Trojan Horse | Drug delivery metaphor — Trojan horse concept | Undergrad / Grad |

---

## 🚀 Getting Started / Cómo empezar

All tools run directly in the browser — no installation required.

**Online:** visit https://gallardo-lab.github.io/gallardo-biotools/

**Local:**
```bash
git clone https://github.com/gallardo-lab/gallardo-biotools.git
cd gallardo-biotools
# Open index.html in any modern browser
```

---

## 📚 Educational Levels / Niveles educativos

| 🏫 High school / Preparatoria | 🎓 Undergraduate / Licenciatura | 🔬 Graduate / Posgrado | 👩‍🔬 Researchers |
|---|---|---|---|
| DNA Helix, BioMol: Structure, BioMol: Mutations | Full BioMol series, BioLab, Citopolis Main, NanoMisión | Citopolis: p53, PARP, Immunology | All tools + Group Competition |

---

## 👥 Principal Investigator / Investigador principal

**Dr. Hugo Leonid Gallardo-Blanco**  
Oncology Service & School of Medicine, UANL  
[![ORCID](https://img.shields.io/badge/ORCID-0000--0002--7816--4967-green)](https://orcid.org/0000-0002-7816-4967)
[![Biosketch](https://img.shields.io/badge/Web-Biosketch-navy)](https://gallardo-lab.github.io/)

---

## 🤝 Contributing / Contribuir

We welcome contributions — see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License / Licencia

MIT License — see [LICENSE](LICENSE) for details.  
Content may be freely used for non-commercial educational purposes with attribution.
