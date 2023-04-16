type ProfileType = UserType & {
  isLoggedIn: boolean;
  accessToken?: string;
  refreshToken?: string;
};

type UserType = {
  id?: string;
  address?: Address;
  username?: string;
};
