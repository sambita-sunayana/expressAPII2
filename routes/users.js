const user = users.find((user) => user.id === id)

  if(first_name) user.first_name = first_name;//shift+alt+down
  if(last_name) user.last_name = last_name;
  if(email) user.email = email;

  res.send(`User with the ${id} has been updated`)

});
export default router;

  
