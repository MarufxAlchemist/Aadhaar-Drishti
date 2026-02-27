# Aadhaar Drishti
**Societal Signals from Enrolment and Update Data**

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![UIDAI Hackathon 2026](https://img.shields.io/badge/UIDAI-Hackathon%202026-orange.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

</div>

---

## 📌 About this Project

**Aadhaar Drishti** (दृष्टि — *vision* or *perspective*) is a governance-grade analytical dashboard designed to interpret aggregate Aadhaar enrolment and update data as societal and administrative signals.

Rather than presenting raw counts, the platform applies **normalization and comparative analysis** to highlight regions and time periods exhibiting unusual update behaviour relative to enrolment baselines. These patterns can support administrative review, infrastructure planning, and operational prioritization.

The project is developed as part of the **UIDAI Hackathon 2026** and is intentionally designed as a **decision-support instrument**, not a predictive or causal system

---

## 🎯 Objective

To demonstrate how aggregate Aadhaar administrative data can be transformed into **interpretable, reproducible, and policy-relevant insights**, while maintaining strict standards of:

- ✅ **Data privacy**
- ✅ **Methodological transparency**
- ✅ **Interpretive restraint**

---

## 📊 Core Analytical Concept

### Update Friction Index (UFI)

The primary analytical construct used in Aadhaar Drishti is the **Update Friction Index (UFI)**.

UFI normalizes Aadhaar update activity against enrolment volume to enable fair comparison across regions and time periods, helping surface areas where update activity deviates from expected administrative patterns.

> **Important:**  
> UFI is treated as a **signal, not a causal explanation**. All interpretations are contextual and non-predictive.

---

## 🧱 System Design

- ✅ **Frontend-only architecture**
- ✅ **Static, read-only datasets**
- ✅ **Deterministic analytical pipeline**
- ❌ **No backend, database, authentication, or write operations**

This design mirrors common government analytics practices, prioritizing **auditability, reproducibility, and reliability** over architectural complexity.

---

## 🗂️ Datasets Used

| Dataset | Description |
|---------|-------------|
| **Aadhaar Enrolment Monthly Data** | Monthly new registrations by state/district |
| **Aadhaar Demographic Update Monthly Data** | Monthly demographic update transactions |
| **Aadhaar Biometric Update Monthly Data** | Monthly biometric update transactions |

**Source:**  
Government of India Open Data Platform ([data.gov.in](https://data.gov.in)) / UIDAI-published aggregate statistics

> **Privacy Note:**  
> All datasets are **anonymized and aggregate** in nature. No personally identifiable information (PII) is processed or inferred.

---

## 🧪 Methodology (High-Level)

1. **Explicit data loading** from static sources.
2. **State- and month-level aggregation**.
3. **Normalization** for cross-region comparability.
4. **Identification** of temporal and regional deviations.
5. **Clear documentation** of assumptions and limitations.

A dedicated **Methodology & Transparency** section within the dashboard outlines interpretation boundaries to prevent over-generalization.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and dev server |
| **React** | UI framework |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Component library |
| **Recharts** | Data visualization |

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- **Node.js** (via [nvm](https://github.com/nvm-sh/nvm) recommended)
- **npm**

### Setup

```bash
# Clone the repository
git clone https://github.com/MarufxAlchemist/Aadhar-insights-engine.git

# Navigate to the project directory
cd Aadhar-insights-engine

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Live Demo:** [https://aadhar-insights-engine.vercel.app/](https://aadhar-insights-engine.vercel.app/)

For local development, the application will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
aadhaar-compass/
├── src/
│   ├── components/       # React components
│   │   ├── dashboard/    # KPI cards, charts, visualizations
│   │   ├── filters/      # Global filter controls
│   │   ├── layout/       # Header, sidebar, layout components
│   │   └── sections/     # Main dashboard sections
│   ├── data/             # Data service and CSV datasets
│   ├── utils/            # Utility functions
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── README.md             # This file
```

---

## 🎨 Features

### Decision Context
- Administrative framing banner explaining dashboard purpose
- Governance-grade language throughout

### KPI Interpretive Guidance
- Interpretive text below each metric
- Neutral, advisory language

### Observed Signals
- Pattern observations without causal claims
- Explicitly labeled as illustrative

### Methodology Transparency
- Interpretation boundaries clearly stated
- Data limitations documented
- Comparative context explained

---

## 📖 Documentation

- **Methodology Section:** In-dashboard accordion with detailed explanations
- **Data Service API:** See `src/data/README.md`
- **Interpretation Boundaries:** Documented in Methodology section

---

## 🤝 Contributing

This project was developed for the **UIDAI Hackathon 2026**. While it's primarily a demonstration project, feedback and suggestions are welcome.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Maruf Nadaf**

Developed for UIDAI Hackathon 2026

---

## 🙏 Acknowledgments

- **UIDAI** for providing open datasets
- **Government of India Open Data Platform** for data accessibility
- **shadcn/ui** for the excellent component library

---

<div align="center">

**Aadhaar Drishti** — *Vision through Data*

Built with ❤️ for governance-grade analytics

</div>
