export type Profile={
    id: string;
    name: string;
    username: string;
    email: string;
    bio: string;
    imgUrl: string;
    followers: number;
    following: number;
    posts: number;
    isFollowing: boolean;
  };

  // sample data for profiles - 10
  
    export const profiles: Profile[] = [
    {
      id: "1",
      name: "John Doe",
      username: "johndoe",
      email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 100,
        following: 50,
        posts: 10,
        isFollowing: false,
    },
    {
      id: "2",
      name: "Jane Smith",
      username: "janesmith",
      email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 200,
        following: 100,
        posts: 20,
        isFollowing: true,
    },
    {
      id: "3",
        name: "Alice Johnson",
        username: "alicejohnson",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 300,
        following: 150,
        posts: 30,
        isFollowing: false,
    },
    {
      id: "4",
        name: "Bob Brown",
        username: "bobbrown",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 400,
        following: 200,
        posts: 40,
        isFollowing: true,
    },
    {
      id: "5",
        name: "Charlie Davis",
        username: "charliedavis",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 500,
        following: 250,
        posts: 50,
        isFollowing: false,
    },
    {
      id: "6",
        name: "Alice Johnson",
        username: "alicejohnson",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 300,
        following: 150,
        posts: 30,
        isFollowing: false,
    },
    {
      id: "7",
        name: "Bob Brown",
        username: "bobbrown",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 400,
        following: 200,
        posts: 40,
        isFollowing: true,
    },
    {
      id: "8",
        name: "Charlie Davis",
        username: "charliedavis",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://randomuser.me/api/portraits",
        followers: 500,
        following: 250,
        posts: 50,
        isFollowing: false,
    }
]
