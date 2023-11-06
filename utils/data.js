const users = [
    {
        id: 1,
        name: 'Jane Doe',
        email: 'user1@gmail.com',
        thoughts: [1, 2],
        friends: [2, 3],
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'user2@gmail.com',
        thoughts: [3, 4],
        friends: [1, 3],
    },
    {
        id: 3,
        name: 'James Doe',
        email: 'user3@gmail.com',
        thoughts: [5, 6],
        friends: [1, 2],
    }
];

const thoughts = [
    {
        id: 1,
        thoughtText: 'This is a test thought',
        createdAt: '2021-06-03T20:03:21.123Z',
        username: 'Jane Doe',
        reactions: [
            {
                id: 1,
                reactionBody: '😄',
                username: 'John Doe',
                createdAt: '2021-06-03T20:03:21.123Z',
            },
            {
                id: 2,
                reactionBody: '😡',
                username: 'James Doe',
                createdAt: '2021-06-03T20:03:21.123Z',
            },
        ],
    },
    {
        id: 2,
        thoughtText: 'This is another test thought',
        createdAt: '2021-06-03T20:03:21.123Z',
        username: 'John Doe',
        reactions: [
            {
                id: 1,
                reactionBody: '😄',
                username: 'Jane Doe',
                createdAt: '2021-06-03T20:03:21.123Z',
            },
            {
                id: 2,
                reactionBody: '😡',
                username: 'James Doe',
                createdAt: '2021-06-03T20:03:21.123Z',
            },
        ],
    },
    {
        id: 3,
        thoughtText: 'This is a third test thought',
        createdAt: '2021-06-03T20:03:21.123Z',
        username: 'John Doe',
        reactions: [
            {
                id: 1,
                reactionBody: '😄',
                username: 'Jane Doe',
                createdAt: '2021-06-03T20:03:21.123Z',
            },
            {
                id: 2,
                reactionBody: '😡',
                username: 'James Doe',
                createdAt: '2021-06-03T20:03:21.123Z',
            },
        ],
    },
];
const reactions = [
    {
        id: 1,
        reactionBody: '😄',
        username: 'Jane Doe',
        createdAt: '2021-06-03T20:03:21.123Z',
    },
    {
        id: 2,
        reactionBody: '😡',
        username: 'John Doe',
        createdAt: '2021-06-03T20:03:21.123Z',
    },
    {
        id: 3,
        reactionBody: '😄',
        username: 'James Doe',
        createdAt: '2021-06-03T20:03:21.123Z',
    },
];

const users = [];
const getRandName = () => {
    const names = ['Jane Doe', 'John Doe', 'James Doe'];
    return names[Math.floor(Math.random() * names.length)];
};
const getRandThoughts = () => {
    const thoughts = [
        'This is a test thought',
        'This is another test thought',
        'This is a third test thought',
    ];
    return thoughts[Math.floor(Math.random() * thoughts.length)];
};
const getRandReaction = () => {
    const reactions = ['😄', '😡'];
    return reactions[Math.floor(Math.random() * reactions.length)];
};

for (let i = 0; i < 10; i++) {
    users.push({
        id: i,
        name: getRandName(),
        email: `user${i + '@gmail.com'}`,
        thoughts: [i, i + 1],
        friends: [i + 1, i + 2],
    });
}
const thoughts = [];
for (let i = 0; i < 10; i++) {
    thoughts.push({
        id: i,
        thoughtText: getRandThoughts(),
        createdAt: new Date(),
        username: getRandName(),
        reactions: [
            {
                id: i,
                reactionBody: getRandReaction(),
                username: getRandName(),
                createdAt: new Date(),
            },
            {
                id: i + 1,
                reactionBody: getRandReaction(),
                username: getRandName(),
                createdAt: new Date(),
            },
        ],
    });
}   
const reactions = [];
for (let i = 0; i < 10; i++) {
    reactions.push({
        id: i,
        reactionBody: getRandReaction(),
        username: getRandName(),
        createdAt: new Date(),
    });
}

module.exports = { getRandName, getRandThoughts, getRandReaction}

