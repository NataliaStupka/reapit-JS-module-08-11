console.log("Module-09-Rysich");const t=document.querySelector(".date-day"),e=document.querySelector(".date"),o=document.querySelector(".date-month"),r=document.querySelector(".date-year"),n=document.querySelector(".digital-clock"),c=document.querySelector(".clock-seconds__arrow"),l=document.querySelector(".clock-minutes__arrow"),a=document.querySelector(".clock-hours__arrow"),s=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],d=["Неділя","Понеділок","Вівторок","Середа","Четвер","П`ятниця","Субота"];setInterval((()=>{const u=new Date,y=d[u.getDay()],m=u.getDate(),S=s[u.getMonth()],g=u.getFullYear(),i=u.getHours(),q=u.getMinutes(),x=u.getSeconds(),$=6*x,C=6*q,_=30*i+.5*q,k=`${i.toString().padStart(2,"0")} : ${q.toString().padStart(2,"0")} : ${x.toString().padStart(2,"0")}`;t.textContent=y,e.textContent=m,o.textContent=S,r.textContent=g,n.textContent=`Поточний час: ${k}`,c.style.transform=`rotate(${$}deg)`,l.style.transform=`rotate(${C}deg)`,a.style.transform=`rotate(${_}deg)`}),1e3);const u=document.querySelector(".js-box"),y=document.querySelector(".js-timer");let m=6;setTimeout((()=>{u.style.display="block";const t=setInterval((()=>{m-=1,y.textContent=m+"s",m||(clearInterval(t),u.style.display="none")}),1e3)}),3e3);
//# sourceMappingURL=module-09-Rysich.0d214e01.js.map
