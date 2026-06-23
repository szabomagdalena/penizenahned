
const t={
cs:['Rychlá a transparentní finanční řešení','Pomáháme klientům získat přehled o možnostech financování.'],
sk:['Rýchle a transparentné finančné riešenia','Pomáhame klientom získať prehľad o možnostiach financovania.'],
en:['Fast and Transparent Financial Solutions','Helping customers explore financing opportunities.']
};
function setLang(l){
document.getElementById('hero-title').innerText=t[l][0];
document.getElementById('hero-text').innerText=t[l][1];
}
function calc(){
let a=+amount.value,m=+months.value,r=0.01;
amountv.innerText=a;monthsv.innerText=m;
let p=(a*r)/(1-Math.pow(1+r,-m));
monthly.innerText=p.toFixed(2)+' CZK';
}
calc();
