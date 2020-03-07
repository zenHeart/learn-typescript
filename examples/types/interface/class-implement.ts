// 抽象文件接口,暴露读写方法
interface FileIO {
  // 返回 16 进制的字符串
  read(): string;
  // 写入 16 进制的字符串
  write(data: string): boolean;
}

// 文本读写 IO
class TextFileIO implements FileIO {
  read() {
    return 'text file';
  }
  write(data: string) {
    return true;
  }
}

// 图片文件读写 IO
class ImgFile implements FileIO {
  read() {
    return 'hex string data';
  }
  write(data: string) {
    return true;
  }
}
