import React from "react";

const Characters = ({ characters }) => {
	return (
		<ul
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3,1fr)",
				rowGap: "20px",
				columnGap: "12px",
				marginTop: "30px",
			}}>
			{characters.map(character => (
				<li key={character.id} style={{ listStyle: "none" }}>
					<img
						width={150}
						src={character.img_url}
						alt={`Photo of ${character.name}`}
					/>
					<h3
						style={{
							margin: "12px",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							width: "120px",
							textAlign: "center",
						}}>
						{character.name}
					</h3>
				</li>
			))}
		</ul>
	);
};

export default Characters;
