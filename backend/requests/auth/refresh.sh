json=$( curl -X POST -s http://localhost:8080/auth/refresh \
  -c requests/_temp/cookies -b requests/_temp/cookies )

token=$( echo $json | jq -r ".accessToken" )
echo $token > "requests/_temp/access_token"
sed "s/ACCESS_TOKEN = '.*'/ACCESS_TOKEN = '$token'/g" requests/chat/queryModel.html > requests/chat/_queryModel.html && mv requests/chat/_queryModel.html requests/chat/queryModel.html
echo $json | jq
