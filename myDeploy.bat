call npm run docs:build

cd ./docs/.vuepress/dist

xcopy * G:\zhengjunren.github.io /E/Y

xcopy * G:\zhengjunren /E/Y

g:

cd zhengjunren.github.io

call git add .

call git commit -m 'deploy'

call git push

cd ..

cd zhengjunren

call git add .

call git commit -m 'deploy'

call git push

f:

cd ..

cd ..

cd ..
