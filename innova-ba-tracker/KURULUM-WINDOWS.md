# Windows Kurulum — D:\UYGULAMALAR

Bu proje cloud ortamında oluşturuldu; Windows bilgisayarınızda **D:\UYGULAMALAR** altına kurmak için aşağıdaki adımları izleyin.

## Hedef klasör

```
D:\UYGULAMALAR\innova-ba-tracker
```

## Yöntem 1: Kurulum betiği (önerilen)

1. GitHub'dan projeyi indirin veya klonlayın:
   ```
   https://github.com/tolgaksk/focus7-privacy-policy
   ```
2. `innova-ba-tracker` klasörüne gidin.
3. **`KUR.bat`** dosyasına çift tıklayın (veya `kur.ps1` üzerine sağ tık → PowerShell ile çalıştır).
4. Betik dosyaları `D:\UYGULAMALAR\innova-ba-tracker` içine kopyalar.

## Yöntem 2: Manuel PowerShell

PowerShell'i **Yönetici olarak** açın ve şunu çalıştırın:

```powershell
git clone https://github.com/tolgaksk/focus7-privacy-policy.git D:\UYGULAMALAR\focus7-temp
Copy-Item -Path "D:\UYGULAMALAR\focus7-temp\innova-ba-tracker" -Destination "D:\UYGULAMALAR\innova-ba-tracker" -Recurse -Force
Remove-Item -Path "D:\UYGULAMALAR\focus7-temp" -Recurse -Force
```

## Uygulamayı açma

Kurulumdan sonra:

```powershell
cd D:\UYGULAMALAR\innova-ba-tracker
python -m http.server 8080
```

Tarayıcıda: http://localhost:8080

Veya **`AC.bat`** dosyasına çift tıklayın.

## Not

Cloud agent (Cursor) sizin D: sürücünüze doğrudan erişemez. Kurulum betiğini kendi bilgisayarınızda bir kez çalıştırmanız gerekir.
