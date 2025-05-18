type Album = {
	title: string;
	artiest: string;
	releaseYear?: number;
	genre?: {
		parentGenre?: string;
		subgenre?: string;
	};
};

type AlbumData1 = Pick<Album, "title" | "artiest">;
type AlbumData2 = Omit<Album, "releaseYear" | "genre">;

// It's not what i expect
type AlbumData3 = Extract<Album, "title" | "artiest">;
type AlbumData4 = Exclude<Album, "releaseYear" | "genre">;

type AlbumState =
	| {
			type: "released";
			releaseDate: string;
	  }
	| {
			type: "recording";
			studio: string;
	  }
	| {
			type: "mixing";
			engineer: string;
	  };

type NotReleased = Exclude<AlbumState, { type: "released" }>;

type Foo = "1" | "2" | 3 | 4;

// Exclude, Extract: for union
type Numbers1 = Exclude<Foo, string>;
type Numbers2 = Extract<Foo, number>;
