class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.replace(/\w\S*/g, function(word, index) {
      if (index > 0 && smallWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    });
  }
}

console.log(Formatter.titleize("a tale OF two cities"));
console.log(Formatter.titleize("Maurice a an but of and for at by from end"));
console.log(Formatter.capitalize("BURSTING BALLOON"));
console.log(Formatter.sanitize("Entert*ain(i{ng-Elephan^ts"))
