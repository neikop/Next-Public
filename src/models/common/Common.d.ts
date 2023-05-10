type ISODateString = string;

type ByID = {
  id: number;
};

type DBTimeAudit = {
  createdAt: ISODateString;
  createdBy?: number;
  updatedAt: ISODateString;
  updatedBy?: number;
};
