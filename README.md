# JConcierge: Luxury Mobile Service Portal

JConcierge is a premium mobile application built with **Expo** and **React Native**. It provides an intuitive, high-end interface for managing elite concierge services across Aviation, Yachting, Gastronomy, and more.

## Key Features

- **Dynamic Service Catalog:** Interactive grid-based navigation to dedicated service detail pages.
- **Deep Linking & Routing:** Robust file-based routing using **Expo Router**, supporting dynamic segments like `service/[id]`.
- **Premium UI Components:** Custom-built components using **Lucide Icons** and **Reanimated** for a fluid, high-performance user experience.
- **Service Request Flow:** Integrated call-to-action buttons for requesting bespoke services globally.

## Tech Stack

- **Framework:** Expo (React Native)
- **Navigation:** Expo Router (File-based)
- **Styling:** React Native StyleSheet (Dark Mode / Minimalist)
- **Icons:** Lucide React Native
- **Language:** TypeScript

## Application Structure

- `app/(tabs)/index.tsx`: The main "Command Center" dashboard.
- `app/service/[id].tsx`: Dynamic service detail pages with bespoke content for each category.
- `app/messages.tsx`: Real-time concierge desk communication (Demo).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Launch the project:**
   ```bash
   npx expo start
   ```

---
*Developed by Nicholas Bilotto*
