---
description: How to deploy the Portfolio and Server to Render.com
---

# Deployment Guide for Render.com

Follow these steps to deploy your full-stack portfolio.

## 1. Deploy the Backend (Server)
The backend handles your contact form and emails.

1.  Log in to [Render.com](https://render.com).
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub repository: `https://github.com/Tilahun-Sitotaw/Portfolio-`.
4.  Configure the following settings:
    *   **Name**: `portfolio-backend`
    *   **Root Directory**: `server`
    *   **Environment**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
5.  Go to the **Environment** tab and add these variables:
    *   `PORT`: `10000` (Render's default)
    *   `EMAIL_USER`: `tilahunsitotaw87@gmail.com`
    *   `EMAIL_PASS`: `mntj deuw jahn fvgj` (Your App Password)
6.  Click **Deploy Web Service**.
7.  **Copy the URL** of your deployed backend (e.g., `https://portfolio-backend.onrender.com`).

## 2. Deploy the Frontend (Vite)
The frontend is your visual portfolio.

1.  Click **New +** and select **Static Site**.
2.  Connect the same GitHub repository: `https://github.com/Tilahun-Sitotaw/Portfolio-`.
3.  Configure the following settings:
    *   **Name**: `portfolio-frontend`
    *   **Root Directory**: `(leave blank)`
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `dist`
4.  Go to the **Environment** tab and add:
    *   `VITE_API_URL`: (Paste your Backend Web Service URL here)
5.  Click **Deploy Static Site**.

Your portfolio is now live! ✨
