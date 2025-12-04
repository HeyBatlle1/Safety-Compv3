[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Safety Companion V3

> Enterprise-grade construction safety management platform powered by AI and real-time data analytics.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)

**Built by HayHunt Solutions LLC**

---

## 🎯 Mission

Transform construction safety management from checkbox compliance into intelligent risk prevention. Safety Companion V3 empowers Project Managers and Foremen to generate professional Job Hazard Analysis (JHA) reports in minutes, not hours—combining real-time weather data, OSHA compliance standards, and AI-powered risk assessment.

---

## ✨ Core Features

### 🌤️ **Intelligent Safety Dashboard**
- **Real-time weather integration** - Automatic site condition monitoring
- **Location-aware risk assessment** - Weather impacts on job-specific hazards
- **Compliance tracking** - Visual indicators for OSHA adherence
- **Activity analytics** - Weekly JHA submission trends and patterns

### 📋 **Professional JHA Generation**
- **Multi-step wizard interface** - Guided form completion (Job Info → Hazards → Controls → Review)
- **AI-powered analysis** - Google Gemini 2.0 Flash with structured OSHA-compliant outputs
- **Critical risk identification** - Automated detection of fall hazards, crane operations, material handling risks
- **Regulatory citations** - Inline OSHA CFR references (29 CFR 1926.501, etc.)
- **Actionable recommendations** - Specific, implementable safety improvements

### 📊 **Executive Reporting**
- **Professional PDF exports** - Client-ready safety documentation
- **Compliance scoring** - Quantified safety performance metrics
- **Historical analysis** - Track safety trends across projects and timeframes
- **Email distribution** - Share reports with stakeholders directly

### 🔐 **Enterprise Security**
- **Clerk authentication** - SSO-ready user management
- **Role-based access control** - Field workers, supervisors, project managers, admins
- **Multi-tenant architecture** - Company and project-level data isolation
- **Audit trails** - Complete activity logging for compliance

---

## 🏗️ Architecture

### **Frontend** - Next.js 15 (App Router)
```
app/
├── (auth)/                 # Authentication pages (Clerk)
├── (dashboard)/            # Protected application routes
│   ├── page.tsx           # Main dashboard (weather + stats)
│   ├── jha/               # JHA creation and viewing
│   │   ├── new/           # Multi-step JHA wizard
│   │   └── [id]/          # Individual JHA report view
│   └── history/           # Past JHA analyses
├── api/                   # Next.js API routes (proxy layer)
└── layout.tsx             # Root layout with providers
```

**Tech Stack:**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Strict mode for type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library (Radix UI primitives)
- **Tanstack Query** - Server state management and caching
- **React Hook Form + Zod** - Form validation and management
- **Clerk** - Authentication and user management

### **Backend** - FastAPI (Python)
```
backend/
├── app/
│   ├── main.py            # FastAPI application entry
│   ├── models/            # Pydantic data models
│   ├── routes/            # API endpoints
│   │   ├── weather.py     # Weather data integration
│   │   ├── jha.py         # JHA analysis endpoints
│   │   └── auth.py        # Clerk webhook handlers
│   ├── services/          # Business logic
│   │   ├── gemini.py      # Google Gemini AI integration
│   │   ├── weather.py     # Weather API service
│   │   └── osha.py        # OSHA regulation database
│   └── db/                # Database operations
│       ├── models.py      # SQLAlchemy models
│       └── crud.py        # Database CRUD operations
```

**Tech Stack:**
- **FastAPI** - High-performance async Python web framework
- **SQLAlchemy + Alembic** - ORM and database migrations
- **Neon PostgreSQL** - Serverless Postgres database
- **Google Gemini 2.0 Flash** - AI analysis engine
- **Pydantic** - Data validation and serialization
- **uvicorn** - ASGI server

### **Database Schema** - Neon PostgreSQL
```sql
users               # User accounts (synced from Clerk)
jha_submissions     # Submitted JHA forms
jha_analyses        # AI-generated analysis results
weather_cache       # Cached weather data
osha_regulations    # OSHA CFR reference database
audit_logs          # Activity tracking for compliance
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Python 3.11+
- PostgreSQL (or Neon account)
- Google Gemini API key
- Clerk account (free tier available)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/heybattle12/safety-companion-v3.git
cd safety-companion-v3
```

**2. Frontend setup**
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your keys
npm run dev
```

**3. Backend setup**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your database and API keys
uvicorn app.main:app --reload
```

**4. Database migration**
```bash
cd backend
alembic upgrade head
```

### Environment Variables

**Frontend** (`.env.local`):
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
```

**Backend** (`.env`):
```bash
DATABASE_URL=postgresql://user:password@host:5432/safetycompanion
GEMINI_API_KEY=your_google_gemini_api_key
WEATHER_API_KEY=your_weather_api_key
CLERK_WEBHOOK_SECRET=whsec_xxxxx
ENVIRONMENT=development
```

---

## 📱 Mobile-First Design

Safety Companion V3 is optimized for field use:

✅ **Large touch targets** (minimum 44px) - Usable with gloves  
✅ **High contrast** - Readable in direct sunlight  
✅ **Offline-ready forms** - Save drafts without connectivity  
✅ **Responsive breakpoints** - Adapts to phones, tablets, and desktop  
✅ **Progressive Web App** - Install on mobile home screens  

---

## 🎯 Target Users

### Primary: **Project Managers & Foremen**
- Six-figure salaries, limited time
- Legally responsible for site safety
- Need: 10 minutes/week compliance tool
- Pain point: Generic toolbox talks don't address site-specific risks

### Use Case:
1. Arrive on site → Check weather conditions
2. Fill JHA form (5 minutes) → Specific to today's work
3. AI generates analysis → OSHA-compliant, actionable
4. Export PDF → Share with crew, save for records
5. **Result:** Better safety outcomes, legal protection, compliance documentation

---

## 💼 Business Model

### **Free Tier** (Lead Generation)
- 3 JHA analyses per month
- Basic weather integration
- PDF exports

### **Professional** ($50/month)
- Unlimited JHAs
- Historical analysis
- Email reports
- Priority support

### **Enterprise** (Custom Pricing)
- White-label solution
- API access
- SSO integration
- Dedicated account management
- Custom OSHA regulation databases

---

## 🛠️ Development

### Commands
```bash
# Frontend
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint + TypeScript check
npm run test         # Run test suite

# Backend
uvicorn app.main:app --reload        # Start development server
alembic revision --autogenerate      # Create migration
alembic upgrade head                 # Run migrations
pytest                               # Run tests
```

### Code Quality
- **TypeScript strict mode** - No `any` types
- **ESLint + Prettier** - Consistent code formatting
- **Pre-commit hooks** - Automated linting and testing
- **100% type coverage** - Frontend and backend

---

## 📊 Roadmap

### ✅ **V3.0 - Current** (Q4 2024)
- [x] Next.js 15 frontend with shadcn/ui
- [x] FastAPI backend with Gemini 2.0
- [x] Weather integration
- [x] JHA wizard and analysis
- [x] Clerk authentication
- [x] Railway deployment

### 🚧 **V3.1 - Next** (Q1 2025)
- [ ] Vector database (Pinecone/Weaviate) for OSHA regulation search
- [ ] Historical pattern analysis (identify recurring risks)
- [ ] Mobile app (React Native)
- [ ] Offline mode with sync

### 🔮 **V3.2 - Future** (Q2 2025)
- [ ] Multi-language support (Spanish for construction crews)
- [ ] Voice input for JHA forms
- [ ] Insurance integration (automated premium calculations)
- [ ] Predictive analytics (forecast incident likelihood)

---

## 🤝 Contributing

Safety Companion V3 is open-source under the MIT License. We welcome contributions!

### Areas for Contribution:
- 🐛 Bug reports and fixes
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage expansion
- 🌍 Internationalization (i18n)

### Development Process:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright © 2025 HayHunt Solutions LLC

---

## 🙏 Acknowledgments

**Built in collaboration with:**
- Claude (Anthropic) - AI pair programming partner
- Desktop Commander - Development automation
- Construction safety professionals - Domain expertise
- Open-source community - Foundational libraries

**Powered by:**
- Google Gemini 2.0 Flash - AI analysis engine
- Neon - Serverless PostgreSQL
- Clerk - Authentication infrastructure
- Railway - Cloud deployment platform

---

## 📞 Support

**HayHunt Solutions LLC**  
🌐 Website: [safety-companion.com](https://safety-companion.com)  
📧 Email: support@hayhunt.solutions  
💬 Discord: [Join our community](https://discord.gg/safety-companion)

---

## 🏆 Recognition

> "Finally, a safety tool built by people who understand construction. The AI doesn't just check boxes—it actually identifies real risks." - *Project Manager, Commercial GC*

> "10 minutes to generate a JHA that used to take me 2 hours. And it's better than what I was writing manually." - *Safety Manager, Industrial Contractor*

---

**Built for mid-sized construction professionals seeking competitive advantage through intelligent safety management, AI-powered risk analysis, and OSHA compliance—without the enterprise software complexity or cost.**

---

<div align="center">

**⭐ Star this repo if Safety Companion helps keep your crews safe ⭐**

[Report Bug](https://github.com/heybattle12/safety-companion-v3/issues) · [Request Feature](https://github.com/heybattle12/safety-companion-v3/issues) · [Documentation](https://docs.safety-companion.com)

</div>
