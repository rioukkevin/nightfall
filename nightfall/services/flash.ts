import fetchRequest from "../models/FetchRequest";

export const postTransaction : any = async (establishmentId: any) => {
  return await fetchRequest({path: `/transactions/create/${establishmentId}`, method: "POST"})
};