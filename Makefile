build:
	grunt concurrent:compile

watch:
	grunt server

clean:
	grunt clean

publish:
	rsync -vzr --delete ./public/ andreypopp.com:/var/sites/braintrace.ru/talks/browserify
