let imageSrc = ['https://tse3.mm.bing.net/th?id=OIP.7jpR1fZDpLLZXmA3eKv-_AHaFC&pid=Api&P=0&h=180',
'https://tse4.mm.bing.net/th?id=OIP.ErAiMih0ltX9nxzgEbfN0gHaEp&pid=Api&P=0&h=180',
'https://tse3.mm.bing.net/th?id=OIP.pmI3XxKBxp8qUqtrleA23AHaEo&pid=Api&P=0&h=180'
]

let index = 0;

let container = document.getElementById('container');
let element = document.createElement('img');
element.src = imageSrc[index];
container.appendChild(element);

let prevBtn = document.createElement('button');
prevBtn.textContent = 'Prev';
container.appendChild(prevBtn);

let nextBtn = document.createElement('button');
nextBtn.textContent = 'Next';
container.appendChild(nextBtn);

nextBtn.addEventListener('click',()=>{
    if(index <= imageSrc.length-2){
        index++;
        element.src = imageSrc[index];
    }else{
        nextBtn.disabled = true;
    }
})

prevBtn.addEventListener('click',()=>{
    if(index > imageSrc.length+1){
        index--;
        element.src = imageSrc[index];
    }
})

