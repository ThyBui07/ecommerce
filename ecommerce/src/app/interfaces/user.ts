// export interface Roles {
//   reader?: boolean;
//   admin?: boolean;
// }

export interface User {
  displayName: string;
  uid: string;
  email: string;
  photoURL: string;
  isAdmin?: boolean;
}