import { client } from './axios';

const fetchAccounts = (body: AccountPaginateParams): Promise<PaginateResponse<AccountItem>> =>
  client.post(`/accounts/search`, body);
const createAccount = (body: AccountCreateBody): Promise<AccountInfo> => client.post(`/accounts`, body);
const updateAccount = ({ id, ...body }: AccountUpdateBody): Promise<AccountInfo> => client.put(`/accounts/${id}`, body);
const deleteAccount = ({ id }: ByID): Promise<null> => client.delete(`/accounts/${id}`);

const accountService = {
  fetchAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
};

export default accountService;
