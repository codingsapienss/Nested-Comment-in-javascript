let commentContainer = document.querySelector('.comment-container')


const createInput = () =>{
    let div = document.createElement('div')
    div.setAttribute('class' , 'comment-details' )
    div.innerHTML += `
            <input type="text" placeholder="Add comment" class="input">
            <button class="btn" type="submit">Submit</button> `
    return div
 }



const addReply = (text)=>{
    let div = document.createElement('div')
    div.setAttribute('class' ,"all-comments" )

    div.innerHTML += 
        ` <div class="card">
            <span class="text">${text}</span>
            <span class="reply"> Add Reply </span>
        </div>`
      return div     
}


commentContainer.addEventListener('click' , (e)=>{
    let replyClicked = e.target.classList.contains('reply')
    let btnClicked  = e.target.classList.contains('btn')
    let closestCard = e.target.closest(".all-comments")

    if(replyClicked){
        closestCard.appendChild(createInput())
        // e.target.setAttribute('style' , 'pointer-events: none')
    }

    if(btnClicked){
        const commentDetails = e.target.closest('.comment-details')

        let comment = commentDetails.children[0].value

        if(comment){
            closestCard.appendChild(addReply(comment))
        }

        commentDetails.remove()
    }
})

 