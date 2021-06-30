
var time=0 , timeCurve=0;
setInterval(()=>{
	$(`[alt^="img"]`).removeClass(`rotateImg`);
	$(`[alt^="img"]`).each(function () {
		setTimeout(()=>{
			$(this).addClass(`rotateImg`);
		},time);
		time+=1000;
	});
	$(`[alt="curve"]`).each(function () {
		setTimeout(()=>{
			$(this).addClass(`curve`).removeClass(`curveDown`);
		},timeCurve);
		timeCurve+=500;
		setTimeout(()=>{$(this).addClass(`curveDown`);setTimeout(()=>{$(this).removeClass(`curve`)},500);},6000-timeCurve);
	});
	time=timeCurve=0;
},6000);
var focused=[[`.inner`,`.inner__abs`],[`.list`,`p`]].forEach(function (elem) {
	$(elem[0]).on(`focusin`,function () {
		$(this).find(elem[1]).hide();
	})
	$(elem[0]).on(`focusout`,function () {
			$(elem[1]).show();
	});
})
var timerBurger=true;
$(`.head__flexo3`).on(`click`,function () {
	if (!timerBurger) return;
	timerBurger=false;
	setTimeout(()=>timerBurger=true,300);
	if (!$(this).hasClass(`cross`)) {
		$(this).addClass(`cross`);
		$(`.head__flexo2`).slideDown(300).css({display:"flex"}).attr(`hide`,false);
		$(this).children().hide();
	} else {
		$(this).children().show();
		$(this).removeClass(`cross`);
		$(`.head__flexo2`).slideUp(300)
	}
})
