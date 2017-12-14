const initialdata = {
    books: [
        {"author": "Shakespeare", "book":"Hamlet", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"},
        {"author": "Newton", "book":"Principia", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"},
        {"author": "Shelly", "book":"Frankenstein", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"},
        {"author": "Powell", "book":"Thin Man", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"}
    ],
    teams: [
        {"name":"Mount Olympus", "id": 4202, "bar":"Lone Palm", "wins": 4, "points": 24, "players": [6794,6793,6991,6190,6155]},
        {"name":"Ragnarok", "id": 4201, "bar":"Latin American", "wins": 5, "points": 33, "players": [2589,2642,289,25,1941,2081]},
        {"name":"Ben'Dovre", "id": 4111, "bar":"Dovre", "wins": 3, "points": 21, "players": [1794, 1793,1991,2124,2155]},
        {"name":"Pyramids", "id":4103, "bar":"Benders", "wins": 3, "points": 19, "players": [3278,3204,3525,39,3510]}
    ],
    players: [
        {"name":"Dan S", "id": 1794, "team": 4111, "skill": 5, "wins": 3, "points": 21},
        {"name":"George R", "id": 1793, "team": 4111, "skill": 5, "wins": 2, "points": 31},
        {"name":"Dave M", "id": 1991, "team": 4111, "skill": 4, "wins": 4, "points": 21},
        {"name":"Mandy H", "id": 1190, "team": 4111, "skill": 4, "wins": 6, "points": 21},
        {"name":"Kyle D", "id": 2124, "team": 4111, "skill": 3, "wins": 3, "points": 21},
        {"name":"Jason M", "id": 2144, "team": 4111, "skill": 5, "wins": 2, "points": 21},
        {"name":"Jenner D", "id": 2155, "team": 4111, "skill": 3, "wins": 4, "points": 21},
        {"name":"Ares", "id": 6794, "team": 4201, "skill": 5, "wins": 3, "points": 21},
        {"name":"Zeus", "id": 6793, "team": 4201, "skill": 5, "wins": 6, "points": 21},
        {"name":"Hera", "id": 6991, "team": 4201, "skill": 4, "wins": 3, "points": 21},
        {"name":"Hades", "id": 6190, "team": 4201, "skill": 4, "wins": 3, "points": 21},
        {"name":"Apollo", "id": 6124, "team": 4201, "skill": 3, "wins": 3, "points": 21},
        {"name":"Athena", "id": 6144, "team": 4201, "skill": 6, "wins": 3, "points": 21},
        {"name":"Heracles", "id": 6155, "team": 4201, "skill": 3, "wins": 3, "points": 21},
        {"name":"Thor", "id": 2589, "team": 4102, "skill": 5, "wins": 3, "points": 21},
        {"name":"Odin", "id": 2642, "team": 4102, "skill": 6, "wins": 3, "points": 21},
        {"name":"Freya", "id": 289, "team": 4102, "skill": 6, "wins": 3, "points": 21},
        {"name":"Loki", "id": 25, "team": 4101, "skill": 3, "wins": 3, "points": 21},
        {"name":"Hel", "id": 1941, "team": 4102, "skill": 3, "wins": 3, "points": 21},
        {"name":"Baldur", "id": 2081, "team": 4102, "skill": 3, "wins": 3, "points": 21},
        {"name":"Sif", "id": 1509, "team": 4102, "skill": 5, "wins": 3, "points": 21},
        {"name":"Heimdal", "id": 642, "team": 4102, "skill": 4, "wins": 3, "points": 21},
        {"name":"Horus", "id": 3278, "team": 4103, "skill": 4, "wins": 3, "points": 21},
        {"name":"Osiris", "id": 3204, "team": 4103, "skill": 6, "wins": 3, "points": 21},
        {"name":"Bastet", "id": 3693, "team": 4103, "skill": 5, "wins": 3, "points": 21},
        {"name":"Isis", "id": 3525, "team": 4103, "skill": 6, "wins": 3, "points": 21},
        {"name":"Toth", "id": 39, "team": 4103, "skill": 3, "wins": 3, "points": 21},
        {"name":"Seth", "id": 3510, "team": 4103, "skill": 3, "wins": 3, "points": 21},
        {"name":"Ptah", "id": 3680, "team": 4103, "skill": 5, "wins": 3, "points": 21},
        {"name":"Anubis", "id": 3966, "team": 4103, "skill": 4, "wins": 3, "points": 21},
        {"name":"Jupitper", "id": 4848, "team": 4104, "skill": 5, "wins": 3, "points": 21},
        {"name":"Vulcan", "id": 4946, "team": 4104, "skill": 5, "wins": 3, "points": 21},
        {"name":"Venus", "id": 4388, "team": 4104, "skill": 5, "wins": 3, "points": 21},
        {"name":"Luna", "id": 4063, "team": 4104, "skill": 2, "wins": 3, "points": 21},
        {"name":"Neptune", "id": 4068, "team": 4104, "skill": 2, "wins": 3, "points": 21},
        {"name":"Ceres", "id": 4211, "team": 4104, "skill": 4, "wins": 3, "points": 21},
        {"name":"Io", "id": 4300, "team": 4104, "skill": 3, "wins": 3, "points": 21},
        {"name":"Saturn", "id": 4067, "team": 4104, "skill": 3, "wins": 3, "points": 21}
    ],
    news: [],
    matches: [
        { "number": 1, "hostteam": 4104, "visitingteam": 4111, "winner": 4111, "hostscore": 5, "visitorscore": 10,
        "games": [
            {"number": 1, "player1": 4111, "player2": 6794, "winner": 4111, "turns": [
                {"player1": "MISS"}, {"player2": "MISS"}, {"player1": "DEFENSIVE"}, {"player2": "MISS"}, {"player1": "WIN"}] }
        ]}
    ]
};

export default initialdata;
