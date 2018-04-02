// Kata link: https://www.codewars.com/kata/extract-file-name


class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.match(/(?!\d+_)(.)+(?=\.[\d\w])/g)[0].substr(1);
    }
}
