.PHONY: install start clean audit

install:
	npm install

start:
	npm run develop

audit:
	npm audit --audit-level=high --production

update:
	npm update
