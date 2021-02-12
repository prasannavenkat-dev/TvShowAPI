document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    input = document.querySelector("input").value;
    tvShow(input);

});


async function tvShow(input) {
    url = "https://api.tvmaze.com/search/shows?q=" + input;
    let request = await fetch(url);

    let response = await request.json();
    console.log(response)
    if ((document.querySelector("section") )!== null||(document.querySelector("h3"))!== null) {
        $('h3').remove();
        
        $('.section').remove();
    

        
     }
    
    if(response.length===0){

        if ((document.querySelector("h3") )!== null) {
            $('h3').remove();
         }

        var res = document.createElement('h3');
        res.innerHTML="No Results Found!!";
        res.setAttribute('class','text-center mt-2')
        document.body.append(res)
    }
    

   if(response!==null){
    
    for (i = 0; i < response.length; i++) {

        if(response[i]){
            //SECTION
        var section = document.createElement('section');
        section.setAttribute('class','section')
        document.body.append(section);
        //CONTAINER
        var container = document.createElement('div');
        container.setAttribute('class', 'container py-3')
        section.append(container);
        //CARD
        var card = document.createElement('div');
        card.setAttribute("class", 'card');
        container.append(card);
        //ROW
        var row = document.createElement('div');
        row.setAttribute('class', 'row justify-content-center');
        card.append(row);
        //IMG-SEC
        var imgSec = document.createElement('div');
        imgSec.setAttribute('class', 'col-md-4 ');
        row.append(imgSec);
        //IMG
        if(response[i].show.image!==null){
         var img = document.createElement('img');
        img.setAttribute('src', response[i].show.image.medium);
        img.setAttribute('class','m-auto p-3')
        imgSec.append(img);
        }
        else{
            var img = document.createElement('img');
        img.setAttribute('src','no image.jpg');
        img.setAttribute('class','m-auto p-3')

            img.setAttribute('alt', 'No img');
            imgSec.append(img);

        }
        
     
        //DETAILS
        var details = document.createElement('div');
        details.setAttribute('class', 'col-md-8 px-3 pt-lg-5');
        row.append(details);
        //CARD BLOCK
        var cardBlock = document.createElement('div');
        cardBlock.setAttribute('class', 'card-block px-3');
        details.append(cardBlock);

        //CARD TITLE
        var title = document.createElement('h4');
        title.setAttribute('class', 'card-title pt-1');
        title.innerHTML = response[i].show.name;
        cardBlock.append(title);

        //GENRES
        var genres = document.createElement('h6');
        genres.innerHTMl = 'GENRES:';
        for (j = 0; j < response[i].show.genres.length; j++) {
            genres.innerHTMl = genres.innerHTMl + ',' + response[i].show.genres[j];
        }
        cardBlock.append(genres);

        //DATE-PREMIERED
        var datePremiered = document.createElement('h6');
        datePremiered.setAttribute('class','mt-3')
        datePremiered.innerHTML = 'Date Premiered : ' + response[i].show.premiered;
        cardBlock.append(datePremiered);

        //SCHEDULE
        var schedule = document.createElement('h6');
        schedule.innerHTML="";
       
        if(response[i].show.schedule.days.length!==0){
        schedule.innerHTML = "Schedule : "+ response[i].show.schedule.days;
        }
        if(response[i].show.schedule.time){
        schedule.innerHTML = schedule.innerHTML+" At " + response[i].show.schedule.time;

        }
        cardBlock.append(schedule);



        //country
        if((response[i].show.network)!==null){
            var country = document.createElement('h6');
        country.innerHTML = "Country : " + response[i].show.network.country.name;
        cardBlock.append(country);
        }
      


        //BTN
        var knowMore = document.createElement('button');
        knowMore.setAttribute('href', response[i].show.url)
        knowMore.setAttribute('class', 'btn  mb-2 mt-1');
        knowMore.setAttribute('style','background-color:#61892f')
        knowMore.innerHTML = "Know More"
        cardBlock.append(knowMore)
   
        }
       
       
    }

   }
  



}
