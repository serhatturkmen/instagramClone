export const data = {
  users: [
    {
      userid: 1,
      name: "Serhat TÜRKMEN",
      username: "serhat_trkmn",
      followers: [2, 3, 4, 5],
      following: [],
      photo: require("../assets/profile/user1_profile.jpg"),
      posts: [
        {
          postid: 1,
          content: "Bu içerik 1. örnektir.",
          location: "İstanbul, Türkiye",
          media:
            "https://images.unsplash.com/photo-1606498236504-030a628c0047?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWRpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          like: [2, 3, 4],
          comment: [
            {
              id: 1,
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-21T22:10:08+03:00",
              like: [3],
            },
          ],
          createDate: "2021-07-20T22:10:08+03:00",
        },
        {
          postid: 2,
          content: "Bu içerik 2. örnektir.",
          location: "Siirt, Türkiye",
          media:
            "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          like: [2, 3, 4],
          comment: [
            {
              id: 1,
              userid: 2,
              content: "It's great.",
              createDate: "2021-07-25T23:10:08+03:00",
              like: [3],
            },
          ],
          createDate: "2021-07-25T22:10:08+03:00",
        },
        {
          postid: 3,
          content: "Bu içerik 3. örnektir.",
          location: "Çorum, Türkiye",
          media:
            "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          like: [2, 3, 4],
          comment: [
            {
              id: 1,
              userid: 2,
              content: "It's amazing.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
          createDate: "2021-07-25T22:00:08+03:00",
        },
        {
          postid: 4,
          content: "Bu içerik 4. örnektir.",
          location: "Bolu, Türkiye",
          media:
            "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          like: [2, 3, 4],
          comment: [
            {
              id: 1,
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:50:08+03:00",
              like: [3],
            },
          ],
          createDate: "2021-07-25T22:10:08+03:00",
        },
        {
          postid: 5,
          content: "Bu içerik 5. örnektir.",
          location: "İstanbul",
          media:
            "https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          like: [2, 3, 4],
          comment: [
            {
              id: 1,
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
            {
              id: 2,
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
            {
              id: 3,
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
          createDate: "2021-07-25T22:10:08+03:00",
        },
      ],
      reels: [
        {
          reelid: 1,
          content: "Az ayakkabı yırtmadık şişe yüzünden :D",
          thumbnails: require("../assets/reels/reel_photo.jpg"),
          media: require("../assets/reels/reel1.mp4"),
          watch: [2, 3, 4],
          like: [2, 3, 4],
          comment: [
            {
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
        },
        {
          reelid: 2,
          content: "Bu reels 2. örnektir.",
          thumbnails: require("../assets/reels/reel_photo.jpg"),
          media: require("../assets/reels/reel2.mp4"),
          watch: [1, 2, 3],
          like: [2, 3, 4],
          comment: [
            {
              userid: 2,
              content: "It's great.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
        },
        {
          reelid: 3,
          content: "Bu reels 3. örnektir.",
          thumbnails: require("../assets/reels/reel_photo.jpg"),
          media: require("../assets/reels/reel3.mp4"),
          watch: [1, 2, 3, 4],
          like: [2, 3, 4],
          comment: [
            {
              userid: 2,
              content: "It's amazing.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
        },
        {
          reelid: 4,
          content: "Bu reels 4. örnektir.",
          thumbnails: require("../assets/reels/reel_photo.jpg"),
          media: require("../assets/reels/reel3.mp4"),
          video:
            "https://instagram.fist13-1.fna.fbcdn.net/v/t50.2886-16/213199782_1188898514889355_3234892284367467519_n.mp4?_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=58xA717pm4gAX8j-vae&edm=AP_V10EBAAAA&ccb=7-4&oe=60EEAEAE&oh=189a962f279be8fd18185e86aa02aa3a&_nc_sid=4f375e",
          watch: [1, 2, 3, 4],
          like: [2, 3, 4],
          comment: [
            {
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
        },
        {
          reelid: 5,
          content: "Bu reels 5. örnektir.",
          thumbnails: require("../assets/reels/reel_photo.jpg"),
          media: require("../assets/reels/reel3.mp4"),
          video:
            "https://instagram.fist13-1.fna.fbcdn.net/v/t50.2886-16/212663990_145206394372237_8608727290204784579_n.mp4?_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=1xlcmPX-l0sAX_J66dw&edm=AP_V10EBAAAA&ccb=7-4&oe=60EF0351&oh=0fa5bd986db357b2b22aaf9640aba18e&_nc_sid=4f375e",
          watch: [1, 2, 3, 4],
          like: [2, 3, 4],
          comment: [
            {
              userid: 2,
              content: "It's awesome.",
              createDate: "2021-07-25T22:10:08+03:00",
              like: [3],
            },
          ],
        },
      ],
      stories: [
        {
          storyid: 1,
          photo:
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          storyid: 2,
          photo:
            "https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          storyid: 3,
          photo:
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
    {
      userid: 2,
      name: "Jonh DOE",
      username: "john_doe",
      followers: [3, 4, 5],
      following: [1],
      photo: require("../assets/profile/user2_profile.jpg"),
      stories: [
        {
          storyid: 1,
          photo:
            "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          storyid: 2,
          photo:
            "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          storyid: 3,
          photo:
            "https://images.unsplash.com/photo-1560535733-540e0b0068b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          storyid: 4,
          photo:
            "https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZlbWFsZXxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
  ],
};
