
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.links');
  const bar1 = document.querySelector('.bar1');
  const bar2 = document.querySelector('.bar2');
  const bar3 = document.querySelector('.bar3');
  
  burger.addEventListener('click', () => {
      links.classList.toggle('hidden');
      bar1.classList.toggle('transform');
      bar1.classList.toggle('translate-y-1.5'); 
      bar1.classList.toggle('-rotate-45');
      bar2.classList.toggle('hidden');
      bar3.classList.toggle('transform');
      bar3.classList.toggle('-translate-y-1');        
      bar3.classList.toggle('rotate-45');
  });
  
  function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone'); 
    var message = document.getElementById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || message.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}
