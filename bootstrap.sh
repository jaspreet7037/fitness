#!/usr/bin/env bash
docker exec postgres-fitness /bin/bash -c "psql -U postgres fitness < schema.sql"
docker exec postgres-fitness /bin/bash -c "psql -U postgres fitness < seed.sql"
