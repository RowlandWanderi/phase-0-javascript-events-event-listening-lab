function addingEventListener() {
    const input = document.getElementById("input");
    function clickAlert() {
      alert("I was clicked!");
    }
    console.log(input.addEventListener("click", clickAlert))
  }
input.addEventListener('click', addingEventListener())