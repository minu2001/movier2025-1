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

            topdiv = document.createElement("div")
            topdiv.style = "column-count:5"
            document.body.appendChild(topdiv)

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
    }
}

MovieObject.init();
MovieObject.getall();