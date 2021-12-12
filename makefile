.PHONY : build live

build :
	parcel build index.html
	cd ama-r/ && npm run build && cd build && mv index.html ama.html &&  ls && cd ..;
	cd ..;
	cp -r ama-r/build/* dist/		

live : build
	tar czf site-cryptochallenger.tar.gz dist/
	scp site-cryptochallenger.tar.gz ajrx@server.algata.ga:/home/ajrx/
clean :
	rm dist
	rm ama-r/build
	rm site-cryptochallenger.tar.gz




