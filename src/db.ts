import { TrackEntity } from './track/track.entity';
import { UserEntity } from './user/user.entity';

interface DB {
  users: UserEntity[];
  tracks: TrackEntity[];
}
export const db: DB = {
  users: [
    {
      id: '19144c24-6ca7-49d3-a0b6-fb7e5e921930',
      login: '123123',
      password: '123',
      version: 1,
      updatedAt: 1730544472780,
      createdAt: 1730544472780,
    },
  ],
  tracks: [
    {
      name: 'track1',
      id: '19144c24-6ca7-49d3-a0b6-fb7e5e921932',
      artistId: null,
      duration: 100,
      albumId: null,
    },
  ],
};
