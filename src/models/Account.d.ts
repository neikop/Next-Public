type AccountInfoType = 'EMPLOYEE';

type AccountSexType = 'MALE' | 'FEMALE';

type AccountInfo = DBTimeAudit & {
  id: number;
  accountInfoType: AccountInfoType;
  avatar: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  adress: string;
  sex: AccountSexType;
  dateOfBirth: ISODateString;
};

type AccountItem = DBTimeAudit & {
  id: number;
  username: string;
  isAdmin: boolean;
  roels: RoleType[];
};

type AccountPaginateParams = PaginateParams & {
  dateFrom?: ISOStrin;
  dateTo?: ISODateString;
};

type AccountCreateBody = {
  creator: number;
  username: string;
  password: string;
  isAdmin: boolean;
  roles?: RoleType[];
  accountInfo: number;
};

type AccountUpdateBody = ByID & {
  creator: number;
  username: string;
  password: string;
  isAdmin: boolean;
  roles?: RoleType[];
  accountInfo: number;
};
