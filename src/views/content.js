export default {
    projects:[
      {
        id: 1,
        title: 'Junubi Tunes',
        sort_description: `<span class="highlight"> Junubi Tunes </span> is amazing music application. For listening top trending songs all around the world`,
        website_link: 'https://sudosounds.net/',
        github_link: ``,
        images: [
          'junubi/junubi1',
          'junubi/junubi2',
          'junubi/junubi3',
          'junubi/junubi4'
        ],
        about_project: `Junubi Tunes is music application for Web and Mobile users. In which have latest songs, Albums, Artist, Genres, Playlists and lots of features.
        <br><br>
        Junubi Tunes is music application for Web and Mobile users. In which have latest songs, Albums, Artist, Genres, Playlists and lots of features.`,
        tech_info: [
            'Laravel',
            'SCSS',
            'Bootrsrap',
            'Jplayer'
        ],
        resorce: `Link: <a target="_blank" class="highlight" href="https://sudosounds.net/">Weblink</a>`,
      }, 
      {
        id: 2,
        title: 'Alpha-Zero',
        website_link: 'https://github.com/fahim9898/alpha_zero',
        github_link: `https://github.com/fahim9898/alpha_zero`,
        images: [
          'alpha-zero/alpha-zero-1',
          'alpha-zero/alpha-zero-2',
          'alpha-zero/alpha-zero-3',
          // 'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e',
          // 'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2FPicture1.png?alt=media&token=1559a0a3-415f-4352-843b-ebf5e6f417f4',
          // 'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2FPicture2.png?alt=media&token=e588b6f1-f2cd-4dde-8c80-ea7e4381d526'
        ],
        resorce: `<a target="_blank" class="highlight" href="https://jonathan-hui.medium.com/alphago-zero-a-game-changer-14ef6e45eba5">Basic about Alpha-Zero</a>
                  <br> <a target="_blank" class="highlight" href="https://www.youtube.com/watch?v=9XVmTMv2TOE">Tanmay Bakshi youtube video</a>`,
        sort_description: 'Alpha zero is the game bot which plays Tic-Tac-Toe game. A goal of the bot is to beat humans in Tic-Tac-Toe.',
        about_project: `Alpha zero is the game bot which plays Tic-Tac-Toe game. A goal of the bot is to beat humans in Tic-Tac-Toe. I choose Tic-Tac-Toe game because of limitation of CPU power. Alpha-zero bot applies to almost all board games like Chess, Go and count four etc. 
                        <br><br> This game environment has 5 rows, 5 columns. To win this game player has to match 4 "O"s and 4 "X"s. It makes this game more difficult than normal Tic-Tac-Toe.
                        <br><br> During training alpha zero modal, Algorithm generates its dataset during run time base on the Monte Carlo tree search and policy evaluation. Also, for the support of web applications. I make rest API in a flask which takes Tic-Tac-Toe as input state and last player turn as input and return new action which contains the position of "X" or "O"..
                        `,
        tech_info: [
          'Python',
          'Keras',
          'Tensorflow',
          'Flask',
          'Javascript'
        ],
      },
    ]
}