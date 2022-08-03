CREATE TABLE Guest (
	id INT PRIMARY KEY AUTO_INCREMENT,
	firstname VARCHAR(60),
	lastname VARCHAR(60),
	passport INT NOT NULL,
	isvip BOOLEAN,
	email VARCHAR(50)
);

CREATE TABLE Typeroom (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	description VARCHAR(255),
	capacity INT,
	price FLOAT
);

CREATE TABLE Room (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	idtype INT NOT NULL,
	floor INT,
	
	FOREIGN KEY (idtype) REFERENCES Typeroom(id)
);

CREATE TABLE Booking (
	id INT PRIMARY KEY AUTO_INCREMENT,
	idguest INT NOT NULL,
	created DATETIME NOT NULL,
	status VARCHAR(25),
	total FLOAT,

	FOREIGN KEY (idguest) REFERENCES Guest(id)
);

CREATE TABLE RoomBoooking (
	id INT PRIMARY KEY AUTO_INCREMENT,
	idbook INT NOT NULL,
	idroom INT NOT NULL,
	income DATETIME NOT NULL, 
	output DATETIME NOT NULL, 
	
	FOREIGN KEY (idbook) REFERENCES Booking(id),
	FOREIGN KEY (idroom) REFERENCES Room(id)
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;
