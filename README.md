# Valerian's Portfolio

This is the code for my personal portfolio website. I built it from scratch to showcase my work and tell my story. It's a single-page app with smooth transitions, built with modern web tools. No fancy frameworks beyond what's necessary—just solid, working code.

## Project Overview

The site is a React app that tells my story through different sections. It starts with an intro on the home page, then dives into my background, skills, and what I'm working toward. Each page has its own vibe, with animations to make navigation feel natural.

## Architecture

- **Routing**: Uses React Router with HashRouter for client-side navigation. HashRouter keeps things simple for static hosting.
- **Layout**: A shared layout component wraps everything, handling the sidebar nav and a modal for extra info. It's responsive, with a hamburger menu on mobile.
- **Pages**: Each section is its own component in the `pages` folder. They're lazy-loaded via routes, keeping the bundle size down.
- **Animations**: Framer Motion handles page transitions and micro-interactions. I went with AnimatePresence for smooth exits and entries.

## Key Components

- **App.tsx**: The root component. Sets up the router and layout, with AnimatedRoutes to manage transitions based on location.
- **Layout.tsx**: The shell. Includes navigation links with icons from Lucide React, a hosting info modal (because I wanted to explain web basics), and responsive design.
- **Pages (e.g., Home.tsx, Skills.tsx)**: Individual pages with their own content. Home has an intro and call-to-actions; others like Skills list out my abilities with some flair.
- **Styling**: Tailwind CSS for utility-first styling. PostCSS processes it. Kept it clean and consistent across the board.

## Technologies Used

- **React & TypeScript**: For building components with type safety. TypeScript caught a few dumb mistakes early on.
- **Vite**: Fast dev server and build tool. Way better than what I used before.
- **Framer Motion**: For animations. Made the site feel alive without overdoing it.
- **Tailwind CSS**: Quick styling without writing custom CSS everywhere. Saved time, but I had to learn the classes.
- **Lucide React**: Icons that look good and are easy to use.

I chose these because they're reliable and don't add bloat. React for the interactivity, TypeScript to avoid runtime errors, Vite for speed.

## Challenges I Faced

Getting the animations right was tricky—had to tweak the variants a few times to avoid janky transitions. Routing with HashRouter was straightforward, but making sure the layout didn't break on mobile took some CSS wrestling. Also, balancing content: wanted it personal but not too wordy.

## What I Learned

Building this reinforced how to structure a React app properly. Component composition, state management (minimal here), and responsive design. Plus, deploying a static site—turns out GitHub Pages works fine with HashRouter.

## Future Plans

Might add a blog section or integrate some data viz for the skills page. If I get time, I'll optimize the images and maybe add dark mode. For now, it's solid.

If you're poking around the code, feel free to suggest improvements. I'm still figuring this out.
