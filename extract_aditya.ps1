# Extract from Aditya's bundle
$c = Get-Content "C:\Users\purus\.gemini\antigravity-ide\brain\77ea72f3-78e2-4e66-915f-83059668c842\.system_generated\steps\46\content.md" -Raw

Write-Output "=== ADITYA KUMAR RAY - PROJECT DATA ==="
Write-Output ""

# Search for YouTube URLs
$pattern = 'youtubeUrl:"([^"]*)"'
$matches = [regex]::Matches($c, $pattern)

if ($matches.Count -gt 0) {
    Write-Output "Found $($matches.Count) youtubeUrl entries"
    foreach ($m in $matches) {
        $start = [Math]::Max(0, $m.Index - 200)
        $len = [Math]::Min(500, $c.Length - $start)
        $context = $c.Substring($start, $len)
        
        $titleMatch = [regex]::Match($context, 'title:"([^"]*)"')
        $catMatch = [regex]::Match($context, 'category:"([^"]*)"')
        $descMatch = [regex]::Match($context, 'description:"([^"]*)"')
        $clientMatch = [regex]::Match($context, 'client:"([^"]*)"')
        $thumbMatch = [regex]::Match($context, 'thumbnail:"([^"]*)"')
        $videoTypeMatch = [regex]::Match($context, 'videoType:"([^"]*)"')
        
        Write-Output "---"
        Write-Output "Title: $($titleMatch.Groups[1].Value)"
        Write-Output "YouTube URL: $($m.Groups[1].Value)"
        Write-Output "Thumbnail: $($thumbMatch.Groups[1].Value)"
        Write-Output "Category: $($catMatch.Groups[1].Value)"
        Write-Output "Video Type: $($videoTypeMatch.Groups[1].Value)"
        Write-Output "Description: $($descMatch.Groups[1].Value)"
        Write-Output "Client: $($clientMatch.Groups[1].Value)"
        Write-Output ""
    }
} else {
    Write-Output "No youtubeUrl pattern found, trying alternatives..."
    
    # Try youtube.com patterns
    $ytPatterns = @(
        'youtube\.com/[^\s"'']+',
        'youtu\.be/[^\s"'']+',
        'videoUrl[^"]*"([^"]*)"',
        'video[Ss]rc[^"]*"([^"]*)"',
        'embedUrl[^"]*"([^"]*)"',
        'src:"([^"]*youtube[^"]*)"',
        'url:"([^"]*youtube[^"]*)"',
        'https://[^"]*youtube[^"]*',
        'https://[^"]*youtu\.be[^"]*'
    )
    
    foreach ($p in $ytPatterns) {
        $m2 = [regex]::Matches($c, $p, 'IgnoreCase')
        if ($m2.Count -gt 0) {
            Write-Output "Pattern '$p' found $($m2.Count) matches:"
            foreach ($match in $m2) {
                Write-Output "  $($match.Value)"
            }
            Write-Output ""
        }
    }
    
    # Look for title patterns
    $titlePatterns = @(
        'title:"[^"]*"',
        'name:"[^"]*"',
        'projectTitle:"[^"]*"'
    )
    
    foreach ($p in $titlePatterns) {
        $m2 = [regex]::Matches($c, $p, 'IgnoreCase')
        if ($m2.Count -gt 0) {
            Write-Output "Pattern '$p' found $($m2.Count) matches:"
            foreach ($match in $m2) {
                $start = [Math]::Max(0, $match.Index - 30)
                $len = [Math]::Min(300, $c.Length - $start)
                $context = $c.Substring($start, $len)
                Write-Output "  $context"
                Write-Output ""
            }
        }
    }
}

Write-Output ""
Write-Output "=== SEARCH FOR COMMON PATTERNS ==="
$searchTerms = @('category:', 'thumbnail', 'videoId', 'embed', 'iframe', 'video_url', 'videoSrc', 'mp4', 'webm', 'vimeo', 'drive.google')
foreach ($term in $searchTerms) {
    $m3 = [regex]::Matches($c, $term, 'IgnoreCase')
    if ($m3.Count -gt 0) {
        Write-Output "$term : $($m3.Count) occurrences"
        # Show first 3 contexts
        $count = 0
        foreach ($match in $m3) {
            if ($count -ge 3) { break }
            $start = [Math]::Max(0, $match.Index - 30)
            $len = [Math]::Min(200, $c.Length - $start)
            Write-Output "  ...$($c.Substring($start, $len))..."
            $count++
        }
    }
}
