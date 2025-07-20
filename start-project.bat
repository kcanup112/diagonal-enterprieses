@echo off
echo Starting Diagonal Enterprises Project...
echo.

echo [1/3] Starting Backend Server...
cd /d "c:\Users\Anup kc\OneDrive\Desktop\project diagonal\diagonal-enterprises\backend"
start "Backend Server" cmd /k "npm run dev"

echo [2/3] Waiting for backend to initialize...
timeout /t 3 /nobreak >nul

echo [3/3] Starting Frontend Server...
cd /d "c:\Users\Anup kc\OneDrive\Desktop\project diagonal\diagonal-enterprises\frontend"
start "Frontend Server" cmd /k "npm start"

echo.
echo ✅ Both servers are starting up...
echo ✅ Backend will be available at: http://localhost:5000
echo ✅ Frontend will be available at: http://localhost:3000
echo.
echo Press any key to exit this window...
pause >nul
