## Screenthumb

Mishmash of tools that are used to generate a folder of compressed and cropped thumbnail images for a list of websites.

## Requirements

* pageres - `npm install -g pageres`
* phantomjs - `npm install -g phantomjs`

## Process

Generate the images

`cd imgs && pageres [ resolution ] < ../urls.txt`

Crop to thumbnail size and compress images

`gulp`

You should now have a `dist` directory with all of the screenshots in thumbnail form from all of the websites listed in urls.txt