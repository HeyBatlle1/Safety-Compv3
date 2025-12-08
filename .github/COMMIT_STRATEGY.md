# Commit Strategy for Safety Companion V3

## 📋 Overview

This document outlines the commit strategy for Safety Companion V3 during active development and production maintenance.

## 🌿 Branch Strategy

### Main Branches
```
main (production-ready)
  └── develop (active development)
       ├── feature/jha-form-wizard
       ├── feature/real-time-updates
       ├── feature/user-authentication
       └── fix/critical-bug-name
```

### Branch Types

| Branch Type | Naming | Purpose | Merge To |
|------------|---------|---------|----------|
| `main` | `main` | Production-ready code only | - |
| `develop` | `develop` | Active development integration | `main` |
| `feature/*` | `feature/description` | New features | `develop` |
| `fix/*` | `fix/description` | Bug fixes | `develop` or `main` |
| `hotfix/*` | `hotfix/description` | Critical production fixes | `main` & `develop` |
| `refactor/*` | `refactor/description` | Code refactoring | `develop` |
| `docs/*` | `docs/description` | Documentation only | `develop` |

### Branch Protection Rules

**`main` branch:**
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ❌ Allow force pushes (never)

**`develop` branch:**
- ✅ Require pull request reviews (optional for solo dev)
- ⚠️ Allow direct commits during active development
- ❌ Allow force pushes (avoid)

## 📝 Commit Message Format

### Convention: Conventional Commits

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

### Commit Types

| Type | Usage | Example |
|------|-------|---------|
| `feat` | New feature | `feat(frontend): Add JHA form wizard with multi-step validation` |
| `fix` | Bug fix | `fix(backend): Correct CORS headers for localhost:3000` |
| `refactor` | Code refactoring | `refactor(agents): Optimize Swiss Cheese prompt for clarity` |
| `docs` | Documentation | `docs(readme): Update API integration instructions` |
| `style` | Code style/formatting | `style(frontend): Fix indentation in api-client.ts` |
| `test` | Test additions | `test(backend): Add unit tests for risk assessor` |
| `chore` | Build/tooling changes | `chore(deps): Update Next.js to 16.0.8` |
| `perf` | Performance improvement | `perf(backend): Cache agent configurations` |
| `ci` | CI/CD changes | `ci(railway): Add deployment pipeline` |
| `build` | Build system changes | `build(docker): Update Dockerfile for production` |

### Scopes

Common scopes for this project:

**Backend:**
- `backend` - General backend changes
- `api` - API endpoint changes
- `agents` - AI agent changes
- `database` - Database schema/models
- `config` - Configuration changes

**Frontend:**
- `frontend` - General frontend changes
- `ui` - UI component changes
- `pages` - Page-level changes
- `api-client` - API client changes
- `hooks` - React hooks

**Cross-cutting:**
- `deps` - Dependency updates
- `docs` - Documentation
- `tests` - Testing

### Examples

#### Good Commit Messages ✅

```bash
feat(frontend): Add JHA form wizard with multi-step validation

- Implemented 5-step wizard for safety assessment data entry
- Added field validation with shadcn/ui form components
- Integrated weather API for real-time conditions
- Connected to backend /api/v1/jha/analyze endpoint

Closes #42
```

```bash
fix(backend): Correct agent temperature settings for risk assessment

Agent 2 (Risk Assessor) was using temp=0.3, causing overly conservative
risk scores. Updated to temp=0.7 per V2 golden prompt specifications.

Tested with 10 sample JHAs - risk scores now align with historical data.
```

```bash
refactor(agents): Extract common prompt logic into base class

- Created BaseAgentProfile with shared prompt formatting
- Reduced code duplication across 4 agent profiles
- No functional changes - purely structural

Performance: -15% in codebase size
```

#### Bad Commit Messages ❌

```bash
# Too vague
fix: bug fixes

# No scope
Added new feature

# Not descriptive
update files

# No context
WIP
```

## 🔄 Commit Frequency

### During Development

**Commit often, commit early:**
- ✅ After each completed component
- ✅ Before major refactors (safety checkpoint)
- ✅ After successful integration tests
- ✅ Before switching tasks/contexts
- ✅ End of day (if work is stable)

**When to commit:**
```
✅ Feature works (even if incomplete)
✅ Tests pass (if tests exist)
✅ No obvious bugs introduced
✅ Code compiles/runs
```

**When NOT to commit:**
```
❌ Code doesn't run
❌ Tests are failing (unless documenting a bug)
❌ Temporary debugging code left in
❌ Secrets/API keys exposed
❌ Work-in-progress experiments
```

### Commit Size Guidelines

| Size | Description | Lines Changed | Example |
|------|-------------|---------------|---------|
| **Tiny** | Typo fix, comment update | 1-10 | Fix typo in README |
| **Small** | Single bug fix | 10-50 | Fix CORS header issue |
| **Medium** | Single feature/component | 50-200 | Add JHA form component |
| **Large** | Multiple related components | 200-500 | Complete form wizard |
| **Huge** | Major feature/migration | 500+ | V2→V3 migration (rare) |

**Ideal:** Keep commits **small to medium** for easier review and revert.

## 🚀 Development Workflow

### Starting a New Feature

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/jha-form-wizard

# Work on feature (commit frequently)
git add .
git commit -m "feat(frontend): Add JHA form basic structure"

# Continue working...
git commit -m "feat(frontend): Add validation to JHA form fields"
git commit -m "feat(frontend): Integrate JHA form with backend API"

# When feature is complete
git push origin feature/jha-form-wizard

# Create pull request on GitHub
# After approval, merge to develop
```

### Fixing a Bug

```bash
# For non-critical bugs
git checkout develop
git checkout -b fix/cors-headers

# Make fix
git add .
git commit -m "fix(backend): Add localhost:3000 to CORS origins"

# Push and create PR
git push origin fix/cors-headers
```

```bash
# For CRITICAL production bugs
git checkout main
git checkout -b hotfix/security-vulnerability

# Make fix
git add .
git commit -m "fix(security): Patch SQL injection vulnerability in auth

CRITICAL: This fixes CVE-XXXX-XXXX
Security advisory: [link]
"

# Push directly to main (after testing!)
git push origin main

# Also merge to develop
git checkout develop
git merge hotfix/security-vulnerability
```

## 🏷️ Tagging and Releases

### Version Format

Follow **Semantic Versioning** (SemVer):
```
v<MAJOR>.<MINOR>.<PATCH>

Example: v3.1.2
```

- **MAJOR**: Breaking changes (v3.0.0 → v4.0.0)
- **MINOR**: New features (v3.1.0 → v3.2.0)
- **PATCH**: Bug fixes (v3.1.2 → v3.1.3)

### Creating a Release

```bash
# After merging to main
git checkout main
git pull origin main

# Tag the release
git tag -a v3.1.0 -m "Release v3.1.0 - JHA Form Wizard

Features:
- Multi-step JHA form wizard
- Real-time weather integration
- Improved risk assessment UI

Fixes:
- CORS configuration for frontend
- Agent temperature settings

Breaking Changes:
- None
"

# Push tag
git push origin v3.1.0

# Create GitHub release from tag with changelog
```

## 🧹 Best Practices

### Do's ✅

1. **Write descriptive commit messages** - Future you will thank you
2. **Commit working code** - Don't break `develop` or `main`
3. **Test before committing** - Run the app, check basic functionality
4. **Use conventional commit format** - Enables automated changelog generation
5. **Reference issues** - Add `Closes #123` to link commits to issues
6. **Keep commits atomic** - One logical change per commit
7. **Commit `.env.example`** - Never commit `.env`
8. **Review your diff** - Use `git diff --staged` before committing

### Don'ts ❌

1. **Don't commit secrets** - Check `.gitignore` includes `.env`
2. **Don't force push to `main`** - Ever. Seriously.
3. **Don't commit commented code** - Delete it, git remembers
4. **Don't use generic messages** - "update", "fix", "changes" are useless
5. **Don't commit `node_modules/` or `venv/`** - Check `.gitignore`
6. **Don't commit without testing** - At least run the app once
7. **Don't batch unrelated changes** - Split into separate commits
8. **Don't commit debugging code** - Remove `console.log`, `print()` statements

## 🔍 Pre-Commit Checklist

Before every commit, verify:

```bash
# 1. Check what's being committed
git status
git diff --staged

# 2. Verify no sensitive files
git status | grep -E "(\.env$|venv/|node_modules/|\.db$)" && echo "⚠️ STOP"

# 3. Run the app (quick sanity check)
# Backend: curl http://localhost:8000/health
# Frontend: curl http://localhost:3000

# 4. Write good commit message
git commit -m "type(scope): clear description"

# 5. Push when ready
git push origin <branch-name>
```

## 📊 Monitoring Commit Quality

### Metrics to Track

- **Commit frequency** - Aim for 3-5 commits per day during active development
- **Commit size** - Keep under 200 lines changed per commit (average)
- **Revert rate** - If you're reverting >10% of commits, commit less frequently
- **CI/CD pass rate** - Should be >90% on first try

### Review Your Commits

```bash
# View recent commits
git log --oneline -10

# View commit stats
git log --stat -5

# Find large commits
git log --all --pretty=format:"%h %s" --numstat | \
  awk '{plus+=$1; minus+=$2} END {print plus, minus}'
```

## 🎯 Goals

1. **Clear history** - Anyone should understand changes from commit messages
2. **Easy rollback** - Atomic commits allow surgical reverts
3. **Fast code review** - Small commits = faster PR reviews
4. **Automated changelog** - Conventional commits enable auto-generation
5. **Team collaboration** - Even solo projects benefit from good practices

---

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)

---

*Last Updated: 2025-12-08*
*Project: Safety Companion V3*
*Repository: https://github.com/HeyBatlle1/Safety-Compv3*
