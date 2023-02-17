import React, { useEffect } from "react";
import noteImg from "../assets/simple-notes.png";
import { Link } from "react-router-dom";
import userStore from "../config/UserStore";
import { useNavigate, useLocation } from "react-router-dom";

function NoteDetail() {
	const navigate = useNavigate();
	const location = useLocation();
	const getNoteData = location.state.data;
	console.log("current location", getNoteData);

	//Define the inner information fields
	const noteId = getNoteData.getNoteByTitle._id;
	const noteTitle = getNoteData.getNoteByTitle.title;
	const noteDate = getNoteData.getNoteByTitle.date;
	const noteContent = getNoteData.getNoteByTitle.content;
	//Define the inner information fields

	const getToken = userStore((state) => state.token);
	//Execute the query function before render
	useEffect(() => {
		console.log("get store", getToken);
		var isAuthenticated = getToken.token;
		if (!isAuthenticated) return navigate("/");
	}, []);

	return (
		<div className="flex flex-wrap gap-5">
			<>
				<div>
					<Link
						data-id={noteId}
						to="/create-note"
						state={{ _id: noteId, title: noteTitle, content: noteContent, date: noteDate }}
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
									{noteTitle}
								</h3>
							</div>

							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								{noteContent}
							</p>
						</div>
					</Link>
				</div>
			</>
		</div>
	);
}

export default NoteDetail;
