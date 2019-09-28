export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}
export interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
  roles: Roles;
}

