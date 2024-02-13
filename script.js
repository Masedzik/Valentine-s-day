document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('div[id=main-container]').addEventListener('click',container=>{
        container.srcElement.parentElement.parentElement.classList.add('show_info');
        if(!Object.values(document.querySelector('.heart').classList).includes('heart-anim')){
            setInterval(()=>{
                document.querySelector('.heart').classList.add('heart-anim');
            },1500);
        };
        if(!Object.values(document.querySelector('.text').classList).includes('text-anim')){
            setInterval(()=>{
                document.querySelector('.text').classList.add('text-anim');
            },1500);
        };
    });
});