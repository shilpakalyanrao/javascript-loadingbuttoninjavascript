    var loader = document.getElementById("loader");
    const btn = document.getElementById("btn");
    const myform = document.getElementById("myform");
    btn.addEventListener('click', () => {
        loader.style.display = "inline-block";
        btn.disabled = true;
        setTimeout(() => {
            loader.style.display = "none";
            myform.reset();
            btn.disabled = false;

        }, 2000);

    });
