# Diagonal Enterprises Project Startup Script
Write-Host "🚀 Starting Diagonal Enterprises Project..." -ForegroundColor Green
Write-Host ""

# Set the project root directory
$projectRoot = "c:\Users\Anup kc\OneDrive\Desktop\project diagonal\diagonal-enterprises"

# Start Backend Server
Write-Host "[1/3] Starting Backend Server..." -ForegroundColor Yellow
Set-Location "$projectRoot\backend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

# Wait for backend to initialize
Write-Host "[2/3] Waiting for backend to initialize..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Start Frontend Server
Write-Host "[3/3] Starting Frontend Server..." -ForegroundColor Yellow
Set-Location "$projectRoot\frontend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Both servers are starting up..." -ForegroundColor Green
Write-Host "✅ Backend will be available at: http://localhost:5000" -ForegroundColor Cyan
Write-Host "✅ Frontend will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "The website will automatically open in your default browser once ready." -ForegroundColor Magenta
Write-Host "Press any key to exit this window..." -ForegroundColor Gray

# Return to project root
Set-Location $projectRoot
Read-Host
