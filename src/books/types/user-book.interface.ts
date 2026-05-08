export interface UserBook {
  userBookId: number;
  title: string;
  synopsis: string;
  startDate: string;
  endDate: string;
  rating: string;
  notes: string;
  review: string;
  isFavorite: boolean;
  imageUrl: string;
  readingStatusId: number;
  readingStatus: string;
  createdAt: Date;
  updatedAt: Date;
}
