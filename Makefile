convert-image:
	find public/images -type f -exec cwebp -q 75 {} -o {}.webp \;

run:
	yarn dev
