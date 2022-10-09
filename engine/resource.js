export class Resource {

  constructor(files) {
    this.ready = false;

  }


  static loadImages(files, onLoaded) {
    let names = Object.keys(files);
    var i = 0, numLoading = names.length;
    const onload = () => --numLoading === 0 && onLoaded();
    const images = {};
    console.dir(files);
    while (i < names.length) {
        const img = images[names[i]] = new Image;
        img.src = files[names[i]];
        img.onload = onload;
        i++;
    }
    
    return images;
  }
}
