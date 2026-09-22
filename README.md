# 🎯 AI Interview Mocker

An AI-powered mock interview platform built with **Next.js 14**, **Google Gemini AI**, **Clerk Auth**, and **Neon PostgreSQL (Drizzle ORM)**. Practice tailored technical and behavioral job interviews with real-time speech-to-text answer recording, webcam feedback, and detailed AI evaluations.

---

## ✨ Features

- **🤖 AI-Generated Interview Questions**: Customized questions based on target job role, job description, and years of experience powered by Google Gemini.
- **🎙️ Real-time Speech-to-Text**: Answer questions naturally using your microphone via browser speech recognition.
- **📹 Webcam Integration**: Simulate real interview conditions with video preview (video is processed locally and never recorded or stored).
- **📊 Instant AI Feedback & Ratings**: Detailed breakdown comparing candidate responses with ideal answers, complete with ratings and tips for improvement.
- **📁 Interview History & Dashboard**: Track previous interview sessions and revisit past feedback.
- **🔐 Secure Authentication**: Integrated with Clerk for seamless Google and email-based authentication.
- **⚡ Modern Tech Stack**: Built with Next.js App Router, Tailwind CSS, Lucide icons, and Radix UI components.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Frontend**: [React 18](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Sonner](https://sonner.emilkowal.ski/)
- **AI Engine**: [Google Gemini AI](https://aistudio.google.com/) (`@google/genai`, `gemini-2.5-flash`)
- **Database & ORM**: [Neon Serverless PostgreSQL](https://neon.tech/) & [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Audio & Video**: `react-hook-speech-to-text`, `react-webcam`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/Dev-coder21/InterviewPrep.git
cd InterviewPrep
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Fill in your API credentials:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Neon / PostgreSQL Database Connection URL
NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://user:password@endpoint.neon.tech/neondb?sslmode=require

# Google Gemini API Key
GEMINI_API_KEY=AIzaSy...

# Interview Configuration
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
NEXT_PUBLIC_INFORMATION="Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview. It has 5 questions which you can answer and at the end you will receive feedback and a report. Note: We do not record your video; webcam access can be disabled at any time."
NEXT_PUBLIC_QUESTION_NOTE="Click on Record Answer when you are ready to answer the question. At the end of the interview you will receive feedback and suggested improvements."
```

### 4. Push Database Schema

Sync the Drizzle schema to your Neon PostgreSQL database:

```bash
npm run db:push
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` |
| `npm run build` | Builds the production bundle |
| `npm run start` | Starts the Next.js production server |
| `npm run lint` | Runs Next.js ESLint checks |
| `npm run db:push` | Pushes Drizzle schema changes directly to the Neon PostgreSQL DB |
| `npm run db:studio` | Opens Drizzle Studio to explore and manage database records |

---

## 📁 Project Structure

```
├── app/
│   ├── (auth)/             # Clerk sign-in and sign-up pages
│   ├── dashboard/          # Protected interview dashboard & pages
│   │   ├── _components/    # Dashboard widgets & interview modals
│   │   ├── interview/      # Interview preparation, live session & feedback
│   │   └── upgrade/        # Subscription / pricing plans
│   ├── layout.js           # Root layout & Clerk provider
│   └── page.js             # Landing page
├── components/ui/          # Reusable UI components (buttons, dialogs, etc.)
├── utils/
│   ├── db.js               # Drizzle ORM client initialization
│   ├── schema.js           # Database tables schema (MockInterview, UserAnswer)
│   └── GeminiAIModal.js    # Gemini API prompt integration
├── drizzle.config.js       # Drizzle Kit configuration
└── public/                 # Static assets, SVG icons, and logos
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Dev-coder21/InterviewPrep/issues).

---

## 📄 License

This project is licensed under the MIT License.
