export const usersData = [
  {
    name: "Angela Gray",
    imgUrl: "/images/avatar-angela-gray.webp",
  },
  {
    name: "Anna Kim",
    imgUrl: "/images/avatar-anna-kim.webp",
  },
  {
    name: "Jacob Thompson",
    imgUrl: "/images/avatar-jacob-thompson.webp",
  },
  {
    name: "Kimberly Smith",
    imgUrl: "/images/avatar-kimberly-smith.webp",
  },
  {
    name: "Mark Webber",
    imgUrl: "/images/avatar-mark-webber.webp",
  },
  {
    name: "Nathan Peterson",
    imgUrl: "/images/avatar-nathan-peterson.webp",
  },
  {
    name: "Rizky Hasanuddin",
    imgUrl: "/images/avatar-rizky-hasanuddin.webp",
  },
]

export const notifData = [
    {
        user: usersData.find(user => user.name === "Mark Webber"),
        type: "post",
        data: {
            postTitle: "My first tournament today!"
        },
        time: "1m"
    },
    {
        user: usersData.find(user => user.name === "Angela Gray"),
        type: "follow",
        data: {
        },
        time: "5m"
    },
    {
        user: usersData.find(user => user.name === "Jacob Thompson"),
        type: "group",
        data: {
            groupName: "Chess Club"
        },
        time: "1 day"
    },
    {
        user: usersData.find(user => user.name === "Rizky Hasanuddin"),
        type: "message",
        data: {
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        },
        time: "5 days"
    },
    {
        user: usersData.find(user => user.name === "Kimberly Smith"),
        type: "img-comment",
        data: {
            imgUrl: "/images/image-chess.webp"
        },
        time: "1 week"
    },
    {
        user: usersData.find(user => user.name === "Nathan Peterson"),
        type: "post",
        data: {
            postTitle: "5 end-game strategies to increase your win rate"
        },
        time: "2 weeks"
    },
    {
        user: usersData.find(user => user.name === "Anna Kim"),
        type: "group",
        data: {
            groupName: "Chess Club"
        },
        time: "2 weeks"
    },
]