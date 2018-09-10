// Leap Year means 'Ano Bisexto' in portuguese.
var year = 1004;
while(year <= 2017){
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
        document.write(year + "<br>");
    year++;
}
document.write("<b>THAT'S ALL FOLKS \\o/<b>");
