import React, { useState } from 'react';

function Home (){
	const [login,setLogin] = useState(false);
	return <div>
		<h1>Welcome to My website !</h1>
	<button onClick={()=> setLogin(!login) }>{ login ? "Logout" : "Login"}</button>

	</div>

}

export default Home;
