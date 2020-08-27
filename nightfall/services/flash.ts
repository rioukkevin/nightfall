import fetchRequest from "../models/FetchRequest";

export const postTransaction : any = async (data: any) => {
  await fetchRequest({path: `/transactions/create/${data.establishment_id}`, method: "POST"})
};