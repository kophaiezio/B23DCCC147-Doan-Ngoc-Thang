const FAQ = [
    {
      question: 'What is Formula 1?',
      answers: [{ type: 'text', content: `Formula 1 (F1) is the pinnacle of international single-seater auto racing, organized and regulated by the Fédération Internationale de l'Automobile (FIA). The sport consists of a series of races, known as Grand Prix, which are held worldwide on specially constructed circuits and sometimes on closed city streets. These races are known for their high speeds, technical precision, and intense competition.` },
      { type: 'text', content: `F1 cars are engineering marvels, designed to be extremely lightweight and aerodynamically efficient. They are powered by hybrid engines that combine internal combustion engines with electric motors, allowing them to achieve speeds exceeding 355 km/h. The combination of cutting-edge technology, skilled driving, and strategic team management makes F1 a highly challenging and exciting sport.` }],

      src: 'https://static01.nyt.com/images/2024/09/21/multimedia/21sp-singapore-battle-inyt-05-wqcg/21sp-singapore-battle-inyt-05-wqcg-jumbo.jpg'
    },
    {
      question: 'Why is F1 Popular?',
      answers: [
        { type: 'text', content: `F1's popularity stems from several factors:` },
        { type: 'points', content: { bold: 'Technological Innovation:' , light:  'F1 is at the forefront of automotive technology, with teams constantly pushing the boundaries of engineering. Innovations in F1 often trickle down to consumer vehicles, making the sport relevant to everyday life.'} },
        { type: 'points', content: { bold: 'Skill and Precision:', light:'Driving an F1 car requires extraordinary skill, precision, and physical endurance. The drivers are among the best in the world, and their abilities are showcased in every race.' }},
        { type: 'points', content: { bold: 'Global Reach:', light:'F1 races are held all over the world, from Europe to Asia, the Americas, and the Middle East. This global presence helps attract a diverse and widespread fan base.' }},
        { type: 'points', content: { bold: 'Drama and Rivalries:', light:` F1 is not just about racing; it's also about the drama and rivalries that unfold both on and off the track. Teams and drivers constantly vie for supremacy, leading to compelling narratives and storylines.` }},
        { type: 'points', content: { bold: 'High Stakes:', light:' The combination of speed, danger, and the potential for spectacular crashes adds an element of excitement and unpredictability to each race.' }},
      ],
      src: 'https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1709392049/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg'
    },
    {
      question: 'What and Who is FIA?',
      answers: [
        { type: 'text', content: `The Fédération Internationale de l'Automobile (FIA) is the governing body for world motorsport. Founded in 1904, the FIA oversees the rules, regulations, and standards for various forms of racing, including Formula 1.` },
        { type: 'text', content: `The FIA is responsible for ensuring the safety, fairness, and integrity of motorsport events worldwide. It establishes technical and sporting regulations that all teams and drivers must follow. The FIA also works to promote responsible and sustainable mobility globally, advocating for road safety and environmental sustainability.` },
        { type: 'text', content: `In addition to its regulatory functions, the FIA organizes and sanctions numerous racing championships and events, providing a structured and competitive environment for motorsport.` }
      ],
      src: 'https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2022%2F10%2F10160207%2Ffia-flag-dutch-grand-prix-planet-f1.jpg'
    },
    {
      question: 'How does a team or player win in F1?',
      answers: [
        { type: 'text', content: `Winning in F1 can be achieved on multiple levels:` },
        {
          type: 'array', content: 
          [
            `Winning a Race: Each Grand Prix has a winner, determined by the driver who crosses the finish line first after completing the required number of laps. Points are awarded to the top finishers, contributing to their overall standing in the championship.`,
            `Driver’s Championship: The Driver’s Championship is awarded to the driver who accumulates the most points over the course of the season. Points are earned based on finishing positions in each race, with higher placements earning more points. Consistency, skill, and strategy are key to securing the championship.`,
            `Constructor’s Championship: The Constructor’s Championship is awarded to the team (or constructor) that accumulates the most points over the season. Points are earned based on the finishing positions of both of the team's drivers in each race. This championship highlights the importance of teamwork, car performance, and overall team strategy.`
          ]
        },
      ],
      src: 'https://www.insidehook.com/wp-content/uploads/2022/10/ferrari.jpg'
    }
  ]

export {FAQ} ;