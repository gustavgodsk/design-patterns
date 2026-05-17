function createImageProxy(filename) {
    let realImage = null;
    return new Proxy(
        {},
        {
            //get(target, prop) {
            get(prop) {
                if (prop === "display") {
                    return function() {
                        if (!realImage) {
                            console.log("Loading image from disk...");
                            realImage = {
                                filename: filename,
                                display() {
                                    console.log("Displaying file", filename);
                                },
                            };
                        }

                        realImage.display();
                    };
                } else {
                    if (!realImage) {
                        console.log("Loading image from disk");
                        realImage = {
                            filename: filename,
                            display() {
                                console.log("Displaying file", filename);
                            },
                        };
                    }

                    return realImage[prop];
                }
            },
        },
    );
}

// Usage
const image = createImageProxy("photo.png");
image.display(); // image loading... then display it
image.display(); // image has already loaded, so display it
