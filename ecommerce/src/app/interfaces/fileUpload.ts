
export class FileUpload {
  id?: string;
  name?: string;
  price?: number;
  category?: string;
  url?: string;
  file?: File;

  // constructor(file: File) {
  //     this.file = file;
  // }
}

export class cartItem extends FileUpload{
  quantity?: number;
}