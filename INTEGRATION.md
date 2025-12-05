# Backend Integration Plan - FluxTime Ecosystem

## Overview
This document outlines the technical requirements to integrate the **FluxTime Frontend** (React/Vite) with the Node.js/TypeScript backend.

## 1. Environment & Stack
*   **Base URL:** `http://localhost:3000` (Defined in `.env` as `VITE_API_URL`)
*   **Auth Strategy:** JWT (Access Token in Headers, Refresh Token in Body/Cookie)
*   **Database:** PostgreSQL (Recommended)
*   **Queue System:** Redis + BullMQ (For scraper/video jobs)

## 2. Authentication Protocol
The frontend uses `services/api.ts` with Axios interceptors to handle token rotation automatically.

### Required Endpoints
*   `POST /api/auth/register`
    *   **Body:** `{ email, password, name }`
    *   **Response:** `{ user: User, accessToken: string, refreshToken: string }`
*   `POST /api/auth/login`
    *   **Body:** `{ email, password }`
    *   **Response:** `{ user: User, accessToken: string, refreshToken: string }`
*   `POST /api/auth/refresh`
    *   **Body:** `{ refreshToken: string }`
    *   **Response:** `{ accessToken: string }`
*   `GET /api/auth/me`
    *   **Headers:** `Authorization: Bearer <token>`
    *   **Response:** `{ user: User }`

## 3. Module Endpoints

### 🟢 FluxBoard (Dashboard)
*   `GET /api/dashboard/stats`: Returns Health Score, Active Automations count, Viral Trends count.
*   `GET /api/dashboard/activity`: Returns recent system logs.

### 🔵 FluxTrend (SINT)
*   `GET /api/sint/trends`: Returns top emerging topics (volume, rank, platform).
*   `GET /api/sint/niche/:category`: Returns specific niche trends.

### 🟣 FluxIntel (OSINT Tools)
*   `POST /api/osint/scrape`
    *   **Body:** `{ target: string, options: { posts: boolean, stories: boolean, ... } }`
    *   **Response:** Job ID (Async processing).
*   `GET /api/osint/job/:id`: Check scraper status.
*   `GET /api/osint/competitors`: List tracked competitors.

### 🔴 FluxProduct (Ecommerce)
*   `POST /api/product/clone`
    *   **Body:** `{ url: string }`
    *   **Response:** Async Job ID.
*   `GET /api/product/result/:jobId`
    *   **Response:**
        ```json
        {
          "title": "Product Title",
          "description": "AI Rewritten description...",
          "images": ["url1", "url2"],
          "price": { "original": 50, "suggested": 45 },
          "copywriting": { "hook": "...", "cta": "..." },
          "sint_analysis": { "viral_score": 98, "saturation": "low" }
        }
        ```

### 🩷 FluxVideoSpark (Reactor)
*   `POST /api/video/generate`
    *   **Body:** `{ script: string, style: string, format: "9:16" | "16:9" }`
    *   **Response:** Async Job ID.

### 🟢 FluxAuto (Automations)
*   `GET /api/automations`: List n8n workflows and statuses.
*   `POST /api/automations/trigger/:id`: Manually trigger a workflow.

## 4. Next Steps for Backend Dev
1.  Set up the **Express** server with **CORS** enabled for `localhost:5173`.
2.  Implement the **Auth Middleware** to verify JWTs.
3.  Create the **User Schema** in the database.
4.  Implement the `/api/auth/*` routes first to unlock the frontend.
