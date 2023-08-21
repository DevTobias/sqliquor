token=`cat requests/_temp/access_token`
curl -X POST -s http://localhost:8080/sandbox/execute \
  -H "Authorization: Bearer $token" \
  -H "Content-type: text/plain" \
  -d "SELECT * FROM \`cocktail\`" \
  -c requests/_temp/cookies -b requests/_temp/cookies | jq
