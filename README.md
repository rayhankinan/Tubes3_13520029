# DNA Pattern Matching - DNAobama
Tugas Besar 3 IF2211 Strategi Algoritma Semester II Tahun 2021/2022 Penerapan String Matching dan Regular Expression dalam DNA Pattern Matching

## Authors

| Nama                  | NIM      |
| --------------------- | -------- |
| Muhammad Garebaldhie ER Rahman| 13520029 |
| Rayhan Kinan Muhammad | 13520065 |
| Marchotridyo | 13520119 |

## General Information
DNAobama is a website that provides features to upload DNA sequence of diseases to the system. Users also can upload their DNA sequence and check if the user have a certain disease or not. Users can also search for past tests by date or by the disease itself. The deployed version of the website can be accsessed [DNAobama](https://dna-obama.vercel.app/) 

## Application demo
### Adding a disease to the database
![msedge_BVeOBUCKaq](https://user-images.githubusercontent.com/29671825/165944822-ae7f00fc-7359-4a04-a2a6-22d04f4c79a7.gif)
### Do a DNA test
![msedge_UVBMxQ5VQB](https://user-images.githubusercontent.com/29671825/165944910-565be332-610f-4107-a52e-cd1c9e2940a6.gif)
### Search for past tests
![msedge_9uT6eKdjlh](https://user-images.githubusercontent.com/29671825/165945160-200910f8-9fe0-4bf8-b805-2b492e536a08.gif)


## Program Requirement
1. [Node JS](https://nodejs.org/en/)

## Tech Stack Used
1. [React](https://reactjs.org/)
2. [Express JS](https://expressjs.com/)
3. [Sequelize ORM](https://sequelize.org/)

## How to Use

If you want to check the webiste use this: [DNAobama](https://dna-obama.vercel.app/)

If you want to run it locally just download the repository using `git clone https://github.com/rayhankinan/Tubes3_13520029` and make sure you have `node js` installed on your machine

1. Frontend
* move to frontend directory using `cd frontend`
* run `npm install`
* After install all the dependencies run `npm run dev` to start it locally

2. Backend
*  move to backend directory using `cd backend`
*  run `npm install`
*  After install all the dependencies run `npm run start` or `npm run start:dev` for development

## Folder Structure

```
├── README.md
├── backend  
│   ├── app
│   │   ├── algorithms
│   │   │   ├── bm.algorithm.js
│   │   │   ├── kmp.algorithm.js        
│   │   │   └── ssaha.algorithm.js      
│   │   ├── config
│   │   │   └── db.config.js
│   │   ├── controllers
│   │   │   ├── disease.controller.js   
│   │   │   └── prediction.controller.js
│   │   ├── example.env
│   │   ├── models
│   │   │   ├── disease.model.js    
│   │   │   ├── index.js
│   │   │   └── prediction.model.js 
│   │   ├── routes
│   │   │   ├── disease.routes.js   
│   │   │   ├── prediction.routes.js
│   │   │   └── user.routes.js      
│   │   └── server.js
│   ├── package-lock.json
│   ├── package.json
│   └── src
├── frontend
│   ├── index.html       
│   ├── package-lock.json
│   ├── package.json     
│   ├── src
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   └── images
│   │   │       ├── dna-1.jpg
│   │   │       ├── home-1.png
│   │   │       ├── home-2.png
│   │   │       ├── home-3.png
│   │   │       └── upload.png
│   │   ├── favicon.svg
│   │   ├── index.css
│   │   ├── lib.jsx
│   │   ├── logo.svg
│   │   ├── main.jsx
│   │   └── pages
│   │       ├── DnaTest
│   │       │   ├── DnaTest.jsx
│   │       │   └── DnaTest.module.css
│   │       ├── GeneticDisorder
│   │       │   ├── GeneticDisorder.jsx
│   │       │   └── GeneticDisorder.module.css
│   │       ├── Home
│   │       │   ├── Home.jsx
│   │       │   └── Home.module.css
│   │       ├── Loading.jsx
│   │       ├── Loading.module.css
│   │       ├── SearchTest
│   │       │   ├── SearchTest.jsx
│   │       │   └── SearchTest.module.css
│   │       └── index.js
│   ├── vercel.json
│   └── vite.config.js
└── tc
    ├── disease_1.txt
    ├── disease_2.txt
    ├── invalid.txt
    ├── user_1.txt
    └── user_2.txt
```
