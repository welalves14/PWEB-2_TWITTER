const btnAddPostar = document.getElementById("postar") //botaão postar
const conteudo = document.querySelector("#conteudoNovoPost")
const novoPost = document.querySelector("#novoPost")
const btnNovoTweet = document.getElementById("btnNovoTweet")

const removerPost = (node) => {
  console.log(node)
  novoPost.removeChild(node)
}

btnAddPostar.onclick = function(e) {
  e.preventDefault()
  //alert("teste")
  //alert(conteudo.value)
  const estruturaDiv = document.createElement("div");
  //const postagem = document.createTextNode(conteudo.value);
  

    //novoPost.appendChild(postagem);
    
    estruturaDiv.innerHTML = `<div class="post">
                  <div class="post__avatar">
                      <img
                        src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                        alt=""
                      />
                    </div>

                  <div class="post__body">
                    <div class="post__header">
                      <div class="post__headerText">
                        <h3>
                          Somanath Goudar
                          <span class="post__headerSpecial"
                            ><span class="material-icons post__badge"> verified </span>@somanathg</span
                          >
                        </h3>
                      </div>
                      <div class="post__headerDescription">
                        <p>${conteudo.value}</p><!--INSERIR AQUI-->
                      </div>
                    </div>
                  
                    <div class="post__footer">
                      <span class="material-icons"> repeat </span>
                      <span class="material-icons"> favorite_border </span>
                      <span class="material-icons"> publish </span>
                      <span class="material-icons" onclick="removerPost(this.closest('.post').parentElement)"> delete </span>
                      
                    </div>
                </div>`   

    novoPost.prepend(estruturaDiv);

  
    // const btnDeletar = document.getElementById("btnremover");

    //       btnDeletar.onclick = function(e) {
    //         e.preventDefault();
    //         alert("o botao esta ok");
    //         //const feed = document.querySelector(".feed")[0];
    //         //feed.removeChild(novoPost);
    //         novoPost.remove();
    //       }



      //novoPost.appendChild(estruturaDiv);
      /*e.preventDefault()
      const newTask = document.createElement("li")
      const taskText = document.createTextNode(task.value)
      newTask.appendChild(taskText)
      toDoList.appendChild(newTask)  */
      conteudo.value = ""
}

btnNovoTweet.onclick = function(e) {
  conteudo.focus()
}
