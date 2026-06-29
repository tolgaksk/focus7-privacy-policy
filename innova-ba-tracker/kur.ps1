# Innova BA Tracker - D:\UYGULAMALAR kurulum betigi
$ErrorActionPreference = "Stop"

$hedefKok = "D:\UYGULAMALAR"
$hedefProje = Join-Path $hedefKok "innova-ba-tracker"
$kaynak = $PSScriptRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Innova BA Tracker - Windows Kurulum" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# D: surucusu var mi?
if (-not (Test-Path "D:\")) {
    Write-Host "HATA: D: surucusu bulunamadi." -ForegroundColor Red
    Write-Host "Hedef yolu kur.ps1 icinde degistirebilirsiniz." -ForegroundColor Yellow
    Read-Host "Cikmak icin Enter"
    exit 1
}

# Hedef klasorleri olustur
if (-not (Test-Path $hedefKok)) {
    New-Item -ItemType Directory -Path $hedefKok -Force | Out-Null
    Write-Host "[OK] Olusturuldu: $hedefKok" -ForegroundColor Green
}

if (Test-Path $hedefProje) {
    Write-Host "Mevcut klasor yedekleniyor..." -ForegroundColor Yellow
    $yedek = "$hedefProje-yedek-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
    Rename-Item -Path $hedefProje -NewName (Split-Path $yedek -Leaf)
}

New-Item -ItemType Directory -Path $hedefProje -Force | Out-Null

# Kopyalanacak dosyalar (kurulum betikleri haric tutulabilir)
$dosyalar = @(
    "index.html",
    "styles.css",
    "data.js",
    "app.js",
    "README.md",
    "KURULUM-WINDOWS.md"
)

foreach ($dosya in $dosyalar) {
    $kaynakDosya = Join-Path $kaynak $dosya
    if (Test-Path $kaynakDosya) {
        Copy-Item -Path $kaynakDosya -Destination $hedefProje -Force
        Write-Host "[OK] Kopyalandi: $dosya" -ForegroundColor Green
    }
}

# Masaustu kisa yol - AC.bat
$acBat = @"
@echo off
cd /d D:\UYGULAMALAR\innova-ba-tracker
echo Innova BA Tracker aciliyor...
start http://localhost:8080
python -m http.server 8080
pause
"@
Set-Content -Path (Join-Path $hedefProje "AC.bat") -Value $acBat -Encoding ASCII

# KUR.bat kopyasi (yeniden kurulum icin)
Copy-Item -Path (Join-Path $kaynak "KUR.bat") -Destination $hedefProje -Force -ErrorAction SilentlyContinue
Copy-Item -Path (Join-Path $kaynak "kur.ps1") -Destination $hedefProje -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Kurulum tamamlandi!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Konum: $hedefProje" -ForegroundColor White
Write-Host ""
Write-Host "Acmak icin:" -ForegroundColor Cyan
Write-Host "  1. $hedefProje\AC.bat dosyasina cift tiklayin" -ForegroundColor White
Write-Host "  2. Veya: cd $hedefProje && python -m http.server 8080" -ForegroundColor White
Write-Host ""

$ac = Read-Host "Simdi uygulamayi acmak ister misiniz? (E/H)"
if ($ac -eq "E" -or $ac -eq "e") {
    Start-Process "http://localhost:8080"
    Set-Location $hedefProje
    Start-Process python -ArgumentList "-m", "http.server", "8080" -WindowStyle Normal
}
