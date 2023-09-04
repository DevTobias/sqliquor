scp -P 3713 -i ~/.ssh/sqliqour_id ../../backend/docker/cms/database/database.sql sqliqour@85.215.35.47:/tmp
# on server: sudo mv /tmp/database.sql /var/lib/docker/volumes/sqliqour_cms-database/_data
