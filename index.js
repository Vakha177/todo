const list = document.getElementById('list')
const text = document.getElementById('text')
const button= document.getElementById('button')


button.addEventListener('click', (e) => {
    e.preventDefault();
  const li = document.createElement('li')
  li.textContent = input.value
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'x'
  const chekbox= document.createElement('input')
 chekbox.type= 'checkbox'
 li.prepend(chekbox)
  li.append(deleteButton)
  deleteButton.addEventListener('click' , (e) => {
    e.target.parentElement.remove()
  })
  list.append(li)
  input.value = ""
})
