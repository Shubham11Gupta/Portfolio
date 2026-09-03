import { portfolioData } from "../server/portfolio-data.js";

export default function handler(_request, response) {
  response.status(200).json(portfolioData);
}
