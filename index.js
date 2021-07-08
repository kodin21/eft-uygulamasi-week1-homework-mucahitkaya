// import { name } from './example-other-file';
function myFunction() {
    window.location.href = "page1.html";
  }
  function myFunction2() {
    window.location.href = "page2.html";
  }
  function myFunction3() {
    alert("Tam 3 saat gerisayım fonksiyonu yazamadın çocuk adam!");
  }
  
  window.onload = function () {
    var seconds = 0;
    var remainTimeDOM = document.getElementById("time-remain");
  };
  function timeRemainCalculator() {
    seconds += 1;
    remainTimeDOM.innerText = `Kalan zaman: ${seconds}`;
  }
  
  /*----EKSİKLER----
  1)Artık her sayfa için 2 dakika gerisayımı yaz başar artık bunu yeter!
  2)Sayfalara önceki sayfaya dönebilmesi için önceki sayfa linki taşıyan buton koy
  3)Sayfalarda seçilen bilgileri diğer sayfalara taşıyabil
  4)user_informationdan gelen bilgiyle yeni açacağın onay sayfasında 
  yazılan değerlerle karşılaştır ve eğer koşullara uyuyorsa yapılması istenilen
  durumları yazdır
  Kolay gelsin işin uzun...
  */