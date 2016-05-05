#!/bin/bash
echo "Status: 200"
echo "Content-type: text/html"
echo ""
echo '<html>'
echo '<head>'
echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'
echo '<title>Environment Variables</title>'
echo '</head>'
echo '<body>'
echo '<img src="/cat.jpg" width="100" style="height:auto;"><br>'
echo 'Environment Variables:'
echo '<pre>'
/usr/bin/env | /bin/sort
echo '</pre>'
echo '</body>'
echo '</html>'
exit 0
