function main()
{
    let btn = document.querySelector(".button");
    btn.addEventListener("click", () => {
        let val = document.querySelector("#count");
        if (val.innerText == "") {
            val.innerText = 1;
        }
        else {
            let nums = parseInt(val.innerText);
            val.innerText = nums + 1;
        }
        if (!document.querySelector(".box").classList.contains(".underprogress")) {
            document.querySelector(".box").classList.add(".underprogress");
           
            progres();
        }
    });
}
function progres()
{
    for (let i = 0; i <= 100; i++) {

        setTimeout(() => {
            document.querySelector(".progress").style.width = i + "%";
        }, i * 50);
        if (i == 100)// aur agar bar puri filled hai so call unfill
        {
            setTimeout(unfill, i * 50);
        }
    }
}
function unfill()
{
    let count = document.querySelector("#count");
    let progress = document.querySelector(".progress");
    progress.style.width = 0;
    if (count.innerText == '1') {
        count.innerText = "";
        document.querySelector(".box").classList.remove(".underprogress");
    }
    else {
        let nums = parseInt(count.innerText);
        nums--;
        count.innerText = nums;
        progres();
    }

}
main();