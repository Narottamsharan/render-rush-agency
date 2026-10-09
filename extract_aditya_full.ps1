$c = Get-Content "C:\Users\purus\.gemini\antigravity-ide\brain\77ea72f3-78e2-4e66-915f-83059668c842\.system_generated\steps\46\content.md" -Raw

Write-Output "=== ADITYA - FULL PROJECT OBJECTS ==="

# Find project objects by id pattern
$pattern = '\{id:\d+,title:"[^"]*"'
$matches = [regex]::Matches($c, $pattern)

Write-Output "Found $($matches.Count) project entries"
Write-Output ""

foreach ($m in $matches) {
    $start = $m.Index
    # Find closing brace - look for the next }, or }]
    $depth = 0
    $endIdx = $start
    for ($i = $start; $i -lt [Math]::Min($start + 1000, $c.Length); $i++) {
        if ($c[$i] -eq '{') { $depth++ }
        if ($c[$i] -eq '}') { $depth--; if ($depth -eq 0) { $endIdx = $i; break } }
    }
    
    if ($endIdx -gt $start) {
        $obj = $c.Substring($start, $endIdx - $start + 1)
        Write-Output $obj
        Write-Output ""
    }
}

Write-Output ""
Write-Output "=== MP4 ASSETS ==="
$mp4Pattern = '"(/assets/[^"]*\.mp4)"'
$mp4Matches = [regex]::Matches($c, $mp4Pattern)
foreach ($m in $mp4Matches) {
    Write-Output $m.Groups[1].Value
}

Write-Output ""
Write-Output "=== FILTER CATEGORIES ==="
$filterPattern = '\{id:"([^"]*)",label:"([^"]*)"'
$filterMatches = [regex]::Matches($c, $filterPattern)
foreach ($m in $filterMatches) {
    Write-Output "$($m.Groups[1].Value): $($m.Groups[2].Value)"
}
