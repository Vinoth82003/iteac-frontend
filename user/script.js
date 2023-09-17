console.log('testpage js is connected ');

const menuopen = document.querySelector(".menuopen");

menuopen.addEventListener('click',function(){

    const sidemenu = document.querySelector(".sidemenu");
    sidemenu.classList.toggle('active');

});

const list = document.querySelectorAll(".list");

list.forEach(opt => {
    opt.addEventListener('click',function(){
        list.forEach(list => {
            list.classList.remove('active');
        });
        opt.classList.add('active');
    })
});