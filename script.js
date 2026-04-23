function yes(){
  document.getElementById("result").innerText="素晴らしい判断です！👏";
  document.getElementById("flags").classList.remove("hidden");
}

function no(){
  document.getElementById("result").innerText="もう一度考えてみよう😢";
  document.getElementById("flags").classList.remove("hidden");
}