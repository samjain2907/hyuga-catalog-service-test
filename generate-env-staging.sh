#!/usr/bin/env bash
cat > .env << EOF

NODE_ENV = $NODE_ENV_STAGING
PORT = $PORT_STAGING

MAGE_URL = $MAGE_URL_STAGING
MAGE_TOKEN = $MAGE_TOKEN_STAGING

CUSTOMER_SERVICE_URL = $CUSTOMER_SERVICE_URL_STAGING

REDIS_CLIENT = $REDIS_CLIENT_STAGING

EOF