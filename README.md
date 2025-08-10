# SkillUp & Smile 🚀

**A web application designed to empower young people by providing free access to skill-building education and proactive mental wellness tools.**

[![Vercel Deploy](https://vercel.com/button)](https://skillup-and-smile-git-main-deadler-alts-projects.vercel.app/)

## 🎯 The Problem

In today's fast-paced world, young people face a dual challenge: a growing gap in access to practical, job-ready skills and a rising mental health crisis exacerbated by stress and social pressure. Resources to tackle these issues are often expensive, fragmented, or stigmatized.

## ✨ Our Solution

**SkillUp & Smile** is an all-in-one platform that provides a supportive environment for both personal and professional growth. We believe that learning and well-being are deeply connected. Our application is built on two core pillars:

* **🧠 SkillUp Module:** A curated, dynamically-loaded library of free, bite-sized courses on practical topics like programming, financial literacy, and communication.
* **😊 Smile Module:** A set of tools to support mental well-being, including a private mood journal and our unique **"Smart Suggestions"** feature. This engine analyzes a user's mood patterns and proactively offers personalized, supportive advice and resources directly on their dashboard, creating a caring and responsive experience.

We use gamification and a clean, encouraging UI to keep users engaged and motivated on their journey of self-improvement.

## 🌟 Key Features

* **Dynamic Course Library:** Content is fetched live from a Supabase backend, making the platform easily scalable.
* **Secure User Authentication:** Users can sign up, log in, and save personal data securely with email confirmation.
* **Personalized Wellness Support:** The app tracks mood entries and provides "smart" suggestions to logged-in users.
* **Global Session Management:** A responsive UI that reflects the user's authentication state across the entire application.
* **Modern, Performant, and Scalable:** Built with best-in-class tools for a great user experience.

## 🛠️ Tech Stack

* **Framework:** Next.js (React)
* **Backend & Database:** Supabase
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/skillup-and-smile.git](https://github.com/YOUR_USERNAME/skillup-and-smile.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd skillup-and-smile
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up your environment variables:**
    * Create a file named `.env.local` in the root of your project.
    * Add your Supabase credentials to this file:
        ```
        NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
        NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
        ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
6.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.
