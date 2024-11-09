import { AlbumEntity } from './album/album.entity';
import { ArtistEntity } from './artist/artist.entity';
import { FavoriteEntity } from './favorites/favorites.entity';
import { TrackEntity } from './track/track.entity';
import { UserEntity } from './user/user.entity';

interface DB {
  users: UserEntity[];
  tracks: TrackEntity[];
  artists: ArtistEntity[];
  albums: AlbumEntity[];
  favs: FavoriteEntity;
}
export const db: DB = {
  users: [],
  tracks: [],
  artists: [],
  albums: [],
  favs: {
    artists: [],
    albums: [],
    tracks: [],
  },
};
