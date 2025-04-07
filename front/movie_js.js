let MovieObject = {
    init: function(){
    },

    getall : function(){
        $.ajax({
        // 실행코드
            type: "GET",
            url: "http://localhost:8000/all",

        }).done(function(response){
        // 성공코드

            console.log(response)
            movielist =  response.result
            
            //topdiv = document.createElement("div")
            //topdiv.style = "column-count:5"
            //document.body.appendChild(topdiv)
            
            topdiv = document.getElementById('alldiv')
            movielist.forEach(movie => {
                cmovie = document.createElement("div")
                cmovie.className = "card"
    
                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.onclick =function(){
                    //window.location.href = movie.url //현재창에서 열기
                    window.open(movie.url) // 새창에서 열기
                }
                mimg.style.cursor = "pointer";
                cmovie.appendChild(mimg)    
                topdiv.appendChild(cmovie)
            });
            //첫 번 째 이미지 코드



        }).fail(function(error){
        // 실패코드
            console.log(error)
        });
    },


    getgenres: function() {
        sgenre = document.getElementById("sgenre").value;  // select에서 선택된 장르 가져오기
    
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/genresbest/${sgenre}`,  // ✅ 템플릿 리터럴로 동적 URL 생성
        }).done(function(response) {
            console.log(response);
            movielist = response.result;
    
            topdiv = document.getElementById('genrediv');
            // topdiv.innerHTML = "";  // 이전 내용 제거 첫번 째 방법
            while(topdiv.firstChild){
                topdiv.removeChild(topdiv.firstChild)
            }
            movielist.forEach(movie => {
                const cmovie = document.createElement("div");
                cmovie.className = "card";
    
                const mimg = document.createElement("img");
                mimg.className = "card-img-top";
                mimg.src = movie.poster_path;
                mimg.onclick = function() {
                    window.open(movie.url);  // 새창에서 열기
                };
                mimg.style.cursor = "pointer";
    
                cmovie.appendChild(mimg);
                topdiv.appendChild(cmovie);
            });
    
        }).fail(function(error) {
            console.log(error);
        });
    }
    
    
}

MovieObject.init();
MovieObject.getall();