export function status(): Promise<any> {
  return new Promise((resolve, reject) => {
    (window as any).MDS.cmd(
      'status',
      function (response: any) {
        if (response.status) {
          return resolve(response.response);
        }

        return reject();
      }
    );
  });
}
