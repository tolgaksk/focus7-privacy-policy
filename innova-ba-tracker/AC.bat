@echo off
chcp 65001 >nul
cd /d D:\UYGULAMALAR\innova-ba-tracker

if not exist "index.html" (
    echo HATA: D:\UYGULAMALAR\innova-ba-tracker bulunamadi.
    echo Once KUR.bat ile kurulum yapin.
    pause
    exit /b 1
)

echo Innova BA Tracker aciliyor: http://localhost:8080
start http://localhost:8080
python -m http.server 8080
