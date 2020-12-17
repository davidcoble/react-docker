.PHONY: client
.PHONY: server
.PHONY: build

up: build
	docker-compose up

down:
	docker-compose down

out: build
	docker-compose up -d

build: down
	docker-compose build

MY_CLIENT := $(shell docker ps | grep _client | cut -d ' ' -f1 )
MY_SERVER := $(shell docker ps | grep _server | cut -d ' ' -f1 )

client:
	@echo clientid is $(MY_CLIENT)
	docker cp /home/coble/bashrc $(MY_CLIENT):/app
	docker exec -ti $(MY_CLIENT) apk add bash
	docker exec -ti $(MY_CLIENT) bash


server:
	@echo serverid is $(MY_SERVER)
	docker cp /home/coble/bashrc $(MY_SERVER):/app
	docker exec -ti $(MY_SERVER) apk add bash
	docker exec -ti $(MY_SERVER) bash


