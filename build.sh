#!/bin/bash

rm -rf build
mkdir -p build/{css,js}
cp index.html build/index.html

# minify js
for filename in `ls js/`; do
    npx uglify-es js/$filename -o build/js/$filename
done

# minify css
for filename in `ls css/`; do
    npx uglifycss css/$filename --output build/css/$filename
done

echo 'Сборка успешно завершена'
