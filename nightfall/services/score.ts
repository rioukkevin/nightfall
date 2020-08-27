import fetchRequest from "../models/FetchRequest";

export const getScores : any = async (top : Number, period : 'month' | 'year') => {
  const all_ranking = (await fetchRequest({path: `/users/ranking?period='${period}'`, method: "GET"})).ranking
  return all_ranking.splice(0, top)
};