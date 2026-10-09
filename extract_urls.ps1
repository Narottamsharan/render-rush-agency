$c = Get-Content "C:\Users\purus\.gemini\antigravity-ide\brain\77ea72f3-78e2-4e66-915f-83059668c842\.system_generated\steps\13\content.md" -Raw

# Search for common video-related patterns
$patterns = @(
    'youtube\.com/embed/[A-Za-z0-9_-]+',
    'youtube\.com/watch\?v=[A-Za-z0-9_-]+',
    'youtu\.be/[A-Za-z0-9_-]+',
    'vimeo\.com/[0-9]+',
    '\.mp4',
    '\.webm',
    'videoUrl',
    'videoSrc',
    'embedUrl',
    'video_url',
    'videoId',
    'Car\s*Customization',
    'Nayan\s*Sukh',
    'Petrol\s*vs\s*Diesel',
    'YZEN',
    'Home\s*Tour',
    'title:\s*"[^"]*"',
    'category:\s*"[^"]*"',
    'thumbnail'
)

foreach ($p in $patterns) {
    $matches = [regex]::Matches($c, $p, 'IgnoreCase')
    if ($matches.Count -gt 0) {
        Write-Output "=== Pattern: $p ==="
        foreach ($m in $matches) {
            $start = [Math]::Max(0, $m.Index - 50)
            $len = [Math]::Min(200, $c.Length - $start)
            $context = $c.Substring($start, $len) -replace "`n", " "
            Write-Output "  Match: $($m.Value)"
            Write-Output "  Context: ...$context..."
            Write-Output ""
        }
    }
}
