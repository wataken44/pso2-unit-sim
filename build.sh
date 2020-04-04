#!/bin/sh

BASEDIR=$(cd $(dirname $0); pwd)

cd $BASEDIR/data
ruby embed.rb unit_list.tsv unit-parameter-data.ts.template unit-parameter-data.ts
cd $BASEDIR

cp data/unit-parameter-data.ts src/app/
ng build --base-href  '/pso2-unit-sim/'
cp dist/* github-pages/
