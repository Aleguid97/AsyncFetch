fetch("https://striveschool-api.herokuapp.com/books")
.then(resp => {
    if (resp.ok){
        return resp.json()
    }
})

.then( books => {
    books.forEach(book => {
        const row= document.getElementsByClassName('row')
        const card= document.createElement('div')
        card.classList.add('card=group', 'col-sm-6', 'col-lg-4')
        card.innerHTML= `< div class='card mb-3'
        <img src='${book.img}' class='card-img-top' alt'...'>
      <div class='card mb-3'>
      <h5 class= 'card-title'>${book.title}</h5>
      <p class= 'card-text'>${book.price}</p>
      <button class= 'btn btn-succes mb-2'> Add </button>
      <br>
      <button class= 'btn btn-danger mb-2' onclick='deletecard(event)'> Discard </button>
      </div>  
      </div>`;
      row.appendChild(card)
    });
      console.log(books);
    })
    .catch(error => console.log(error));
    const deleteCard = event => {
        event.target.closest('.card-group').remove()
    }

