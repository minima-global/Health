import { MaxContactsResponse, MaximaResponse, MDSResponse, StatusResponse } from "../types";

export function status(): Promise<StatusResponse> {
  return new Promise((resolve, reject) => {
    (window as any).MDS.cmd("status", function (response: any) {
      if (response.status) {
        return resolve(response.response);
      }

      return reject();
    });
  });
}

export function maxima(): Promise<MaximaResponse> {
  return new Promise((resolve, reject) => {
    (window as any).MDS.cmd("maxima", function (response: any) {
      if (response.status) {
        return resolve(response.response);
      }

      return reject();
    });
  });
}

export function maxContacts(): Promise<MaxContactsResponse> {
  return new Promise((resolve, reject) => {
    (window as any).MDS.cmd("maxcontacts", function (response: any) {
      if (response.status) {
        return resolve(response.response);
      }

      return reject();
    });
  });
}

export function mds(): Promise<MDSResponse> {
  return new Promise((resolve, reject) => {
    (window as any).MDS.cmd("mds", function (response: any) {
      if (response.status) {
        return resolve(response.response);
      }

      return reject();
    });
  });
}
