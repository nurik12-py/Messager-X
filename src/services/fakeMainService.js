const users = {
  "appsammic1@gmail.com": {
    _id: "a123",
    name: "Nursiltan",
    email: "appsammic1@gmail.com",
    photoUrl: "https://picsum.photos/300/300",
    phone: "+77052824212",
    country: "Uzbekistan, Tashkent",
    friends: ["viktor@gmail.com", "messi@mail.com"],
    favoriteFriends: ["viktor@gmail.com", "messi@mail.com"],
    chats: ["uid_nurik_victor"],
  },
  "viktor@gmail.com": {
    _id: "a126",
    name: "Viktor",
    email: "viktor@gmail.com",
    photoUrl: "https://picsum.photos/300/300",
    chats: ["uid_nurik_victor"],
  },
  "messi@mail.com": {
    _id: "amess",
    name: "Leo",
    email: "messi@mail.com",
    photoUrl: "www.instagram.com/messi",
  },
};

const chats = {
  uid_nurik_victor: {
    user1: "appsammic1@gmail.com",
    user2: "victor@gmail.com",
    name1: "Nursultan",
    name2: "Victor",
    photo1: "https://picsum.photos/300/300",
    photo2: "https://picsum.photos/300/300",

    messages: [
      {
        message: "Hello, Victor",
        owner: "appsammic1@gmail.com",
        dateSent: "10:10 2020-07-19",
      },
      {
        message: "Hello, Nurik",
        owner: "victor@gmail.com",
        dateSent: "10:11 2020-07-19",
      },
      {
        message: "Hello, Victor",
        owner: "appsammic1@gmail.com",
        dateSent: "10:10 2020-07-19",
      },
      {
        message: "Hello, Nurik",
        owner: "victor@gmail.com",
        dateSent: "10:11 2020-07-19",
      },
      {
        message: "Hello, Victor",
        owner: "appsammic1@gmail.com",
        dateSent: "10:10 2020-07-19",
      },
      {
        message: "Hello, Nurik",
        owner: "victor@gmail.com",
        dateSent: "10:11 2020-07-19",
      },
      {
        message: "Hello, Victor",
        owner: "appsammic1@gmail.com",
        dateSent: "10:10 2020-07-19",
      },
      {
        message: "Hello, Nurik",
        owner: "victor@gmail.com",
        dateSent: "10:11 2020-07-19",
      },
      {
        message: "Hello, Victor",
        owner: "appsammic1@gmail.com",
        dateSent: "10:10 2020-07-19",
      },
      {
        message: "Hello, Nurik",
        owner: "victor@gmail.com",
        dateSent: "10:11 2020-07-19",
      },
    ],
  },
};

export function getUser(email) {
  return users[email];
}

export function getChat(chat_id) {
  return chats[chat_id];
}

export function getAllFriendsFor(email) {
  const friends = users[email].friends.map((friend) => {
    let updated = { ...getUser(friend) };
    delete updated["chats"];
    return updated;
  });
  return friends;
}

export function getChatsFor(email) {
  const chats = getUser(email)["chats"].map((chatId) => getChat(chatId));
  return chats;
}
