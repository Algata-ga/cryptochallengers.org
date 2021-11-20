.PHONY : build live

build :
	mkdir -p build
	rm -rf build/*
	cp -r css/ build/
	cp -r assets/ build/
	cp -r js/ build/
	cp -r *.html build/
	cd ama-r && npm run build; \
	cd build && mv index.html ama.html; \
	cd .. && cd ..;
	cp -r ama-r/build/* build/

live : build
	tar czf site-cryptochallenger.tar.gz build/
	scp site-cryptochallenger.tar.gz ajrx@server.algata.ga:/home/ajrx/






