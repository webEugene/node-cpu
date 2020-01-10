document.addEventListener("DOMContentLoaded", function(event) { 
    const copyright = document.querySelector('.copyright');
    const searchBtn = document.querySelector('.search-btn');
    if(copyright != null){
        const date = new Date();
        copyright.innerHTML = `Copyright ${date.getFullYear()}`;
    }
    if(searchBtn != null){
        searchBtn.addEventListener('click', () => {
            const input = document.querySelector('.domain-input');
            console.log(input.value);
            
        });
    }
// console.log(os.totalmem());
});

