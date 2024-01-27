const songList = document.querySelector(".top-songs-list");
console.log(window.innerWidth);

const topSongs = [
  {
    index: 1,
    imageLink:
      "https://images.unsplash.com/photo-1531777992189-ad52457fbe93?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Castle Doors Fall Down",
    songArtist: "Shadience",
    totalTime: "6:25",
  },
  {
    index: 2,
    imageLink:
      "https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Green POORridge",
    songArtist: "Darude",
    totalTime: "3:45",
  },
  {
    index: 3,
    imageLink:
      "https://images.unsplash.com/photo-1608094510969-00a4353cea2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Never Saw It",
    songArtist: "AI's Kidz",
    totalTime: "4:32",
  },
  {
    index: 4,
    imageLink:
      "https://images.unsplash.com/photo-1531777992189-ad52457fbe93?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "WanderLand (Live Version)",
    songArtist: "Shadience",
    totalTime: "3:23",
  },
];

topSongs.forEach((song, index) => {
  songList.innerHTML += `
    <div class="song-item">
        <div>
            <p>0${index + 1}</p>
            <div class="small-img-container">
                <img src="${song.imageLink}" alt="album image" />
            </div>
            <div class="song-info">
                <p class="top-song-title">${song.songName}</p>
                <p class="top-song-artist">${song.songArtist}</p>
            </div>
        </div>
        <div>
            <p>${song.totalTime}</p>
            <i class="bx bx-play-circle"></i>
            <i class="bx bx-list-plus"></i>
        </div>
    </div>
    `;
});
