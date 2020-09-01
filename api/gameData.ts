export interface IData {
  data: IGame[];
}

export interface IGame {
  ht: string;
  ft: string;
  sim: ISim[];
}

export interface ISim {
  time: number;
  score: string;
}

export const gameData: IData = {
  data: [
    {
      ht: "Great first period for team 1!!",
      ft: "Amazing comeback, its a draw!",
      sim: [
        {
          time: 5,
          score: "1-0",
        },
        {
          time: 25,
          score: "2-0",
        },
        {
          time: 55,
          score: "2-1",
        },
        {
          time: 75,
          score: "2-2",
        },
      ],
    },
    {
      ht: "Team 1 taking the lead!",
      ft: "And Team 1 takes it away!",
      sim: [
        {
          time: 36,
          score: "1-0",
        },
      ],
    },
    {
      ht: "no score so far...",
      ft: "Team 2 wins the game 0-2!!",
      sim: [
        {
          time: 46,
          score: "0-1",
        },
        {
          time: 68,
          score: "0-2",
        },
      ],
    },
    {
      ht: "Good start for team 1!",
      ft: "Team 1 on shows its best football!!",
      sim: [
        {
          time: 6,
          score: "1-0",
        },
        {
          time: 48,
          score: "1-1",
        },
        {
          time: 62,
          score: "2-1",
        },
      ],
    },
    // {
    //   ht: "Great first period for team 1!!",
    //   ft: "Team 2 for the win!",
    //   sim: [
    //     {
    //       time: 18,
    //       score: "1-0",
    //     },
    //     {
    //       time: 33,
    //       score: "2-0",
    //     },
    //     {
    //       time: 55,
    //       score: "2-1",
    //     },
    //   ],
    // },
  ],
};
