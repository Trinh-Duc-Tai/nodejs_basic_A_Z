> git clone https://github.com/haryphamdev/node-js-basic-hoidanit.git

> git branch

> git checkout dev

> npm install

> git checkout <id-commit>      #để quay lại thời điểm commit

-------------------------------
> bước 1: npm init
> bước 2: npm install --save--exact express@4.18.1 nodemon@2.0.18 body-parser

npm i
"dependencies": {
    "express": "^4.18.1",
    "nodemon": "2.0.18",
    "body-parser":"1.20.0",
    "@babel/core": "7.18.5",
    "@babel/node": "7.18.5",
    "@babel/preset-env": "7.18.2"
  }
--------------------------------

echo "# nodejs_basic_A_Z" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Trinh-Duc-Tai/nodejs_basic_A_Z.git
git push -u origin main