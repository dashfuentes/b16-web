import React, { useEffect } from "react";
import noteImg from "../assets/simple-notes.png";
import { Link } from "react-router-dom";
import userStore from "../config/UserStore";
import { useNavigate } from "react-router-dom";

function NoteDetail() {
	const navigate = useNavigate();
	const getToken = userStore((state) => state.token);
	//Execute the query function before render
	useEffect( () => {
		console.log( 'get store', getToken )
		var isAuthenticated = getToken.token
		if(!isAuthenticated) return navigate("/")
		getNotes();
	}, []);


	return (
		<div className="flex flex-wrap gap-5">
			{data &&
				data.getNotes.map(({ _id, title, content, date }) => (
					<>
					<div>
						<Link
							data-id={_id}
							to="/create-note"
							state={{ _id: _id, title: title, content: content, date: date }}
							className=" w-1/4 h-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
						>
							<a href="#">
								<img
									className="rounded-t-lg w-4/5 pt-6 pr-5 py-6 pl-6 ml-12"
									src={noteImg}
									alt=""
								/>
							</a>
							<div className="p-5">
								<div className="w-72">
									<h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										{title}
									</h3>
								</div>

								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{content}
								</p>
							</div>
						</Link>

						<div>
							<button
								type="button"
								onClick={async (event) => {
									console.log(_id);
									await removeNote({
										variables: { _id: _id },
									});
								}}
								class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
							>
								Delete
							</button>
						</div>

						</div>
					</>
				))}
		</div>
	);
}

export default NoteDetail;
