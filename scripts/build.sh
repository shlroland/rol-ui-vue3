yarn bootstrap

yarn clean:lib
yarn build:esm-bundle
tar --exclude=index.esm.js -zcvf  ./es.gz ./lib
mkdir -p es
tar -zxvf ./es.gz --strip-component 2 -C ./es
yarn build:lib
yarn build:lib-full

find './packages' -type d -maxdepth 1 ! -name '*util*' ! -name '__mocks__' ! -name 'locale' ! -name 'style' -print0 | xargs -I {} -P2 -0 node ./build/build.comps.js {}

find ./packages/utils -type f ! -name '*.test.ts' ! -name 'package.json' -print0 \
| xargs -P2 -0 -I {} node ./build/build-util.js {}

node ./build/build.entry.js

yarn build:style

rm ./es.gz
