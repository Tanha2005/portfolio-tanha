 console.log("script run...");
 document.querySelector('.crsp').style.display = 'none';
 document.querySelector('.ham').addEventListener("click", ()=> {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(
        document.querySelector('.sidebar').classList.contains('sidebarGo')){
            document.querySelector('.hamp').style.display = 'inline';
            document.querySelector('.crsp').style.display = 'none';
        } else {
            document.querySelector('.hamp').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.crsp').style.display = 'inline';
            }, 350);
        };
 });
