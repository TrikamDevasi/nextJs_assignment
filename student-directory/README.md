# Student Directory — Next.js App Router

A beginner-friendly Student Directory web application built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

Browse students, filter by department, view detailed profiles, and explore academic departments — all powered by local dummy data.

---

## Features

- Student listing with search and department filtering
- Dynamic student profile pages (`/students/[id]`)
- Department listing with nested specialization routes (`/departments/computer-science/web-development`)
- Breadcrumb navigation on detail pages
- 404 Not Found fallback page
- Loading skeleton UI
- Fully responsive design
- No backend, database, or external API required

---

## Tech Stack

| Technology   | Purpose                  |
| ------------ | ------------------------ |
| Next.js 16   | React framework (App Router) |
| TypeScript   | Type safety              |
| Tailwind CSS 4 | Utility-first styling  |
| React 19     | UI library               |

---

## Folder Structure

```
student-directory/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (Header + Footer)
│   │   ├── page.tsx                    # Home page — Student listing
│   │   ├── loading.tsx                 # Loading skeleton
│   │   ├── not-found.tsx               # 404 fallback page
│   │   ├── globals.css                 # Tailwind CSS import
│   │   ├── students/
│   │   │   └── [id]/
│   │   │       └── page.tsx            # Dynamic student profile
│   │   ├── departments/
│   │   │   ├── page.tsx                # Departments listing
│   │   │   └── computer-science/
│   │   │       └── web-development/
│   │   │           └── page.tsx        # Nested specialization page
│   │   └── about/
│   │       └── page.tsx                # About page
│   ├── components/
│   │   ├── Header.tsx                  # Navigation header
│   │   ├── Footer.tsx                  # Page footer
│   │   ├── StudentCard.tsx             # Student card component
│   │   ├── StudentGrid.tsx             # Grid layout for cards
│   │   ├── StudentDirectory.tsx        # Search + filter + grid wrapper
│   │   ├── SearchInput.tsx             # Search input field
│   │   ├── DepartmentFilter.tsx        # Department dropdown filter
│   │   └── EmptyState.tsx              # No results placeholder
│   ├── data/
│   │   └── students.ts                 # Local dummy student data
│   └── types/
│       └── student.ts                  # TypeScript interfaces
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Routing Strategy

| Route                                              | Type           | Description                    |
| -------------------------------------------------- | -------------- | ------------------------------ |
| `/`                                                | Static         | Student listing (home page)    |
| `/students/[id]`                                   | Dynamic        | Individual student profile     |
| `/departments`                                     | Static         | All departments listing        |
| `/departments/computer-science/web-development`    | Nested Static  | Specialization detail page     |
| `/about`                                           | Static         | About the directory            |

---

## Rendering Strategy

| Page              | Rendering | Reason                              |
| ----------------- | --------- | ----------------------------------- |
| Home              | SSR + Client | Search/filter require client state |
| Student Profile   | Server    | Static data, no interactivity       |
| Departments       | Server    | Static content                      |
| Specialization    | Server    | Static content with data filtering  |
| About             | Server    | Static content                      |
| Not Found         | Server    | Static fallback                     |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Concepts Demonstrated

- **App Router** — File-based routing with `page.tsx` convention
- **Dynamic Routes** — `[id]` parameter for student profiles
- **Nested Routes** — `/departments/computer-science/web-development`
- **Layouts** — Shared `layout.tsx` with Header and Footer
- **Server Components** — Default rendering for static pages
- **Client Components** — `"use client"` for search and filter interactivity
- **TypeScript Interfaces** — Typed data with `Student` and `Subject`
- **Loading UI** — Skeleton loading state with `loading.tsx`
- **Not Found** — Custom 404 page with `not-found.tsx`
- **Tailwind CSS** — Utility-first responsive styling

---

## Data Source

All student data is stored locally in `src/data/students.ts`. No backend, database, or external API is used. The application contains 8 sample students across 3 departments:

- **Computer Science** — 4 students
- **Design** — 2 students
- **Business** — 2 students

---

## Author

**Trikam Devasi**  
* Email: [trikam.devasi.cg@outlook.com](mailto:trikam.devasi.cg@outlook.com)

