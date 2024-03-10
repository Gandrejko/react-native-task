export type UserResponse = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  email: string;
  token: string;
};

export type IPost = {
  id: number;
  title: string;
  body: string;
};

export type IComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
