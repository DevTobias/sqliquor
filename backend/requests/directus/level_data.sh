curl -G -s http://localhost:8055/items/level \
  -d fields=*,events.event_id.* \
  -d filter[position][_eq]=$1 | jq
