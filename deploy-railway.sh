#!/bin/bash
# EbiLink Railway Deployment Script
# Developer: Odebunmi Tawwab
# Free-forever stack: SQLite + Local Storage + PWA

echo "Step 1: Login to Railway (requires account)"
railway login

echo "Step 2: Link this directory to Railway project"
railway link

echo "Step 3: Set environment variables (run in Railway dashboard or CLI)"
echo "  railway variables set AUTH_SECRET <your-secret>"
echo "  railway variables set DATABASE_URL sqlite:file:./ebilink.db"
echo "  railway variables set STORAGE_PROVIDER local"
echo "  railway variables set STORAGE_PATH ./public/uploads"

echo "Step 4: Deploy"
railway up

echo "Step 5: Verify health check at root URL"
echo "Deployment complete. Multi-tenant families remain isolated via SQLite family_id."
