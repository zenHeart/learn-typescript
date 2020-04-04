class Album {
  label: Album.AlbumLabel;
  foo = Album.Foo;
}
namespace Album {
  export const Foo = 1;
  export class AlbumLabel {}
}
