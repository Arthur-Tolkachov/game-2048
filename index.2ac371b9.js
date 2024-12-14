function e(e){return e&&e.__esModule?e.default:e}var t={};const s="playing",i={start:"msgStart",lose:"msgLose",win:"msgWin"},l={w:"w",a:"a",s:"s",d:"d",ArrowUp:"ArrowUp",ArrowLeft:"ArrowLeft",ArrowDown:"ArrowDown",ArrowRight:"ArrowRight"},r=`<h1>2048</h1>
  <div class="controls">
    <p class="info">
      Score:
      <span class="game-score" id="game-score">0</span>
    </p>
    <button
      class="button start"
        id="start"
      >
      Start
    </button>
    <button
      class="button restart hidden"
        id="restart"
      >
      Restart
    </button>
  </div>`,a=`<tbody>
    <tr class="field-row">
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
    </tr>

    <tr class="field-row">
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
    </tr>

    <tr class="field-row">
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
    </tr>

    <tr class="field-row">
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
      <td class="field-cell"></td>
    </tr>
  </tbody>`,d=`<p class="message message-lose hidden" id="message-lose">You lose! Restart the game?</p>
  <p class="message message-win hidden" id="message-win">Winner! Congrats! You did it!</p>
  <p class="message message-start hidden" id="message-start">
    Press "Start" to begin game. Good luck!
  </p>`,n=()=>Array.from({length:10},(e,t)=>9===t?4:2)[Math.floor(10*Math.random())],h=()=>Math.floor(4*Math.random()+0),o=({field:e,exclude:t=[]})=>{let[s,i]=t,l=h(),r=h(),a=!!e[r][l];return l===s&&r===i||a?o({field:e,exclude:t}):[l,r]},c=e=>{let t=[...e],s=0,i=!1;for(let e=0;e<t.length;e++)if(t[e]===t[e+1]){let l=2*t[e];i=2048===l,s+=l,t[e]=l,t[e+1]=0}return{row:t,counter:s,is2048:i}},g=e=>e.filter(e=>!!e),f=e=>{let t=Array.from({length:4-e.length},()=>0);return e.concat(t)},u=e=>{let t=Array.from({length:4},()=>[]);for(let s=0;s<4;s++)e.forEach((i,l)=>{t[3-l][s]=e[s][l]});return t},m=e=>{let t=Array.from({length:4},()=>[]);for(let s=0;s<4;s++)e.forEach((i,l)=>{t[l][3-s]=e[s][l]});return t},w=({field:e,rtl:t=!1}={})=>{let s=0,i=!1,l=!1;for(let r=0;r<e.length;r++){let a=t?e[r].reverse():e[r],{row:d,counter:n,is2048:h}=c(g(a));s+=n,i=h;let o=f(g(d));l=l||a.some((e,t)=>e!==o[t]),e[r]=t?o.reverse():o}return{field:e,score:s,isWinner:i,wasChanged:l}},_=({field:e,rtl:t=!1})=>{let s=u(e),{score:i,isWinner:l,wasChanged:r}=w({field:s,rtl:t});return{field:s=m(s),score:i,isWinner:l,wasChanged:r}};t=class{field=null;score=0;fieldControls={};status=null;messages={};#e({key:e,show:t}){t?this.messages[e].classList.remove("hidden"):this.messages[e].classList.add("hidden")}#t(e){this.field=e}#s(e){this.score+=e}#i(){let e=Array.from({length:4},()=>[0,0,0,0]);this.#t(e)}#l(){let e=this._getField(),[t,s]=o({field:e}),[i,l]=o({field:e,exclude:[t,s]});e[s][t]=n(),e[l][i]=n(),this.#t(e)}#r(e){e.classList.add("container");let t=document.createElement("div"),s=document.createElement("table"),i=document.createElement("div");t.classList.add("game-header"),s.classList.add("game-field"),i.classList.add("message-container"),t.innerHTML=r,s.innerHTML=a,i.innerHTML=d,e.append(t,s,i)}#a(){this.controls={startBtn:document.getElementById("start"),restartBtn:document.getElementById("restart")}}#d(){this.messages={msgWin:document.getElementById("message-win"),msgLose:document.getElementById("message-lose"),msgStart:document.getElementById("message-start")}}#n(){return this._getField().some(e=>e.some(e=>!e))}#h(){let e=this._getField();for(let t=0;t<e.length;t++){let s=e[t];for(let e=0;e<s.length;e++)if(s[e]===s[e+1])return!0}let t=u(e);for(let e=0;e<t.length;e++){let s=t[e];for(let e=0;e<s.length;e++)if(s[e]===s[e+1])return!0}return!1}#o(){this._setStatus("win"),this._showWinMessage()}_setStatus(e){this.status=e}_getStatus(){return this.status}_getScore(){return this.score}_getField(){return[...this.field]}_setStatusIdle(){this._setStatus("idle")}_setStatusWin(){this._setStatus("win")}_setStatusLose(){this._setStatus("lose")}_setStatusPlaying(){this._setStatus(s)}_showStartMessage(){this.#e({key:i.start,show:!0})}_showWinMessage(){this.#e({key:i.win,show:!0})}_showLoseMessage(){this.#e({key:i.lose,show:!0})}_hideMessages(){for(let e in i)this.#e({key:i[e],show:!1})}_setupNewGame(){this.#i(),this.#l(),this._setStatusPlaying()}_initialize(e){this.#r(e),this.#a(),this.#d()}_rerender(){let e=document.querySelectorAll(".field-cell"),t=document.getElementById("game-score"),s=this._getField(),i=this._getScore();s.forEach((t,s)=>{t.forEach((t,i)=>{let l=e[i+4*s];t?(l.className="field-cell",l.classList.add(`field-cell--${t}`),l.textContent=t):(l.textContent="",l.className="field-cell")})}),t.textContent=i;let l=this.#n(),r=this.#h();l||r||(this._setStatusLose(),this._showLoseMessage())}_createNewCell(){if(this.#n()){let e=this._getField(),[t,s]=o({field:e});e[s][t]=n(),this.#t(e)}}_shiftLeft(){let{field:e,score:t,isWinner:s,wasChanged:i}=w({field:this._getField()});return this.#s(t),this.#t(e),s&&this.#o(),{wasChanged:i}}_shiftRight(){let{field:e,score:t,isWinner:s,wasChanged:i}=w({field:this._getField(),rtl:!0});return this.#s(t),this.#t(e),s&&this.#o(),{wasChanged:i}}_shiftTop(){let{field:e,score:t,isWinner:s,wasChanged:i}=_({field:this._getField()});return this.#s(t),this.#t(e),s&&this.#o(),{wasChanged:i}}_shiftBottom(){let{field:e,score:t,isWinner:s,wasChanged:i}=_({field:this._getField(),rtl:!0});return this.#s(t),this.#t(e),s&&this.#o(),{wasChanged:i}}};class p extends e(t){#c(){this.controls.startBtn.addEventListener("click",this.start.bind(this)),this.controls.restartBtn.addEventListener("click",this.restart.bind(this)),document.addEventListener("keyup",({key:e})=>{switch(e){case l.w:case l.ArrowUp:this.moveUp();break;case l.a:case l.ArrowLeft:this.moveLeft();break;case l.s:case l.ArrowDown:this.moveDown();break;case l.d:case l.ArrowRight:this.moveRight()}})}initialize(e){super._initialize(e),this.#c(),this._setStatusIdle(),this._showStartMessage()}getScore(){return this._getScore()}getState(){return this._getState()}getStatus(){return this._getStatus()}start(){this._setupNewGame(),this.controls.startBtn.removeEventListener("click",this.start.bind(this)),this.controls.startBtn.classList.add("hidden"),this.controls.restartBtn.classList.remove("hidden"),this._hideMessages(),this._rerender()}restart(){this._hideMessages(),this._setupNewGame(),this._rerender()}moveLeft(){if(this._getStatus()!==s)return;let{wasChanged:e}=this._shiftLeft();e&&this._createNewCell(),this._rerender()}moveRight(){if(this._getStatus()!==s)return;let{wasChanged:e}=this._shiftRight();e&&this._createNewCell(),this._rerender()}moveUp(){if(this._getStatus()!==s)return;let{wasChanged:e}=this._shiftTop();e&&this._createNewCell(),this._rerender()}moveDown(){if(this._getStatus()!==s)return;let{wasChanged:e}=this._shiftBottom();e&&this._createNewCell(),this._rerender()}}const S=new p,y=document.getElementById("game-2048");y&&S.initialize(y);
//# sourceMappingURL=index.2ac371b9.js.map
