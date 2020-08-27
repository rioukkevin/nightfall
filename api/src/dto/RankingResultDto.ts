import UserPointsDto from "./UserPointsDto";

export default interface RankingResultDto {
    ranking: UserPointsDto[];
    period: string;
}
