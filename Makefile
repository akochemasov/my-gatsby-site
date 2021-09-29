.PHONY: install start clean audit update eslint prettier

install:
	npm install

start:
	npm run develop

prettier:
	npm run prettier

eslint:
	npm run eslint

eslint-fix:
	npm run eslint-fix

audit:
	npm audit --audit-level=high --production

update:
	npm update
