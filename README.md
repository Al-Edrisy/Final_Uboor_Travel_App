
# 🧭 Uboor App – Developer Setup Guide

Welcome to the Uboor App repository! This guide will walk you through setting up and running the full-stack Uboor app in a Turborepo workspace.

---

## ✅ Prerequisites

Ensure you have the following installed **before** starting:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) **v52** (*do not use v53*)
- [React Native](https://reactnative.dev/docs/environment-setup) (configured for development)
- [Turborepo](https://turbo.build/repo/docs)

---

## 📦 Project Structure

After cloning the repository, navigate into the workspace:
```bash
cd turbo-uboor-mvp/
```

The monorepo structure:
```
apps/
├── uboor_web        # Admin panel (Next.js)
├── uboor_mobile     # Mobile app (React Native + Expo)
├── doc              # Internal docs (ignore)
├── backend          # Node.js backend server
```

---

## ⚙️ Environment Variables

1. Create `.env` files in each app (`uboor_web`, `uboor_mobile`, `backend`).
2. Add required secrets (API keys, database URLs, etc.).

---

## 📥 Install Dependencies

Install all workspace dependencies from the root:
```bash
yarn
```

---

## 🚀 Running the Project

Start all services in parallel:
```bash
yarn dev
```

This will:
- Launch the **Next.js admin panel** (web)
- Start the **Expo dev server** (mobile)
- Spin up the **Node.js backend**

---

## 🔗 Access Points

- **Web Admin**: Open the local URL shown in the terminal.
- **Mobile App**: Scan the Expo QR code or use a simulator.
- **Backend API**: Runs on the configured port.

---

## 📝 Notes

- **Expo Version**: Use **v52 only** (v53 is incompatible).
- **Ignore `doc/`**: For internal use only.

---

**Let us know if you run into issues!**  
