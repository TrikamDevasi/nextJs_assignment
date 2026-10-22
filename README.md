# Next.js Projects Portfolio

A curated collection of modern web applications built using the **Next.js App Router (v16)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

This repository contains two production-ready frontend projects demonstrating core Next.js routing patterns, server-side and static rendering strategies, interactive client-side state management, and modern component architecture.

---

## 📂 Repository Contents

| Project | Description | Primary Route Features | Tech Highlights |
| :--- | :--- | :--- | :--- |
| **[Student Directory](./student-directory)** | Academic directory system with search, department filters, and student profiles. | Dynamic routes (`[id]`), nested routes (`/departments/...`) | Client filters, search state, loading skeletons |
| **[Recipe Explorer](./recipe-explorer)** | Culinary catalog with recipe details, cooking timers, and catch-all routes. | Static Site Generation (`generateStaticParams`), catch-all routes (`[...slug]`), draft form (`/recipes/new`) | SSG pre-rendering, interactive checklists, dynamic ingredient inputs |

---

## 🚀 Projects Overview

### 1. Student Directory (`/student-directory`)
An intuitive student record explorer with deep nested routing and dynamic profiles.

* **Key Features**:
  * Real-time search across student names, academic majors, and interests.
  * Filter pills by department (Computer Science, Design, Business).
  * Dynamic student profile views (`/students/[id]`) with course breakdown and GPA stats.
  * Hierarchical department pages (`/departments` & `/departments/computer-science/web-development`).
  * Dedicated about page, loading skeleton, and custom 404 handler.
* **Documentation**: See [`student-directory/README.md`](./student-directory/README.md).

### 2. Recipe Explorer (`/recipe-explorer`)
A culinary discovery application built for speed and content discovery using Static Site Generation.

* **Key Features**:
  * Recipe catalogue with search, cuisine filters, prep time indicators, and difficulty badges.
  * Dynamic recipe pages (`/recipes/[id]`) pre-rendered statically with `generateStaticParams`.
  * Multi-level catch-all cuisine navigation (`/cuisines/[...slug]`).
  * Interactive step-by-step cooking checklists and ingredient measurement calculators.
  * Recipe draft submission interface (`/recipes/new`) with dynamic row additions.
* **Documentation**: See [`recipe-explorer/README.md`](./recipe-explorer/README.md).

---

## 🛠️ Tech Stack & Standards

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router architecture)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict mode enabled)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Package Manager**: `npm`

---

## ⚡ Getting Started

Both applications are self-contained Next.js projects with their own dependencies and configuration.

### Prerequisites
* **Node.js**: v18.18+ or v20+ recommended
* **npm**: v9+

### Running Student Directory
```bash
cd student-directory
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the directory.

### Running Recipe Explorer
To run Recipe Explorer concurrently or on its own:
```bash
cd recipe-explorer
npm install
npm run dev -- -p 3001
```
Open [http://localhost:3001](http://localhost:3001) to view Recipe Explorer.

---

## 🧪 Production Build & Verification

To verify production builds for both projects:

```bash
# Build Student Directory
cd student-directory
npm run build

# Build Recipe Explorer
cd ../recipe-explorer
npm run build
```

---

## 📐 Next.js Architecture Patterns Demonstrated

1. **App Router File Conventions**:
   * Layout hierarchy (`layout.tsx`)
   * Page routing (`page.tsx`)
   * Custom loading states (`loading.tsx`)
   * Custom not-found error handling (`not-found.tsx`)
2. **Hybrid Rendering Strategy**:
   * **Server Components**: Efficient static page delivery without sending extra client JavaScript.
   * **Client Components**: Scoped `"use client"` directives for interactive search, filters, and drafts.
   * **Static Site Generation (SSG)**: Fast static HTML delivery using `generateStaticParams`.
3. **Dynamic Routing**:
   * Single dynamic segments: `[id]`
   * Multi-segment catch-all routes: `[...slug]`
   * Deep nested route folders: `departments/computer-science/web-development`

---

## 👤 Author

**Trikam Devasi**  
* Email: [trikam.devasi.cg@outlook.com](mailto:trikam.devasi.cg@outlook.com)

---

## 📄 License
This project is licensed under the MIT License - see the individual project folders for details.