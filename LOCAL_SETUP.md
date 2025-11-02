# Local Server Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your API keys:
     - `VITE_CLERK_PUBLISHABLE_KEY`: Get from Clerk dashboard
     - `VITE_GOOGLE_AI_API_KEY`: Get from Google AI Studio
     - `VITE_STRAPI_API_KEY`: Your Strapi API key
     - `VITE_API_BASE_URL`: Your Strapi backend URL

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Common Issues Fixed
- ✅ Added error handling for missing environment variables
- ✅ Added null checks for API responses
- ✅ Fixed navigation bounds checking
- ✅ Added proper error boundaries
- ✅ Improved form validation

## Notes
- The app will warn about missing environment variables but won't crash
- Make sure your Strapi backend is running if using API features
- Check browser console for any remaining issues