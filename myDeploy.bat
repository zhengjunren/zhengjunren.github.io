call npm run docs:build

cd ./docs/.vuepress/dist

xcopy * G:\zhengjunren.github.io /E/Y

g:

cd zhengjunren.github.io

call git add .

call git commit -m 'deploy'

call git push

f:

cd 哈哈哈\myblog
