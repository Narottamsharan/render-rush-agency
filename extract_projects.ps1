$c = Get-Content "C:\Users\purus\.gemini\antigravity-ide\brain\77ea72f3-78e2-4e66-915f-83059668c842\.system_generated\steps\13\content.md" -Raw

# Find the projects array by looking for the title/youtubeUrl pattern
# Context showed: youtubeUrl:"https://youtube.com/shorts/qzhznVj_HtE",thumbnail:"...
# Let's find each project by its youtubeUrl key

$pattern = 'youtubeUrl:"([^"]*)"'
$matches = [regex]::Matches($c, $pattern)

Write-Output "Found $($matches.Count) YouTube URLs:"
Write-Output ""

foreach ($m in $matches) {
    $url = $m.Groups[1].Value
    
    # Get surrounding context (200 chars before and after)
    $ctxStart = [Math]::Max(0, $m.Index - 200)
    $ctxLen = [Math]::Min(500, $c.Length - $ctxStart)
    $context = $c.Substring($ctxStart, $ctxLen)
    
    # Extract title from context
    $titleMatch = [regex]::Match($context, 'title:"([^"]*)"')
    $catMatch = [regex]::Match($context, 'category:"([^"]*)"')
    $descMatch = [regex]::Match($context, 'description:"([^"]*)"')
    $clientMatch = [regex]::Match($context, 'client:"([^"]*)"')
    $durationMatch = [regex]::Match($context, 'duration:"([^"]*)"')
    $thumbMatch = [regex]::Match($context, 'thumbnail:"([^"]*)"')
    $idMatch = [regex]::Match($context, 'id:"([^"]*)"')
    $videoTypeMatch = [regex]::Match($context, 'videoType:"([^"]*)"')
    
    Write-Output "---"
    Write-Output "ID: $($idMatch.Groups[1].Value)"
    Write-Output "Title: $($titleMatch.Groups[1].Value)"
    Write-Output "YouTube URL: $url"
    Write-Output "Thumbnail: $($thumbMatch.Groups[1].Value)"
    Write-Output "Category: $($catMatch.Groups[1].Value)"
    Write-Output "Video Type: $($videoTypeMatch.Groups[1].Value)"
    Write-Output "Description: $($descMatch.Groups[1].Value)"
    Write-Output "Client: $($clientMatch.Groups[1].Value)"
    Write-Output "Duration: $($durationMatch.Groups[1].Value)"
    Write-Output ""
}
