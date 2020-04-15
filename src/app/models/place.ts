export class Place {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public descriptionUrl: string,
    public imageUrl: string,
    public price: number,
    public fromDate: Date,
    public toDate: Date,
    public userId: string
  ) {}
}
