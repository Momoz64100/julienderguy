export class IPortfolio {
    folder: IPortfolioFolder[];
}

export class IPortfolioFolder {
    title: string;
    images: IPortfolioImage[]
}

export class IPortfolioImage {
    id: number;
    extension: string;
}