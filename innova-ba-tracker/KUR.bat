@echo off
chcp 65001 >nul
title Innova BA Tracker - D:\UYGULAMALAR Kurulum
echo.
echo Innova BA Tracker kuruluyor: D:\UYGULAMALAR\innova-ba-tracker
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0kur.ps1"

if errorlevel 1 (
    echo.
    echo Kurulum basarisiz. PowerShell yonetici olarak deneyin.
    pause
    exit /b 1
)

pause
