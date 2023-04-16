const write = (body: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(body);
    }, 600);
  });
};

export const driverApi = {
  write,
};
