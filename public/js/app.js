
"use strict";

class App{
  constructor(){
    this.musicApp = [
    {
      "MusicId": 1,
      "mneym": "Selena Gomez",
      "Mntl": "Title: Same Old Love",
      "msyr": "Year:  2015",
      "Mdesc": " Description: Same Old Love is a song by American singer Selena Gomez from her second studio album, Revival (2015). The track was written by Charli XCX, Ross Golan, and its producers Stargate and Benny Blanco. It was first composed by XCX and Stargate, later recorded by Gomez without the former in the studio at the time. Same Old Love is a midtempo synthpop and electropop song backed by a wonky piano loop, a finger-click beat and Italo disco synths. tone and raspy delivery, accompanied by XCX on background vocals. Lyrically, Same Old Love is a torch song.",
      "mPic": "img/selena.jpg",
      "mp3": "mp3/same.mp3",
      
    },
    {
      "MusicId": 2,
      "mneym": "One Direction",
      "Mntl": "Title: Night Changes",
      "msyr": "Year: 2014",
      "Mdesc": "Description: Night Changes is a song recorded by English-Irish boy-band One Direction. It was written by Jamie Scott, Julian Bunetta and John Ryan, while the production was handled by Bunetta and Ryan. The song was released on 14 November 2014 as the second and final single from their fourth studio album Four. ",
      "mPic": "img/oned.jpg",
      "mp3": "mp3/night.mp3",

    },
    {
      "MusicId": 3,
      "mneym": "Charlie Puth",
      "Mntl": "Title: We Don't Talk Anymore feat. Selena Gomez",
      "msyr": "Year: 2016",
      "Mdesc": "Description: We Don't Talk Anymore is a song produced and performed by American singer Charlie Puth from his debut studio album Nine Track Mind (2016). It features guest vocals from Selena Gomez; who co-wrote the track with Jacob Kasher and Puth; the latter also served as a producer.",
      "mPic": "img/charlie.jpg",
      "mp3": "mp3/dont.mp3",
    },

    {
      "MusicId": 4,
      "mneym": "Blink-182",
      "Mntl": "Title: I Miss You",
      "msyr": "Year: 2004",
      "Mdesc": "Description: I Miss You is a song by American rock band Blink-182, released on February 9, 2004 as the second single from the group's fifth studio album, Blink-182 (2003). Co-written by guitarist Tom DeLonge and bassist Mark Hoppus, they employed a method of writing separately and bringing their two verses together later. The song, produced entirely acoustic, features an acoustic electric bass, a cello, and a brushstroked drum loop.",
      "mPic": "img/b182.jpg",
      "mp3": "mp3/blink.mp3",
    },
    {
      "MusicId": 5,
      "mneym": "Linkin Park",
      "Mntl": "Title: New Divide",
      "msyr": "Year: 2009",
      "Mdesc": "Description: New Divide is a song by American rock band Linkin Park. The song is released as a single and was recorded specifically for Michael Bay's film Transformers: Revenge of the Fallen. The song serves as the film's theme, and was released as a single on May 18, 2009.",
      "mPic": "img/linkin.jpg",
      "mp3": "mp3/new.mp3",
    },
    
    ];

    this.lyrics = [
    {           
      "titleid":1,
      "titlename":"We don't talk anymore- Charlie Puth feat. Selena Gomez",
      "titlelyrics":"We don't talk anymore like we used to dooooo",
      "pic":"mp3/we.jpg",
      "link":`
      mp3/CHARLIE PUTH LYRICS - We Don't Talk Anymore.html`,
    },
    {           
      "titleid":2,
      "titlename":"One Direction- Night Changes",
      "titlelyrics":"Even when the night changes.",
      "pic":"mp3/night.jpg",
      "link":`
      mp3/ONE DIRECTION LYRICS - Night Changes.html`,
    },
    {           
      "titleid":3,
      "titlename":"Blink-182- I Miss You",
      "titlelyrics":"Your voice inside my head.. I miss you.",
      "pic":"mp3/blink.jpg",
      "link":`
      mp3/BLINK-182 LYRICS - I Miss You.html`,
    },
    {           
      "titleid":4,
      "titlename":"Linkin Park- New Divide",
      "titlelyrics":"Across new divide.",
      "pic":"mp3/new.jpg",
      "link":`
      mp3/LINKIN PARK LYRICS - New Divide.html`,
    },


    ];

  }



  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createDesign(){
    let MusicId = document.getElementById('musicid');
    let mneym = document.getElementById('mUsic');
    let Mdesc = document.getElementById('mUSICdesc');
    let mPic = document.getElementById('musicPic');
    let Mntl = document.getElementById('musictlte');
    let msyr = document.getElementById('musicyr');
    let mp3 = document.getElementById('mpthree');


    let musicApp = {  
      "MusicId": MusicId.value,      
      "mneym": mneym.value,
      "Mdesc": Mdesc.value,
      "mPic": mPic.value,
      "Mntl": Mntl.value,
      "msyr": msyr.value,
      "mp3": mp3.value,


    };


    this.musicApp.push(musicApp);

    
    MusicId.value = mp3.value = msyr.value = Mntl.value =MusicId.value = mneym.value = Mdesc.value = mPic.value = ''; 
  } 


  createLyrics(){

    let titlelyrics = document.getElementById('Titlelryc');
    let titlename = document.getElementById('titlnme');



    let lyrics = {      
     "titlelyrics": titlelyrics.value,
     "titlename": titlename.value,


     
   };


   this.lyrics.push(lyrics);


   titlename.value = titlelyrics.value = ''; 
 } 


}

class Component extends App{
  constructor(){

    super();
  }

  MusicDesign(){
    let html = `

    <nav>
    <div class="nav-wrapper blue-grey darken-4">
    <a href="#" onclick="component.MusicList()" class="brand-logo"> My Myx</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
    <li><a href="#" onclick="component.Home()">Home</a></li>
    <li><a href="#" onclick="component.MusicList()">Music Library</a></li>  
    <li><a href="#" onclick="component.CreateMustic()">Create Music Library</a></li>
    <li><a href="#" onclick="component.lyricsPage()">My Lyrics</a></li>





    </ul>


    </div>
    </nav>


    </div>

    <div class="slider">
    <ul class="slides">
    <li>

    <img src="img/giphy1.gif"> 
    <div class="caption center-align">
    </div>
    </li>
    <li>
    <img src="img/giphy3.gif"> 
    <div class="caption left-align">
    </div>
    </li>
    <li>
    <img src="img/giphy2.gif"> 
    <div class="caption right-align">
    </div>
    </li>
    <li>
    <img src="img/giphy.gif"> 
    <div class="caption center-align">
    </div>
    </li>
    </ul>
    </div>
    </div>

    <div id="Home"></div>
    <div id="RecentActivity"></div>
    <div id="ViewMusic"></div>
    <div id="MusicList"></div>
    <div id="updateMusic"></div>
    <div id="CreateMustic"></div>
    <div id="lyricsPage "></div>



    <footer class="page-footer  blue accent-4">
    <div class="container">
    <div class="row">
    <div class="col l6 s12">
    <h4 class="white-text">My Myx</h4>
    <h5 class="white-text">Music App</h5>

    <p class="grey-text text-lighten-4">Your creation, Your music.</p>
    </div>
    <div class="col l4 offset-l2 s12">
    <h5 class="white-text">Happy Viewing!</h5>
    <p class="white-text">Made By Vince Kobe Cacar</p>


    </div>
    </div>
    </div>
    <div class="footer-copyright">
    <div class="container">
    © 2016 Alrights Reserved
    </div>
    </div>
    </footer>


    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.RecentActivity();    
  }

  RecentActivity(){

    let html = `

    <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="https://akosimacoy.files.wordpress.com/2015/04/make-your-own-kind-of-music.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/musics.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/sing.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/My.jpg"></a>
    </div>
    <div class="row">
    `;

    let r = this.musicApp;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 4)break;
      html+= `
      <div class="col s8 m6">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].mPic}">
      <span class="card-title">${r[i].mneym}</span>
      </div>
      <div class="card-content">
      <p>${r[i].Mntl}</p>
      <p>${r[i].msyr}</p>
      <p>${r[i].Mdesc}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.ViewMusic(${r[i].MusicId})">Details</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("RecentActivity"));
  }

  ViewMusic(MusicId){
    let r = this.MusicSearchName(MusicId);

    let html = `

    <div class="row">       
    <div class="col s12 m12">
    <div class="card horizontal small">
    <div class="card-image">
    <img src="${r.mPic}">
    </div>
    <div class="card-stacked">
    <div class="card-content">
    <h5 class="center-align">${r.mneym}</h5>
    <p>${r.Mntl}</p>
    <p>${r.msyr}</p>
    <p>${r.Mdesc}</p>

    </div>
    <div class="card-action small">    
    <audio controls>

    <source src="${r.mp3}" type="audio/mpeg">


    </audio>            
    <span onclick="component.updateMusic(${MusicId})" class="new badge small red" data-badge-caption="">Update</span>
    <span onclick="component.DeleteMusic(${r.MusicId})" class="new badge small red" data-badge-caption="">Delete Music</span>
    <span onclick="component.MusicList()" class="new badge small" data-badge-caption="">Back to Music Library</span>
    </div>            
    </div>     
    </div>   

    </div>      
    </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("ViewMusic"));
    $('#ViewMusic').show();
    $('#RecentActivity').hide();
    $('#MusicList').hide();
    $('#updateMusic').hide();
    $('#CreateMustic').hide();
    $('#lyricsPage').hide();
    $('#Home').hide();



  }

  MusicList(){
    let html = `

    <br/>
    <nav>
    <div class="nav-wrapper white">

    <div class="input-field">       
    <input onkeyup="component.MusicInventory(this.value)" id="search" type="search" placeholder="Search" required>
    <label for="search"><i class="material-icons">search</i></label>
    <i class="material-icons">close</i>
    </div>

    </div>
    </nav>
    <br/>

    `;

    html += `

    <div class="row" id="MusicInventory">
    `;
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      html+= `

      <div class="col s6 m6">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].mPic}">
      <span class="card-title">${r[i].mneym}</span>
      </div>
      <div class="card-content">
      <p>${r[i].Mntl}</p>
      <p>${r[i].msyr}</p>
      <p>${r[i].Mdesc}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.ViewMusic(${r[i].MusicId})">Details</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("MusicList"));
    $('#MusicList').show();
    $('#ViewMusic').hide();
    $('#updateMusic').hide();
    $('#RecentActivity').hide();
    $('#CreateMustic').hide();    
    $('#lyricsPage').hide();    
    $('#Home').hide();


  }

  MusicInventory(mneym){
    let html = ``;
    let r = this.MusicSearch(mneym);
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
      <div class="card small hoverable">
      <div class="card-image">
      <img src="${r[i].mPic}">
      <span class="card-title">${r[i].mneym}</span>
      </div>
      <div class="card-content">
      <p>${r[i].Mntl}</p>
      <p>${r[i].msyr}</p>
      <p>${r[i].Mdesc}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.ViewMusic(${r[i].MusicId})">More</a>
      </div>
      </div>
      </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("MusicInventory"));
    $('#MusicList').show();
    $('#ViewMusic').hide();
    $('#updateMusic').hide();
    $('#RecentActivity').hide();  
    $('#CreateMustic').hide();
    $('#lyricsPage').hide();    
    $('#Home').hide();    


  }

  CreateMustic(){
    let html = `

    <br>
    <div class="form-style-3">
    <fieldset>
    <div>

    <center><h1>Create Music Library</h1></center>
    <center><label for="musicid"><span>Music Id <span class="required">*</span></span><input disabled value="${this.musicApp.length+1}" id="musicid" type="text" ></label></center>
    <center><label for="mUsic"><span>Artist</span><input type="email" id="mUsic" /> </label></center>
    <center><label for="musicPic"><span>Picture</span><input type="email" id="musicPic" /> </label></center>
    <center><label for="musicyr"><span>Year</span><input type="email" id="musicyr" /> </label></center>
    <center><label for="musictlte"><span>Title</span><input type="email" id="musictlte" /> </label></center>
    <center><label for="mpthree"><span>Add Mp3 </span><input type="email" id="mpthree" placeholder="Enter File url. example: mp3/all.mp3 (Music path in folder)" /> </label></center>
    <center><label for="mUSICdesc"><span>Description </span><input type="text" id="mUSICdesc"></label></center>

    <div class="center-align">

    <button onclick="component.MusicList()" class="btn waves-effect waves-light">Back</button>
    <button onclick="component.createDesign()" class="btn waves-effect waves-light">Save</button>
    </div>
    </fieldset>
    </div>
    </div>
    </br>
    `;

    this.reRender(`
      ${html}
      `,document.getElementById("CreateMustic"));
    $('#CreateMustic').show();
    $('#MusicList').hide();
    $('#ViewMusic').hide();
    $('#updateMusic').hide();
    $('#RecentActivity').hide();  
    $('#lyricsPage').hide(); 
    $('#Home').hide();   





  }

  lyricsPage(){
    let html =`
    <div class="row">

    `;


    for(let i=0;i<this.lyrics.length;i++){
      html+=`



      <div class="col s6 m6">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${this.lyrics[i].pic}">
      <span class="card-title">${this.lyrics[i].titlename}</span>
      </div>
      <div class="card-content">

      </div>
      <div class="card-action">
      <a href="${this.lyrics[i].link}">View Lyrics</a>
      </div>
      </div>
      </div>

      `;
    }


    this.reRender(`
      ${html}
      `,document.getElementById("CreateMustic"));
    $('#CreateMustic').show();
    $('#MusicList').hide();
    $('#updateMusic').hide();
    $('#ViewMusic').hide();
    $('#RecentActivity').hide(); 
    $('#aboutMe').hide();  
    $('#Home').hide();  
    $('#lyricsPage').show();





  }

  DeleteMusic(key){
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      if(r[i].MusicId == key){
        this.musicApp.splice(i,1);
        break;
      }
    }   
    this.MusicList();
  }




  MusicSearchName(MusicId){
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      if(MusicId==r[i].MusicId){
        return r[i];
      }
    }
  } 


  MusicSearch(mneym){
    let objects = [];
    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].mneym.toUpperCase().indexOf(mneym.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }



  updateMusicApp(MusicId){

    MusicId = MusicId+1;
    let musicDummy = {
      "MusicId" :  MusicId,
      "mneym" : $('#name').val(),
      "Mntl" : $('#title').val(),
      "msyr" : $('#year').val(),
      "Mdesc" : $('#desc').val(),
      "mPic" : $('#image').val(),
      "mp3" : $('#mp3').val()

    }

    let r = this.musicApp;
    for(let i=0;i<r.length;i++){
      if(r[i].MusicId == MusicId){
        r[i] = musicDummy;
        break;
      }
    }

    this.MusicList();
  }


  updateMusic(MusicId){

    MusicId = MusicId - 1;
    let html = `




    <br>
    <div class="form-style-3">
    <fieldset>
    <div>




    <center><h1>Update Music Library</h1></center>
    <center><span>Music Id</span><input disabled value="${this.musicApp.length+1}" id="musicid" type="text" ></label></center>
    <center><span>Artist</span><input type="email" id="name"  value="${this.musicApp[MusicId].mneym}"/> </label></center>
    <center><span>Title</span><input type="email" id="image"  value="${this.musicApp[MusicId].Mntl}" /> </label></center>
    <center><span>Year</span><input type="email" id="year" value="${this.musicApp[MusicId].msyr}"/> </label></center>
    <center><span>Picture</span><input type="email" id="title"value="${this.musicApp[MusicId].mPic}" /> </label></center>
    <center><span>Edit Mp3</span><input type="email"  id="mp3" value="${this.musicApp[MusicId].mp3}" placeholder="Enter File url. example: mp3/all.mp3 (Music path in folder)" /> </label></center>
    <center><span>Description </span><input type="text" id="desc" value="${this.musicApp[MusicId].Mdesc}"></label></center>

    <div class="center-align">

    <button onclick="component.updateMusicApp(${MusicId})" class="waves-effect blue waves-light btn">Update</a>
    </div>
    </fieldset>
    </div>
    </div>
    </br>


    `;  
    this.reRender(`

      ${html}

      `,document.getElementById("updateMusic"));   

    $('#CreateMustic').hide();
    $('#MusicList').hide();
    $('#ViewMusic').hide();
    $('#updateMusic').show();
    $('#RecentActivity').hide(); 
    $('#Home').hide();  
    $('#lyricsPage').hide();  
    $('#updateMusicApp').hide();

  }






  Home(){
    let html=`

    `;
    this.reRender(`
      ${html}
      `,document.getElementById("CreateMustic"));
    $('#CreateMustic').hide();
    $('#MusicList').hide();
    $('#ViewMusic').hide();
    $('#updateMusic').hide();
    $('#RecentActivity').show(); 
    $('#Home').hide();  
    $('#lyricsPage').hide();  




  }



} 
let component = new Component();
component.MusicDesign();