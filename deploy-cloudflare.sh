#!/bin/bash
# EbiLink Cloudflare Deployment Script
# Developer: Odebunmi Tawwab
# Free-forever: Pages + D1 + R2

echo "Step 1: Ensure wrangler CLI is installed (npm install -g wrangler)"
echo "Step 2: Login: wrangler login"
echo "Step 3: Create D1 database (if not exists): wrangler d1 create ebilink-family-db"
echo "Step 4: Create R2 bucket (if not exists): wrangler r2 bucket create ebilink-family-uploads"
echo "Step 5: Deploy: wrangler deploy"
echo "Note: Update wrangler.toml with actual D1 database_id and R2 bucket names."
