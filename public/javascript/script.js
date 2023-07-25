const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var tl = gsap.timeline();


tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
});

tl.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
});

tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:1
});


let articlesPerPage;
let totalPages;

let query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
let pageNo = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
console.log(query,pageNo);
const fetchNews = async (query, pageNo)=>{
    let a = await fetch(`/api?q=${query}&apiKey=4c49ce61f6254ec8927d16a63d7303e2&pageno=${pageNo}`);
    let r = await a.json();
    console.log(r);
    totalPages = Math.ceil(r.totalResults/articlesPerPage);
    // if (pageNo === 0) {
    //     pre.classList.add("disabled");
    // } else if (pageNo === totalPages) {
    //     next.classList.add("disabled");
    // }
    // pre.href = `/?=${query}&pageno=${pageNo-1}`;
    // next.href = `/?=${query}&pageno=${pageNo+1}`;

    let artic = r.articles;
    // for (let i = 0; i < artic.length; i++) {
    //     console.log(i);
        if (r.articles[0].urlToImage !== null) {
            document.querySelector("#page1 #elems #elem1 #image-div img").src = artic[0].urlToImage;}
            document.querySelector("#page1 #elems #elem1 h4").innerHTML = artic[0].title;
            document.querySelector("#elems #elem1 p").innerHTML = artic[0].description;
            document.querySelector("#elems #elem1 a").href = artic[0].url;
        
            if (r.articles[1].urlToImage !== null) {
            document.querySelector("#elems #elem3 #image-div img").src = r.articles[1].urlToImage;}
            document.querySelector("#elems #elem3 h4").innerHTML = r.articles[1].title;
            document.querySelector("#elems #elem3 p").innerHTML = r.articles[1].description;
            document.querySelector("#elems #elem3 a").href = r.articles[1].url;
        
            document.querySelector("#page2 #page2-left h2").innerHTML = r.articles[2].title;
            if (r.articles[2].urlToImage !== null) {
            document.querySelector("#page2 #page2-left img").src = r.articles[2].urlToImage;}
            document.querySelector("#page2 #page2-left p").innerHTML = r.articles[2].description;
            document.querySelector("#page2 #page2-left a").href = r.articles[2].url;
        
            document.querySelector("#page2 #page2-right h1").innerHTML = r.articles[3].title;
            if (r.articles[3].urlToImage !== null) {
            document.querySelector("#page2 #page2-right img").src = r.articles[3].urlToImage;}
            document.querySelector("#page2 #page2-right a").href = r.articles[3].url;
        
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-left h2").innerHTML = r.articles[4].title;
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-left h3").innerHTML = r.articles[4].author;
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-left h6").innerHTML = r.articles[4].description;
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-left a").href = r.articles[4].url;
        
            document.querySelector("#page4 #page4-left #page4-left-down #page4-left-left h2").innerHTML = r.articles[5].title;
            document.querySelector("#page4 #page4-left #page4-left-down #page4-left-left h3").innerHTML = r.articles[5].author;
            document.querySelector("#page4 #page4-left #page4-left-down #page4-left-left h6").innerHTML = r.articles[5].description;
            document.querySelector("#page4 #page4-left #page4-left-down #page4-left-left a").href = r.articles[5].url;
        
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-right h4").innerHTML = r.articles[6].title;
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-right p").innerHTML = r.articles[6].description;
            if (r.articles[6].urlToImage !== null) {
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-right #image-div-left-right img").src = r.articles[6].urlToImage;}
            document.querySelector("#page4 #page4-left #page4-left-up #page4-left-right a").href = r.articles[6].url;
        
            document.querySelector("#page4 #page4-right h1").innerHTML = r.articles[7].title;
            document.querySelector("#page4 #page4-right p").innerHTML = r.articles[7].description;
            document.querySelector("#page4 #page4-right a").href = r.articles[7].url;
    // }
    
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    document.querySelector("#page1 #nav h4").innerHTML = formattedToday;
    document.querySelector("#page3 h1").innerHTML = query.replace("+"," ");
}

fetchNews(query,pageNo);