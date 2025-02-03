#!/bin/bash
# This script will be executed when the MongoDB container starts up for the first time.

mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    user: "admin",
    pwd: "password",
    roles: [{ role: "readWrite", db: "abdm_m1" }]
  })
EOF
