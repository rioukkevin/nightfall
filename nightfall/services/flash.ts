import fetchRequest from "../models/FetchRequest";

export const postTransaction : any = async (establishmentId: any) => {
  await fetchRequest({path: `/transactions/create/${establishmentId}`, method: "POST"})
};