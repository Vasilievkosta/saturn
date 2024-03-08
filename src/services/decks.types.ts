export type DecksResponse = {
  items: Deck[];
  pagination: Pagination;
};

export type Deck = {
  id: string;
  userId: string;
  isPrivate: boolean;
  name: string;
  cover?: string | null;
  created: string;
  updated: string;
  cardsCount: number;
  author: DeckAuthor;
};

export type DeckAuthor = {
  id: string;
  name: string;
};

export type Pagination = {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
};

export type getDecksArgs = {
  minCardsCount?: number;
  maxCardsCount?: number;
  name?: string;
  authorId?: string;
  userId?: string;
  currentPage?: number;
  itemsPerPage?: number;
};

export type createDecksArgs = {
  name: string;
  isPrivate?: boolean;
};

export type getLernCard = {
  grade: number;
  id: string;
  deckId: string;
  userId: string;
  question: string;
  answer: string;
  shots: number;
  answerImg: string;
  questionImg: string;
  questionVideo: string;
  answerVideo: string;
  created: string;
  updated: string;
};
