$toolsDir = Join-Path $PSScriptRoot "tools"
$localTectonic = Join-Path $toolsDir "tectonic.exe"

$tectonicCmd = ""

if (Get-Command tectonic -ErrorAction SilentlyContinue) {
    $tectonicCmd = "tectonic"
} elseif (Test-Path $localTectonic) {
    $tectonicCmd = $localTectonic
} else {
    Write-Host "Tectonic not found. Bootstrapping standalone binary..."
    & (Join-Path $PSScriptRoot "install-tectonic.ps1")
    if (Test-Path $localTectonic) {
        $tectonicCmd = $localTectonic
    } else {
        Write-Error "Failed to locate or install Tectonic."
        exit 1
    }
}

$cvDir = (Resolve-Path (Join-Path $PSScriptRoot "..\cv")).Path
$outDir = (Resolve-Path (Join-Path $PSScriptRoot "..\public\cv")).Path

$texFiles = Get-ChildItem -Path $cvDir -Filter "*.tex" | Sort-Object Name

foreach ($file in $texFiles) {
    Write-Host "Compiling $($file.Name) with $tectonicCmd..."
    & $tectonicCmd $file.FullName -o $outDir
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Tectonic compilation failed for $($file.Name) with exit code $LASTEXITCODE"
        exit 1
    }
    $pdfName = [System.IO.Path]::ChangeExtension($file.Name, ".pdf")
    Write-Host "SUCCESS: $($file.Name) compiled to public/cv/$pdfName"
}

Write-Host "All CV versions compiled successfully."
