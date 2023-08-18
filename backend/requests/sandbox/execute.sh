token=`cat requests/_temp/access_token`
curl -X POST -s http://localhost:8080/sandbox/execute \
  -H "Authorization: Bearer $token" \
  -H "Content-type: text/plain" \
  -d "SELECT * FROM cocktails" \
  -c requests/_temp/cookies -b requests/_temp/cookies | jq
  # -d "CREATE TABLE cocktail ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL);" \
  # -d "INSERT INTO cocktail (name) VALUES ('Pina Colada');" \
