#!/usr/bin/env bash
cat > .env << EOF

NODE_ENV = development
PORT = 3002

MAGE_URL = https://hyuga-magento.pratech.net/rest/V1
MAGE_TOKEN = vxnv87jzrwhq55ydhah6rwwnb17163cj

CUSTOMER_SERVICE_URL = https://hyuga-customer.pratech.net/v1

REDIS_CLIENT = redis://hyuga-staging-redis-001.f2nvo0.0001.aps1.cache.amazonaws.com:6379

NEW_RELIC_LICENSE_KEY = 3ab6ca1021e3e365d2695a1c68c232ccFFFFNRAL

NEW_RELIC_APP_NAME = 'staging-hyuga-catalog-service'

EOF